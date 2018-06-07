# jimin.zhong

## 评审Review记录
- `2017-04-19` `xueqin.jin` Review建议：
  - 对于花费时间比较多的bug及还未处理完成的bug可以适当添加下描述分析，难点是什么，方便自己后续查看。
  
## 文档计划

## 工作日志

### 2017-09

#### 09-15
- `0.5h` 工作总结记录   
- `7.5h`
   - 1.DDNS功能
   - 2.HH41 GT版本发版验证
   - 3. 优化Beeline simlock状态

#### 09-14
- `0.5h` 工作总结记录   
- `7.5h`
   - 1.DDNS功能

#### 09-13
- `0.5h` 工作总结记录   
- `7.5h`
   - 1.DDNS功能

#### 09-12
- `0.5h` 工作总结记录   
- `7.5h`
    - 1.关于hh40 新增功能DDNS接口定义5.10.27 GetDdnsSettings
    5.10.28 SetDdnsSettings

#### 09-11
- `0.5h` 工作总结记录   
- `7.5h`HH41 GT版本
    - 1.After insert wrong NCK 5 times, advice should be 
    displayed with Spanish text "Este dispositivo ha sido bloqueado permanentemente y no se puede desbloquear.".
    - 2.1062480  Implementation Telcel's SIMLOCK

#### 09-08
- `0.5h` 工作总结记录   
- `7.5h`
    - 1. MIFI 40 MW40V Beeline Kazakhstan 发版验证

#### 09-07
- `0.5h` 工作总结记录   
- `7.5h`
    - 1. MIFI 41 MW41MP MetroPCS发版验证
    - 2.MW41TMO修改通用版切换西班牙语的时候样式问题
    - 3.ER版本开启tr069
    - 4.bug:5232292 [NOS Portugal][11] If NTP servers are changed, they cannot be returned to default

#### 09-06
- `0.5h` 工作总结记录   
- `7.5h`
    - 1. MIFI 41 MW41MP MetroPCS

#### 09-05
- `0.5h` 工作总结记录   
- `7.5h`
    - 1. MW41TMO 发版验证
    - 2. MIFI 41 MW41MP MetroPCS


#### 09-04
- `0.5h` 工作总结记录   
- `7.5h`MW41TMO 
    - 1.after auto checkin, they would like to add feature to show the popup notification (screenshot 2) along with the icon in notification, once the device has detected a FOTA update from GOTU. Currently only icon showed, popup only show when user click on the icon.
    - 2.FOTA string update
    - 3.修改自动检测fota和手动检测fota参数值，原来的跟底层的值相反了
    - 4.ER版本隐藏tr069

#### 09-01
- `0.5h` 工作总结记录   
- `7.5h`
    - 1.bug 5240162 Connected device list UI should be corrected to match FIGMA
    - 2. MIFI 40 MW40V Bite Lithuania version发版验证

### 2017-08

#### 08-31
- `0.5h` 工作总结记录   
- `7.5h`MIFI 40 MW40V Bite Lithuania 
    - 1.Add download link of English QG on WebUI homepage
    use the QG file on ALPB SW

#### 08-30
- `0.5h` 工作总结记录   
- `7.5h`
    - 1.MW40V Beeline修改ussd 页面样式以及弹出框的字体样式
    - 2.MW40V Beeline删去sim卡状态为无效卡的时候不合理的字符串，直接把这个字符串放在弹出框显示，当解simlock次数从1变为0的时候弹出此框提示语。其他情况不会提示这个提示语
    - 3.CPE帮忙确认，什么时候WEBUI才能提示“Update failed”

#### 08-29
- `0.5h` 工作总结记录   
- `7.5h`
    - 1.MW40V Beeline在ussd 页面增加模拟键盘输入错误时候删除的按钮

#### 08-28
- `0.5h` 工作总结记录   
- `7.5h`
    - 1. ER版本开启tr069在UI的显示 

#### 08-25
- `0.5h` 工作总结记录   
- `7.5h`
    - 1. ER版本隐藏tr069在UI的显示 

#### 08-24
- `0.5h` 工作总结记录   
- `7.5h`
    - 1. 统计MW41MP MetroPCS WebUI/APP string 
    - 2. bug 5190456 【MW40】【BeelineKZ】PIN WPS与PBC按钮显示没有上下对齐，不美观 发版验证
    - 3.bug 5190450 【MW40】【BeelineKZ】拨号状态能够开启，修改PIN码 发版验证
    - 4.MW40V Beeline修改弹出框按钮的大写字符串

