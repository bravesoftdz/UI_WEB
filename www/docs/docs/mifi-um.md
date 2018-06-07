# CPE/MW41 um在线管理

## 涉及产品
- MW41
- CPE(HH70/HH41/HH40)

## 软件环境
1. python 2.7 安装
2. github 账户和密码
3. sourcetree 账户和密码， clone代码：https://github.com/SCD-Product-UM/alcatel-move-help
4. xshell5 账户和密码
  
## 在线访问地址
url前缀http://www.alcatel-move.com/um/

例子:http://www.alcatel-move.com/um/MW41/00_generic/USER_Manual_fr.pdf
- `www.alcatel-move.com`和`www.tcl-move.com` 两个域名指向同一个服务器地址

- CPE的在线路径规则
  - `http://www.alcatel-move.com/um/url.html?project=项目名&custom=定制ID&lang=语言ID&version=版本号`
  - `http://www.alcatel-move.com/um/url.html?project=HH70&custom=IA&lang=en&version=HH70_IA_02.00_10`

## spm维护 
- svn地址
  - 1. //10.128.161.92/datacard/SPM/03 Customized Requirements/UM
- 命名规则
  - 1. 文件夹名字规则：CustomerID_Customername
  - 2. UM命名规则：USER_Manual_语言简写.pdf
  - 3. 非定制目录，如version1类型的目录，文件夹名中不能使用下划线_

- 其他规则
  - 1. 如某定制使用的是00_Generic的um，则不需要新建该定制目录
  - 2. 如某定制使用的是version1目录的um，则在该定制目录下添加空文件,文件名为version1.redirect

## 使用方法
- 运行auto.sh批处理命令，通过该命令获取svn上最新的代码
- 用sourcetree 工具把最新的代码上传到github上：https://github.com/SCD-Product-UM/alcatel-move-help
- 运行xshell工具，从github上获取最新的代码update到服务器


## 服务器维护
- 线上服务器
  - 服务器维护为`服务器组`
  - 服务器地址：`58.251.35.66`
  - 服务器环境代码路径:`/data/www/um/`






