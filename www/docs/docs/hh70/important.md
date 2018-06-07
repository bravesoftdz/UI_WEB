# HH70重要问题汇总

## 文档信息

### 说明
!> 此文档用来记录HH70项目开发过程中比较重要的问题，webUI Team成员需要重点关注

!> 发现文档有错误的地方可以填写评审Review记录

!> HH70项目上有其他重点问题大家及时添加

### 创建人信息
- 创建人: `xueqin.jin@tcl.com`

### 参考文档


### 评审Review记录


## release版本相关
### 1.bug4566955、4379656退回问题

#### 问题分析时间
- 2017.4.13 

#### 问题描述
- 已解并内测过的bug4566955、4379656被测试退回验证不通过
  - 4566955 `【HH70】【EE】开启短信报告，实际发送短信成功后没有短信报告`
  - 4379656 `【HH70】【EE】samsung note2登录路由器界面显示异常`

#### 问题分析
- 问题复现
  - 重烧版本HH70VB_E1_02.00_06_20170407
  - 在谷歌浏览器上测试bug4566955,发现开启短信报告功能，发送新短信后控制台报错.
    - ![](/hh70/img/important/bug4566955.png)
  - 根据谷歌控制台错误初步分析是编译的版本有问题。
  - 在IE浏览器上测试bug 4379656,发现IE下控制台报错导致IE下完全不能访问。
    - ![](/hh70/img/important/bug4379656.png)
  - IE出现的错误这个问题是之前已知的，出现这种情况时是提交release代码的人本地编译环境出现了问题，导致编译出的代码有问题。
- 问题责任定位
  - 查看有问题的版本HH70VB_E1_02.00_06_20170407 UI代码目录下versionInfo.txt文件版本号信息为"6662"
  - 查找对应SVN记录。
    - ![](/hh70/img/important/version6662.png)
  - 查找06版本自测邮件记录及当时自测的版本UI代码目录下versionInfo.txt文件版本号信息为"6658"。
    - ![](/hh70/img/important/email20170406.png)
  - 将6658版本的UI代码放到板子中对比测试没有以上两个问题，确定问题就是6662版本编译的代码有问题。
  - 在Firmware编译的UI代码为6658的版本自测没有问题的情况下，胡均带后续修改了UI代码编译后没有在IE上进行测试。

#### 问题责任人
- `jundai.hu@jrdcom.com`

#### 问题分析汇报人
- `xueqin.jin@tcl.com`

#### 问题结论与后续注意点
- 版本编译后需要在IE9/10/Edge、Chrome、FireFox等几个通用浏览器上简单看下是否能正常访问。
- 原则上版本已经发出了自测邮件UI没有要修改的内容后，直到下次要发版本前不再重复提交编译的代码，避免出现编译的代码没有进行足够的测试提交了，Firmware中间编译的版本没有经过UI这边测试出现问题。
- 自测邮件发出后如果发现有必须要添加到当天版本的内容，修改的人编译后要做好通用浏览器自测。相关修改点要在之前的自测邮件上进行回复，版本再次打包后测试回复修改点测试结果。
- 版本自测邮件添加上当时自测的版本里面UI代码versionInfo的版本号，便于后续追踪问题。
- 关于本地版本编译出现问题，已经在4.11号6699版本进行了解决，方案再说明如下：
  - 修改package.json中项目依赖的包为固定版本号。避免出现由于依赖包版本号不同导致每个人本地编译出来的代码不同的问题。
  - 更新package.json后需要删除之前的node_modules目录，重新cnpm i。
  - 之前本地编译环境有问题的注意重新更新下环境。

## 代码编写问题
- `待添加......`

## 调试测试相关
### 怎样将UI代码放到设备中
  - 在window的命令行（CMD的命令窗口），输入：telnet 192.168.1.1
  - 设备连接完成之后，运行命令修改webUI代码所在目录权限, 输入： mount -t ext4 -o remount,rw,sync /dev/sdb /ipq-resource
  - 使用WinSCP登陆到设备地址192.168.1.1
    - WinSCP安装包目录: \\\datasz.hq.ta-mp.com\SCD-SMARTHINGS\SWD\WebUI\01.Projects\HH70\WinSCP_5.9.0.6786
    - 首次登陆用户名 root 密码 oelinux123
    - ![](/hh70/img/important/winscp.jpg)
  - 将代码拖入设备UI代码目录 /ipq-resource/resource/webrc/www/

## HH70 升级指导
### 命令行升级方法
#### 烧录IPQ4018 image(MainBoard)的方法
- 插网线，使用WinSCP登陆到设备地址192.168.1.1。
- 将MainBoard目录下image文件nor-ipq40xx-standard-single.img拷贝到设备中的/tmp目录下。
- 拷贝完成之后，在window的命令行（CMD的命令窗口），输入：telnet 192.168.1.1。
- 设备连接完成之后，输入：sysupgrade -n /tmp/nor-ipq40xx-standard-single.img 进行IPQ4018的升级。
- 等待5~6分钟，待出现Upgrade completed，设备即烧录完成。
- 烧录完MainBoard后如果设备没有自动重启可以手动拔插电源重启设备

#### 烧录MDM9640 image(SmallBoard)的方法：
- 待IPQ4018 image烧写完成后，插入双公头USB线，进行9x40版本的升级；
- 在telnet 192.168.1.1命令窗口切adb口，输入：usb_switch_to pc
- 连接USB线，确认电脑的设备管理器，弹出ADB端口：
  - ![](/hh70/img/important/adb.png)
- 弹出ADB口后，在ADB窗口运行小板的ModemImage目录下的fastboot_flash_all_with_efs.cmd即开始MDM9x40的烧录。
- 弹出如下截图状态，即完成MDM9x40的烧录，同时整个HH70的烧入也完成了。
 - ![](/hh70/img/important/upgrade_finished.png)
 