#### 08-22
- `0.5h` 工作总结记录   
- `7.5h`
    - 1. MW40V Beeline fota页面添加离开页面时候销毁定时器

#### 08-21
- `0.5h` 工作总结记录   
- `7.5h`
    - 1. 修改bug 5189908
    - 2. 修改ussd 绑定错误code 以及ussd返回内容样式调试
    - 3.协助UE整理TMO图片

#### 08-18
- `0.5h` 工作总结记录   
- `7.5h`
    - 1.MIFI 40 MW40CJ IDEA India version版本发布验证
    - 2.MW40通用版修改通用版DNS页面对应的text样式

#### 08-17
- `0.5h` 工作总结记录   
- `7.5h`
    - 1.bug 5190450 【MW40】【BeelineKZ】拨号状态能够开启，修改PIN码
    - 2.MW40V Beeline优化sim状态
    - 3.MIFI 40 MW40CJ IDEA India version

#### 08-16
- `0.5h` 工作总结记录   
- `7.5h`
    - 1.CPE优化sim卡的状态页面

#### 08-15
- `0.5h` 工作总结记录   
- `7.5h`
    - 1.CPE优化pin页面
    - 2.修改定制FY版本的bug 5042155 手动搜网的时候，搜网成功了要自动拨号
    - 3.CPE优化短信状态的页面和pinManagement页面

#### 08-14
- `0.5h` 工作总结记录   
- `7.5h`
    - 1.MW40V Beeline 修改ussd页面的按钮的样式
    - 2.MW40V Beeline 修改logo的宽度
    - 3.bug 5055275 原来修改的方案 偶尔bug还是复现，现在换一种修改方案统一加loding

#### 08-11
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.MW40V Beeline更新logo.svg
    - 2.bugID ：5159898
    - 3.自测发现pin的页面有问题，已经修改

#### 08-10
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.MW40V Beeline修改在fota页面没有点击CHECK FOR UPDATES按钮 的时候不停弹出无法检测更新的框
    - 2.确认bugID ：5159898

#### 08-09
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.LINK6 LED Y900NB Play Poland 需求发布验证
    - 2.整理7月底到8月份的工作情况

#### 08-08
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.HH40V ALPB发版验证
    - 2.LINK6 LED Y900NB Play Poland 需求开发确认


#### 08-07
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.MIFI 41 MW41TM TMO版本发布验证
    - 2.LINK6 LED Y900NB Play Poland 需求资源整理分析

#### 07-20~08-05
- `67h`MW40V Beeline
- `10h`  MIFI 41 MW41TM TMO ： add "Apply as default" button in create profile page(用户创建profile时可同时设置为default profile)
- `3h` HH40V Generic 
- `8h`HH41NH Orange Dominica
- `8h`KEY40 IK40VD Airtel Group法语字符串更新以及版本发布验证

### 2017-07

#### 07-19
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.修改关于MW42TMbug  5059325 5064139

#### 07-18
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.修改关于MW42TMbug  5059354  5064062 5070567

#### 07-12
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.bug:5055275 

#### 07-11
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.添加hh40 fota 自动检测配置和功能（优化fota功能）
    - 2. HH41V Orange Tunisia 发版自测

#### 07-10
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.修改ussd 字符串
    - 2.添加hh40 fota 自动检测配置和功能

#### 07-07
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.MW42TM TMO版本发布，需求验证
    - 2. MW42TM SW string汇总
    

#### 07-06
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.MW41/42TM TMO增加blacklist 
    - 2.MW41/42TM TMO配置漫游弹出框的开关
    - 3.MW41/42TM TMO mac 过滤的字符串新增

#### 07-05
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.KEY40 IK40VD Airtel GROUP版本需求确认以及开发
    - 2.增加blacklist 


#### 07-04
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.KEY40 IK40VD Airtel GROUP版本需求确认以及开发

#### 07-03
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.KEY40 IK40VD Airtel GROUP版本需求确认以及开发

#### 07-01
- `0.5h` 工作总结记录   
- `4.5h` 
    - 1.MW42TM TMO 功能联调
    - 2.MW42TM TMO优化调试代码

### 2017-06

#### 06-30
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.MW42TM TMO 功能开发

#### 06-29
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.MW42TM TMO 功能开发
    - 2.关于MW42TM TMO 接口定义

#### 06-28
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.MW42TM TMO 功能开发

#### 06-27
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.MW42TM TMO 功能开发

#### 06-26
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.MW42TM TMO 功能开发

#### 06-23
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.MW42TM TMO 功能开发

#### 06-22
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.MW42TM TMO 功能开发
    - 2.修改4G模式下，发送ussd命令无信息返回，页面空白的bug

#### 06-21
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.MW42TM TMO 功能开发
    - 2. 在hh41 单独拎出来plmnConfig.js,优化ussd页面(cts报回来的关于ussd的bug:修改把0绑错了10 ,修改双击模拟键盘的数字全部数字背景会变蓝色背景的bug,暂时添加隐藏定制的plmn值的列表的开关)

#### 06-20
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.MW42TM TMO 需求分析

#### 06-19
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.MW42TM TMO 需求分析

#### 06-16
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.hh41 Airbox ussd 功能开发以及发版功能验证
    - 2.4936501 bug验证处理

#### 06-15
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.hh41 Airbox ussd 功能开发

#### 06-14
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.hh41 Airbox ussd 功能开发

#### 06-13
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.hh41 Airbox ussd 功能开发

#### 06-12
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.hh41 Airbox ussd 功能开发

#### 06-10
- `0.5h` 工作总结记录   
- `5h` 
    - 1.hh41 Airbox 功能开发

#### 06-09
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.hh41 Airbox 功能开发

#### 06-08
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.LINK6 LCD Y901NB Moov Niger遗留bug修改
    - 2.在hh70 hh40 hh41 通用版上隐藏routingRules
    - 3.修改hh70通用版routingRules设置报错问题

#### 06-07
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.LINK6 LCD Y901NB Moov Niger版本定制

#### 06-06
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.MIFI 40 MW40V Moov Niger版本定制

#### 06-05
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.hh41 Airbox 功能开发

#### 06-03
- `0.5h` 工作总结记录   
- `5h` 
    - 1.开始hh41 Airbox 功能开发

#### 06-02
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.HN_IDEA India bug 统一验证一遍
    - 2.开始hh41 Airbox 功能开发

#### 06-01
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.HN_IDEA India bug 4840910 做成配置，支持就开启ConnectionActivePopu: true
    - 2.HN_IDEA India bug 2474203 去掉原来第一次修改点。修改成播上号的时候，添加一条内容的时候要设置为默认的时候，弹出框提示需要断开拨号在配置文件configmanual.js 开启功能，
    - 3.HN_IDEA India bug:4840912 单独拎出来到对应的版本

### 2017-05
#### 05-31
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.routingRules.vue页面去掉多余的参数
    - 2.mw40 HN_IDEA India 新增字符串
    - 3.HH41项目需求会议

#### 05-26
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.优化routingRules.vue页面
    - 2.熟悉hh41 Airbox 功能代码
    - 3.解bug 4840912

#### 05-25
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.修改urlfilter和wanping页面的ids字符串，按功能命名
    - 2.修改onlineUpgade页面的ids字符串，按照功能命名 

#### 05-24
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.修改routingRules 页面的ids字符串按照功能模块命名
    - 2.修改901通用版解simlok的时候UI页面乱问题
    - 3 发版自测HUB41 HH41V Generic

#### 05-23
- `0.5h` 工作总结记录   
- `7.5h` 
    - 1.修改macfilter 页面的ids字符串按照功能模块命名
    - 2.修改parentalcontrol页面ids字符串按照功能模块命名
    - GPS Tracker ALM bug（review）

#### 05-22
- `0.5h` 工作总结记录   
- `5h` HH70 模块字符串ids修改和Y901 Moov Niger UM更新，WiFi信道修改发版验证
- `2.5h` WEB UI界面检测到有新版本，statu bar中显示检测到有新版本，点击更新图标无法转跳到在线升级界面] Edit Notification

#### 05-19
- `0.5h` 工作总结记录   
- `5.5h`公司体检
- `2h` HH70 模块字符串ids修改以及验证提交以及调试tr069底层修改

#### 05-18
- `0.5h` 工作总结记录   
- `7.5h`LINK6 LCD Y901NB Moov Niger修复原有的bug以及通用版遗留的问题


#### 05-17
- `0.5h` 工作总结记录   
- `1h` HH70 EE 字符串修改和Parental Control-Internet forbidden time起始时间缺少23:30，无法设置23:30-00:00区间(起始时间增加23:30，结束时间增加24:00)
- `6.5h`LINK6 LCD Y901NB Moov Niger版本

#### 05-16
- `0.5h` 工作总结记录   
- `4h` GetClientConfiguration新增参数“State”SetClientConfiguration新增参数“State.新增功能和优化hh70项目的tr069功能
- `3h`  HH70 issues on v11 发版功能验证
- `0.5h` LINK6 LCD Y901NB Moov Niger需求分析

#### 05-15
- `0.5h` 工作总结记录   
- `3.5h` 电脑病毒预防，升级补丁
- `4h` 分模块修改字符串的ids(还没有完成)

#### 05-12
- `0.5h` 工作总结记录   
- `7.5h` HH70 E1_EE字串翻译修改（包括通用版的同步验证）


#### 05-11
- `0.5h` 工作总结记录   
- `2.5h` 整理ik40 匈牙利语缺少字串
- `5h` HH70 E1_EE （学习项目原来不懂的流程）

#### 05-10
- `0.5h` 工作总结记录   
- `2.5h` 整理ik40 罗马尼亚语缺少字串和LINK6 LED Y900NB Turkcell Turkey 发版自测
- `3h` HH70 E1_EE 代码思路理解
- `2h` 参加时间管理培训


#### 05-09
- `0.5h` 工作总结记录   
- `3.5h` HH70 E1_EE bug
    - pinManagement.vue和simState.vue功能修改以及字符串修改
- `3h` HH70 E1_EE 发版功能验证
- `1h` LINK6 LED Y900NB Turkcell Turkey bug修改
    - bug fix: On the language change settings it shown as “Turk” but correct language should be “”Türkçe”.

#### 05-08
- `0.5h` 工作总结记录   
- `3.5h` HH70 E1_EE bug
    - Parental Control滑动按钮问题（代码优化）
- `4h` HH70 E1_EE 字符串修改与确认
#### 05-05
- `0.5h` 工作总结记录   
- `7.5h` HH70 E1_EE bug
    - Parental Control滑动按钮问题（分析问题，重新理一遍思路）

#### 05-04
- `0.5h` 工作总结记录   
- `5.5h` HH70 E1_EE bug
    - SIM PIN输入框的提示语"SIM PIN code should be 4-8 digits"修改为"SIM PIN must be between 4-8 digits long."
    - SIM PIN management界面下的所有"SIM PIN code“修改为"SIM PIN"
    - SIM PIN management界面下的所有"Required“修改为"Please enter current SIM PIN to continue."
    - Parental Control Add界面的URL下面提示语”Note: The URL address is forbidden to be accessed“更改为”Note: Add a URL here that you wish to block access to, e.g. www.facebook.com“，并将"Note"对齐输入框起始位置。
    - "Note:
    Please don't turn off your router when running updates. Turning it off may damage it."修改为”Do not power off your router during the update process as this may damage it.“
    - FOTA升级过程中Updating界面下的提示语修改为”Do not power off your router during the update process as this may damage it.“
    - FOTA升级过程中Online updates界面下的提示语修改为
    New firmware is available for your 4GEE Router.
    Version: HH70_E1_02.00.10
    Size: 20.7MB(统一修改了通用版的样式)
    - Parental Control优化页面样式
- `2h`HH70 E1_EE 验证以上修改的内容，包括通用版

#### 05-03
- `0.5h` 工作总结记录   
- `6.5h` HH70 E1_EE
    - pin页面优化，多次点击change PIN 按钮弹出框的标签出现Required问题（原因是弹出框引起的）
    - IP filter 增加字符串。以及弹出框弹出多次，分析后台报错问题（原因是弹出框引起的）
- `1h`验证以上修改问题包括通用版验证

#### 05-02
- `0.5h` 工作总结记录   
- `4.5h` IK40VD WANA Morocco
    - 字符串修改。和上一版本漏提的通用版代码。
    - HH70 E1_EE
    - IP filter 增加字符串
- `3h`IK40VD WANA Morocco 发版验证

### 2017-04

#### 04-28
- `0.5h` 工作总结记录   
- `6.5h` HH70 E1_EE bug
    - IP address规则错误，修改不在同一个网关的验证规则。同时去掉IP address预留10位验证规则
    - EE上隐藏routingRules页面
    - IP filter 增加了一条验证字符串之后。添加或者编辑的时候出现异常
- `1h` HH70 E1_EE 发版bug 验证:
    -  IP filter on SW - can click apply without adding anything to the blacklist/whitelist and says 'successful'.  Should be a prompt to user to add a valid IP to whitelist/blacklist.
    - IP address规则错误，修改不在同一个网关的验证规则。同时去掉IP address预留10位验证规则
    - EE上隐藏routingRules页面
    - IP filter 增加了一条验证字符串之后。添加或者编辑的时候出现异常

#### 04-27
- `0.5h` 工作总结记录
- `1h` IK40CJ dongle:（review后来fw暂时支持不了，暂时不做）
   
- `2.5h` HH70 E1_EE bug
    - 1.  Parental Control 在Status-Enable/disable切换的时候，所有滑动按钮会同步滑动，需要优化。（暂时没有找到合适方法）
- `4h` HH70 E1_EE bug:
    -  IP filter on SW - can click apply without adding anything to the blacklist/whitelist and says 'successful'.  Should be a prompt to user to add a valid IP to whitelist/blacklist.（后来发现有一点问题，暂时解决了，只是还有隐藏的问题没有梳理通）

#### 04-26
- `0.5h` 工作总结记录
- `1h`HH40 bug:（review）
    - 4637596(已经转给胡军带跟踪)
    - 4644654
    - 4639601
- `0.5h`HH70 E1_EE：1.家长控制的提示语合入。2.HH40 Wan Ping 提示语修改合入
- `2.5h` HH40 bug发版验证
    - 4639610
    - 4639595
    - 4639584
    - 4639547
    - 4637599
    - 4637589
- `3.5h` IK40CJ dongle 新增功能（绑定pc mac地址指定固定的pc才能访问webui）demo（未完成）

#### 04-25
- `0.5h` 工作总结记录
- `3h`HH40 bug:
    - 4637596(review没有复现会继续跟踪)
    - 4637599
    - 4639547
   HH70 E1_EE 修改家长控制这个标题的换行
- `1.5h`ik40定义API：5.10.28 GetBindToPcSettings和5.10.28 SetBindToPcSettings
- `3h` HH40 bug分析
    - 4637589（已经解决）解决方法：分析出现浏览器第一次访问UI的时候，如果UI页面是直接需要输入字符或者密码的输入框，直接按enter键，webui会刷新重新加载，但是不会设置成功。类似pin页面登录页面或者wps都是如此。分析是框架的原因，所以统一跟登录页面一样添加
    form(@keyup.enter="提交的方法" @submit.prevent)如果不加这个标签，类似的页面都会出现浏览器第一次加载时，在输入框输入数字或者密码，直接按enter键的时候，webui会刷新重新加载，但是不会设置成功。

#### 04-24
- `0.5h` 工作总结记录
- `4.5h`HH40 bug:
    - 4640329(review)
    - 4639610
    - 4639595
    - 4639584
- `3h` HH40 bug分析
    - 4637589（还没有找到解决办法）

#### 04-21
- `0.5h` 工作总结记录
- `4h` HH70 添加解pin的时候增加AutoValidatePinState勾选框功能
- `2h`HH70 E1_EE
   发布版本bug验证：
    - 4596401
    - 4596392
    - 4596269
    - 4596279
- `0.5h` 其他项目bug review
  - 334299
  - 472394
  - 539722
- `1h` 其他：
    绩效面谈  

#### 04-20
- `0.5h` 工作总结记录
- `3h` sublime安装Markdown Preview插件
- `2.5h`其他项目
   review gps-tracker-help代码
- `2h`HH70 E1_EE（优化代码功能）

#### 04-19
- `0.5h` 工作总结记录
- `3h` HH70 E1_EE
  - bug:
    - 4596288（分析走单）
- `4.5h`其他项目
  - bug review: 
    - 416842
    - 762825
    - 798222
    - 958594
    - 976287


#### 04-18
- `0.5h` 工作总结记录
- `7.5h` HH70 E1_EE
  - bug:
    - 4596288（分析）
    - 2 or more URLs cannot be added to the same device.
验证结果FAIL。同一个设备可以添加多个URLs，但是同一个URL可以重复添加到 同一设备？应该提示该设置已存在。此外，该界面显示也有问题。

  
#### 04-17
- `0.5h` 工作总结记录
- `3.5h` HH70 E1_EE
  - bug:
    - 4596392
    - 4596279
  - 与测试沟通HH70VB_E1_02.00_07_20170414版本 关于webui修改具体点
- `2h` 熟悉.md格式文件的流程
- `2h` 熟悉docs代码流程





