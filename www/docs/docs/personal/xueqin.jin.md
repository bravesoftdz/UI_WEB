# xueqin.jin

## 评审Review记录

## 文档计划

- HH70项目图片资源使用方案
- HH70项目各模块负责人

## 工作日志

### 2017-07
#### 07-30
- `4h` MW40V beeline
  - 提交beeline图片资源
  - 纯色Icon转为iconfont使用，示例见main.vue
  - 非纯色Icon放在svg目录下使用。
  - personal Info API 跨域问题研究，最终结论是由于Beeline API服务器不支持JSONP，UI上无法拿到API返回，需要FW底层发起Beeline API请求。
- `4h` Team事物
  - Team 会议
    - 项目负责人重新划分：
      - MW40V、HH70：游欢
      - MW41NF、MW40V1：羊茂堂
      - HH41：胡均带
      - IK40、MW41TM、MW42TM、HH40：钟继敏

#### 07-28
- `8h` MW40V beeline
  - personal Info功能。
  - traffic bug。
  - 未用到字符串搜索删除。
  - 整理第一版本字符串统计表格。

#### 07-27
- `6h` HH41&HH40&HH70 
 - 1.修改通用版本logo图标引入方式为img方式引入，修改对应样式。修改通用logo尺寸。
  后续简单logo定制给回的svg图片基本要求是缩放到64px高度时显示正常，已与UE julie沟通。
  目前所有右logo定制的版本都测试过。
 - 2.修改通用logo样式后需要同步修改的相关版本：E6 nos版本，E1_EE版本已修改及测试。
 - 3.beeline版本之前logo有背景色不正确，已替换。
- `2h` MW40V beeline
  - personal Info功能及traffic功能接口定义。
  - traffic功能模拟动态数据实现。

#### 07-26
- `4h` HH41&HH40&HH70 
  - HH41NH Claro Dominica 新需求评估
    - Auto pin
    - cell lock
    - UE资源确认
  - CPE项目简单颜色定制方案实现及说明，组内及UE、SPM
- `4h` MW40V beeline
  - traffic data图表动态数据研究。

#### 07-25
- `8h` MW40V beeline
  - personal Info功能beeline客户提供API实际测试。

#### 07-24
- `8h` MW40V beeline
  - SVG图片资源确认，部分图片有问题，需要再UE再处理。
  - 1.修改数据流量单位区分不同语言。对应翻译已添加
  - 2.替换信号格及logo的svg文件，删除没有用到的图片。
  - 3.修改traffic及personalInfo样式，添加对应字符串ids

#### 07-21
- `1h` HH41&HH40&HH70  
  - HH70VH ALFR（7.21）-均带
  - HH70VH ALHR （7.24）- 游欢
  - HH40V ALHR version （7.25）- 待分配
  - 需求站点Custom Name命名规则确认 http://10.129.60.22:8008/#/listReq/HH70 --待SPM反馈
  - [5092720][ [HH40][Italy_PosteMobile]update界面，没有可用新版本时提示语不正确，提示的是couldn't check for updates]--继敏
  - 5092716][ [HH41][Latam]WEB UI主界面statu bar中仍显示USB status（Device access和HOME界面也有）HH41并不支持，应去掉]--茂堂
  - [5092719][ [HH41][Latam]WIFI显示界面仍有5G相应信息显示，HH41不支持5G] --茂堂
- `4h` MW40V beeline
 - beeline 与FW相关API需求项整理，已发邮件
 - beeline 7.20号新的Ergo更新点确认。
 - beeline 字符串整理方案邮件。
 - beeline 代码修改：
  - 1.从config.js配置中删除没有用到的模块配置
  - 2.从map.js中删除没有用到的模块的字符串（没有按模块划分的部分只搜索了几条没用的删除了，其他还需要后续删除）
  - 3.从api中删除了没有用到的模块js文件
  - 4.删除router.js中没有用到的模块
  - 5.增加ru及kz对应语言定制文件。

#### 07-20
- `4h` Team工作  
  - 思维导图培训
- `4h` MW40V beeline
 - beeline代码主菜单页面公共结构样式添加实现

#### 07-19
- `1h` HH41&HH40&HH70
- `5h` MW40V beeline
 - beeline UI07-18更新需求项梳理
 - beeline代码main页面代码修改,整理需要FW支持的功能
- `0.5h` MW42TM
  - MW42TM短信时间显示问题确认
- `1h` MW40V1
  - WEBUI on mobile phone策略

#### 07-18
- `1h` IK40
  - IK40 Orange Tunisia 需求初步评估
- `7h` MW40V beeline
 - beeline UI需求组内分析会议及任务分配
 - beeline代码菜单样式修改，添加traffic 图表 demo

#### 07-17
- `1h` HH41&HH40&HH70
- `5h` MW40V beeline
 - beeline UI需求疑问整理
 - beeline代码修改菜单路由，添加文件

#### 07-13
- `1h` HH41&HH40&HH70
 - 二维码图片更新及验证
- `2h` HH41 KR(flybox) 样式需求修改及浏览器手机兼容显示测试
- `5h` MW40V beeline
 - beeline UI需求梳理
 - beeline代码菜单结构等修改

#### 07-12
- `6h` MW40V beeline
 - beeline 需求Personal info与PDM澄清。
- `1h` HH41 KR(flybox) 样式需求
- `1h` HH40 NOS VPN 需求Proposal及API确认

#### 07-11
- `8h` MW40V beeline
 - beeline 需求Personal info API研究及对应需要PDM、CTS、FW提供的资源及支持。

#### 07-10
- `8h` MW40V beeline
 - beeline 需求feedback review及会议
 - my account 图表预研，显示效果demo已实现。

#### 07-7
- `6h` MW40V beeline
 - beeline mobile UI 评估
 - my account 图表预研

- `2h` HH40 NOS
  - 需求确认及assign

#### 07-6
- `8h` MW40V beeline
  - 全定制项目原始需求梳理及会议沟通

#### 07-5
- `7h` MW40V beeline
  - 全定制项目原始需求
- `1h` Team工作
  - 专利预研文档

#### 07-4
- `4h` MW40 zain
 - 手机上切换页面时刷新问题。优化方案：左右切换模块时，如果是已经加载过的页面不再重复请求html资源。
- `4h` HH40
 - HH40V NOS 葡萄牙的需求评估&study

#### 07-3
- `6h` Team工作
  - Q2绩效计划考评
  - 专利样例研究
- `2h` HH40
 - HH40 A1定制的要求，HH40 A1定制的要求，FOTA升级需要自动检测更新--继敏

### 2017-06
#### 06-30
- `3h` Team工作
  - Q3培训计划制订
- `1h` MW40V1
 - MW40V1 Ergo review，新增5G--游欢
- `4h` HH41 Airbox  
  - change password 弹框添加不再提示功能需求分析及方案确定

#### 06-27
- `5h` MW41TM / MW42TM
 - MW41TM / MW42TM新需求分析确认
  - 1.  Can you create blacklists and whitelist of MACs
  - 2.  configuring static IP on the device
- `3h` Team工作
 - Team专利推广及讨论

#### 06-26
  - 休假

#### 06-23
- `5h` HH41 Airbox   
  - Airbox plmnConfig改名为airboxConfig及测试
  - Orange_Tunisia 版本测试、代码review及指导
    - network connection及your client area需求理解及代码
- `3h` HH40 A1
 - 需求及实现方案指导,不同的PLMN匹配logo 

#### 06-22
- `2h` HH41
 - bug修改
  - 修改WPS初始化方法中没有定义wpsMode初始值的bug
- `5h` MW42TM
  - MW42TM TMO 2017Q3需求分析
- `1h` HH41 Airbox   
  - Airbox代码review（plmnConfig文件后续修改）

#### 06-21
- `7h` HH41 Airbox   
  - CTS测试回复bug
  - Airbox代码review及指导修改
   - 1.从src代码中删除plmnConfig.js文件引用
   - 2.在Airbox代码中将plmnConfig.js文件在config_custom.js中引用。
   - 3.修改对应用到plmnConfig配置项的页面引用方式为从config配置中引用
   - 4.恢复plmnConfig文件中茂堂添加的plmnHelpYourClientArea spn相关内容被继敏误删的部分
   - 5.添加状态栏start browsing web链接及对应样式修改为白色。
   - 6.start browsing web链接作为可在custom_config中可以配置的项
   - 7.修改My number大小写
- `1h` MW42TM
  - MW42TM TMO 2017Q3需求分析

#### 06-20
- `3.5h` MW40 zain   
  - 移动端备选方案研究
 
- `4.5h` HH41 Airbox   
  - CTS新给到需求文档分析
   - 1.  Page6: HH41没有电池，connection不会显示电池相关信息
   - 2.  Page8: Some SMS are identified as « important » with the icon. These are the SMS received from the numbers listed in the “Info SMS sender” field in the Settings file.
没有重要短信号码列表信息，短信列表中目前没有重要图标显示，MW40 MEA上也没有做过，需要提供相关信息。
   - 3.  Page8：短信转发显示与字符串与PDF截图有差异，目前是和HH70上做过的短信转发一样，建议这个可以保留跟通用差不多显示结构，避免相同功能维护多套。  
   - 4.  Page9: Once a new message received, the user is informed via a popup notification inside the webUI (only for admin).这个目前没有，MW40 MEA上也没有做过
   - 5.  Page10: HH41没有5GHz WiFi
   - 6.  Page13: WIFI Extender功能没有，包括之前我们其他的通用版本及Airbox定制版本都没有支持过
   - 7.  Page15：Start Browsing the web目前软件上没有，需要FW支持Redirection mechanism功能
   - 8.  Page19：File sharing功能没有
   - 9.  Page20-21 与PDF不一致，Roaming目前软件上没有做任何定制
   - 10. Page22与PDF不一致，目前软件初始就有默认语言，不需要弹出语言选择框让用户选择，并且语言选择样式由于要和登陆后页面保持一致，与此处显示不一致。
   - 11. Page24：SPN implementation项根据不同的SPN来显示对应的help and support信息在目前软件上没有，KR版本上没有提供相关信息，后续有其他版本有需求再根据需求添加。
   - 12. Page27 FAQ内容目前软件是用的Apple针对HH41项目新定义的内容。

#### 06-19
- `8h` MW40 zain   
  - 旋转效果插件修改，去除旋转滑动效果。

#### 06-16
- `8h` HH41 Airbox   
  - 内部测试及修改bug

#### 06-15
- `1h` Y858 Russian
  - Russian language for WebUI
- `7h` HH41 Airbox   
  - 内部测试

#### 06-14
- `3h` HH70
  - HH70 EE ALM系统全部bug分析
  - Connected VAL专项测试报告评审
- `3h` HH41 Airbox   
  - 组内其他成员Airbox代码review，测试及指导。
- `2h` MW40 Zain  

#### 06-13
- `8h` HH41 Airbox
 - bug修改
 - 组内其他成员Airbox代码review及指导。

#### 06-12
- `8h` HH41 Airbox
 - 进度review
  - help\faq转给茂堂 
  - 其他重要问题内部review：
    - 1.  字符串从MW40Airbox项目上找，但是ids大家按照现在的规则重新定义,字符串统一放到对应语言的_custom.js文件。Index页面的放在index:{}部分，help放在help:{}，FAQ放在faq:{}
    - 2.  对应的法语和阿拉伯语的翻译一并从MW40 Airbox上复制，英语的字符串移植过来时首字母改为大写。
    - 3.  首页有很多鼠标移上时显示的title内容，这些部分字符串不要漏了添加。
    - 4.  faq的具体内容PDM还未给到，我今天会催下，先实现功能，字符串先用ids命名代替。help下两个页面注意要和index页面一样做自适应显示，参考MW40 Airbox效果。
    - 5.  index下connection、usage、messages、help下useful information等页面需要实时显示的内容要注意处理。
    - 6.  your client area\ help & support根据PLMN定制这个需求会议上讲的将所有定制的plmn和具体显示内容整理成Json对象的方式在页面调用，这个进度怎样，@继敏和均带说下状态，是否需要支持。
    - 7.  样式上对应模块的ar下的显示注意不要漏了修改，效果参考MW40 Airbox即可。
    - 8.  功能还未完成的，字符串先定义好添加，需要统计是否有缺翻译的。
    - 9.  目前还没看到谁提交代码，大家做完了多少就提交多少，这样好及时review状态。
    - 10. 首页的登陆和simcard公共功能我已经都提交SVN了，大家注意看SVN记录调用。
  - 资源缺省跟进
   - FAQ需求资源确认
   - 短信未读状态图标颜色确认

#### 06-10
- `2h` HH41&HH70 Generic
 - 1.修改restore页面confirm弹框类型为type:"warning",与所有其他confirm弹框保持一致。
 - 2.修改阿拉伯语下alert类型弹框右边由于没有类型图标导致空出一块的bug
 - 3.修改internetStatus页面a标签类型的按钮样式，统一使用el-button样式，减少样式冗余。（同时同步到EE项目上）
 - 4.登陆模块添加登陆完成后判断分支，如果登陆后路由需要留在index页面，重新reload页面。
 - 5.修改logo在IE9下显示宽度异常的bug，svg上宽度需要固定。
- `6h` HH41 Airbox
 - 1.添加msisdn及对应自适应显示定制样式。
 - 2.修改logo在IE9下显示宽度异常的bug
 - 3.修改首页弹框自适应样式
 - 4.添加首页弹出sim框对应逻辑实现及调用示例，示例暂时放在connection.vue模块
 - 5.添加首页需要登陆才能操作的按钮公共方法checkLogin,未登录时，点击按钮先弹出登陆框，登陆完成后刷新index页面。已经登陆时调用按钮本身需要的方法。对应示例也在connection.vue模块：@click="$parent.checkLogin(connectEvent)"

#### 06-9
- `6h` HH41 Airbox
 - 1.添加logo图片
 - 2.修改右上角菜单栏样式及事件绑定方式
 - 3.修改阿拉伯语下页面切换按钮样式
 - 4.删除没有用到的样式
- `2h`MW40 zain
  - 小于500px下弹框跟随页面滑动样式实现及测试

#### 06-8
- `8h` HH41 Airbox
  - Airbox增加修改如下：
  - 1.logo改为使用SVG文件
  - 2.修改公共样式，添加index页面switch按钮样式，示例在connection.vue及wifi.vue中有
  - 3.添加滑动jQuery插件到通用目录
  - 4.index页实现Airbox滑动切换模块效果，已兼容手机

#### 06-7
- `1h`MW40 与Y900流量数据分析
- `7h`MW40 zain
  - mobileUI可行性分析及研究，结论已汇报

#### 06-6
- `2h` MW40 版本需求分析 assign 支持
  - MW40V Moov Niger
  - MW40 zain 会议，横屏问题
- `0.5h` HH70EE CTS问题分析定位    
- `0.5h` HH40& HH41 
  - 修改通用版本Device Access页面图标，按照Ergo及UE新提供的。
- `6h` HH41 Airbox
  - 首页在移动设备上的滑动实现 

#### 06-5
- `0.5h` Plus12 平板项目WebUI问题答疑 
- `0.5h` HH70EE状态Review
- `1h` HH40& HH41 
  - 修改通用版本Device Access页面图标，UE新提供的图标还有点问题，已沟通等待新图片资源。
- `6h` HH41 Airbox
  - 首页在移动设备上的滑动实现 

#### 06-2
- `8h` HH41 Airbox
  - 首页模块滑动实现 

#### 06-1
- `8h` HH41 Airbox
  - 首页模块滑动实现 

### 2017-05
#### 05-31
- `2h` Team事物
  - MW40CJ Idea India 继敏
  - HH70 EE 6.1号发版本
  - HH70VH Orange Poland 6.2号发版本，金辉负责定制项
  - MW41NF Telefonica Chile version jundai
- `6h` HH41V Orange Tunisia 
  - Team内部需求分析会议
  - 新提供图片资源及相关代码整理提交
  - 交互研究

#### 05-27
- `8h` HH41V Orange Tunisia 
  - 整理Airbox2.0demo代码发给组内成员参考
  - 整理图片缺省及Proposal疑问点邮件发出
  - 整理已有的图片提交到代码目录
  - 需求表分析
    - your client area link(plmn)
    - help and support text(plmn)
    - ussd command(plmn)
    - WIFI country code(plmn) and country list display
    - start startBrowsingWeb link 
    - msisdn display
    - network type display(plmn)

#### 05-26
- `7h` HH41V Orange Tunisia 
  - 开发目录及基本页面结构代码完成
  - 按模块分配开发任务
    - connection\usage ----均带
    - sms ----游欢
    - ussd\help\faq----继敏
    - wifi----金辉
    - index\header\其他整体样式及交互效果实现----金雪琴
  - 整理需求疑问邮件发出
- `1h` TL 月会
  - Team月度培训及专利任务

#### 05-25
- `8h` HH41V Orange Tunisia
  - 开发目录及基本页面结构划分及代码编写
    - 1.添加Airbox全定制代码目录，首页及help\FAQ定制对应的vue文件结构。
    - 2.修改了Airbox部分颜色样式为Airbox风格
    - 3.添加了Airbox的字体文件
    - 4.修改src目录App.vue文件判断为根据当前路由判断。

#### 05-24
- `1h` HH41V Orange Tunisia
- `4h` HH70项目图片资源使用方案文档编写
- `2h` 参加员工沟通大会
- `1h` HH70 
  - 添加SignalStrength参数接口返回时状态处理，处理后只会出现0-4五种状态，删掉不需要用到的图片ic_signal5.svg

#### 05-23
- `6h` MW41TM
  - 1.修改router页面设置页面disable属性时会将其他页面也设置为disable的属性的bug
  - 2.修改使用WIFI连接设备并进行下载时，断开WIFI并马上重连WIFI，页面会不停的弹出消失下载完成提示升级的页面。此bug是由于断开重连WIFI后获取到的状态还是upgrading导致的。
- `2h` HH41V Orange Tunisia

#### 05-22
- `2h` TMOUS MW42 MTR 需求
- `4h` HH70 EE bug分析确认
  - EE Test Exit report for HH70
- `2h` HH70项目图片资源整理

#### 05-19
- `4h` MW41TM  
  - 1.  Add DNS settings in “Router Settings” page --测试
  - 优化router settings DHCP切换为Disable时,隐藏的数据还原为初始接口值。 --测试
- `4h` HH70 EE
  - 6.IPHONE 5S&IPAD MINI1 WebUI界面缩放至最小并分别左右挪动，WebUI缺失完整性。
  - 13 There is no EE logo /icon next to 4GEE Router on the tab header
  - 14 The tab header for the User Manual is "192.168.1.1"

#### 05-18
- `4h` MW41TM  
  - 1.  Add DNS settings in “Router Settings” page --测试
  - 优化router settings DHCP切换为Disable时,隐藏的数据还原为初始接口值。 --测试
- `4h` HH41 
  - HH41V Orange Tunisia web ui定制评估

#### 05-17
- `2.5h` HH70EE 20170516新增问题：
  - 提示语” Telephone number can support up to 20 digits, including “+” and numbers.”修改为"Please enter a valid recipient's number." - 游欢
  - “SIM PUK should be 8 digits.”应修改为“SIM PUK must be 8 digits long.” - 继敏
  - Monthly data volume start date只有1st-28th，缺少29th/30th/31st。----均带
  - Parental Control-Internet forbidden time起始时间缺少23:30，无法设置23:30-00:00区间。----继敏
  - PC1和PC2连接Router，PC1为Login状态，PC2尝试Login后PC1变成logout状态，PC2切换WebUI其他菜单后变成Logout状态。----茂堂
  - SMS-Inbox读取SMS后点击Reply，不输入SMS内容切换至其他界面，此时应增加判断-提示用户“是否保存至草稿箱”或“不保存并取消回复”。目前SW12会导致再返回New message页面时，接受号码不为空。----游欢
  - WebUI界面缩放至最小并分别左右挪动，WebUI缺失完整性。（现象见附件截图）----茂堂
- `0.5h` X602 Orange 可行性评估会议  
- `5h` MW41TM  
  - 1.  Add DNS settings in “Router Settings” page
  - 优化router settings DHCP切换为Disable时,隐藏的数据还原为初始接口值。

#### 05-16
- `3h` HH70EE  
 - HH70 issues on v11
  - 1.  Services-USB- Note: 1. Enable Samba server in Services > Storage share. “Storage share” change to “USB mass storage”. 
  - 2.  双栈拨号后Router无服务，右上角状态栏WIFI灰化。（已确认样机WIFI LED为长亮，PC可以收到Router WIFI。）--- 分析为接口GetSystemStatus返回有问题，没有环境没有复现
  - 3.  双栈拨号后Router无服务，Connecet/Disconnect按键缺失。--- 分析为接口GetSystemStatus返回有问题，没有环境没有复现
  - 4.  双栈拨号后Router无服务，Network name显示为空，此状态Network name应显示为”No service”。---按需求修改
  - 5.修改登陆模块按钮与remember password的间隙，尽量避免手机上误点击
  - 6.修改forgotPassword引用的颜色为从color.scss引用，common.scss文件中不要出现直接写颜色值。
  - 7.修改lansettings页面 start IP address验证方法IsAvailableIpPool，增加全部参数为空时判断

#### 05-15
- `0.5h` p10kb
  - APN问题咨询
- `3h` HH70EE 
    - Using an iphone 6 the user has to click login twice in the web ui - this is intermittent 复现视频分析，实际是点击到Log in按钮上的Remember Password文字上，而不是登陆按钮上。为了避免此误点击操作的发生，可以采取将Log in按钮往下挪一些这种方案。
    - Using an ipad the user has to initiate login twice in the web ui when the remember password box is enabled.  
- `4h` VSCode编辑器安装及使用研究

#### 05-11
- `7h` HH70EE 
  - new issues on v11
    - Unable to open messages in  SMS Inbox using Android Handset 游欢 （暂时拿了一台Android手机测试没有复现）
    - When the user opens the homepage using Microsoft Edge, 192.168.1.1, the page opens on the status page 金辉（初步估计是由于底层超时时间为10s，关闭浏览器后，10s内再次打开还是登陆状态。解决方案：配合Firmware修改heartbeat请求时间改为2S,需与Firmware联调测试）
    - International format is not recognised when entering a number when composing an SMS. Invalid error message 游欢
    - Using an iphone 6 the user has to click login twice in the web ui - this is intermittent 茂堂 （没有复现）
    - Using an ipad the user has to initiate login twice in the web ui when the remember password box is enabled.  茂堂
  - EE security
    - 由于安全问题，未登录时不调用GetWlanSettings接口，相关SSID WIFI 状态改为添加到接口GetSystemStatus获取
  - 添加缺少参数到模拟器，修改模拟器部分参数值不合理的地方。    
- `1h` MW41TM
  - MW41TM manually adding APN CTS问题确认

#### 05-10
- `6h` HH70EE 
  - EE security case研究
    - 1.登录接口和修改密码接口不能明文传输 金辉
    - 2.列出未登录时需要访问的接口列表 雪琴
      - Login
      - GetCurrentLanguage
      - GetLoginState
      - GetSimStatus
      - GetSystemStatus
      - GetWlanSettings
      - GetDeviceNewVersion
      - GetSMSStorageState(huan.you未登录时不要调用此接口)
      - GetSMSListByContactNum(huan.you未登录时不要调用此接口)
    - 3.将WiFi ssid和WiFi连接数放到GetSystemStatus中 雪琴
    - 4.添加token验证 金辉
  - 修改登陆后主菜单栏背景色闪现一下的bug
- `2h` 参加时间管理培训

#### 05-9
- `7h` HH70EE 
  - [4718336][[EE]在MAC上Connected devices少了最后一列，没有滚动条] 
    - 已在Val处测试找到原因，修改mac系统偏好设置-》通用-》滚动条显示方式为始终显示。
  - 统计HH70&HH70EE提示语为“Required”的Excel表给到翻译组
  - 测试有Require:true的输入框，发现需要修改代码的相关输入框：
   - 1.login password （maotang)
   - 2.CurrPassword,NewPassword,PhoneNumber(huan.you)
   - 3.validateFn.js function devicename需添加undefined判断。（金辉已修改）
- `1h` HH70 & HH40 
 - HH70&HH40上提的bug有质量问题的汇总
   - 4592620 Defect  【HH40V】【alpha】默认的加密方式与Ergo不一致，请确认 非问题，Ergo定义的UI并非定义默认值
   - 4639610 Defect  【HH40V】【alpha】添加2条同样WAN IP Address的IP Fiter，应该提示“This filter settings already exists. Please use a different one”实际提示IP  filter settings already exists 应该提示这种字眼除非有明确Ergo定义，实际实现与Ergo不相符，否则不应该出现
   - 4644654 Defect  【HH40V】【alpha】输入错误的PIN码或者PUK码时，只提示：unsuccessful而不是提示PIN码或者PUK码错误  ERGO没有明确定义，非问题
   - 4362545 Defect  【HH70】可以在同一台电脑的不同浏览器上同时使用 不是问题，同一台电脑可以同时使用不同浏览器访问。
   - 4641722 Defect  【HH40】短信未支持多发 已在bug上回复了Ergo未定义，bug仍然被refuse
   - 4675148 Defect  【HH40V】【alpha】发送短信给错误号码时，发送失败后WEB UI上提示：unsuccessful，而不是提示短信发送失败  已在bug上回复了Ergo未定义，bug仍然被refuse

#### 05-8
- `1h` HH70&HH40
  - Review HH70&HH40阿拉伯语从右到左样式实现代码，给出相关建议。
- `3.5h` 服务器开发
  - 地图SOS定位，web实现需求分析
    - 手表发送一条SOS短信到手机上，手机点击短信里面的网页链接地址之后调用浏览器打开地图网页并显示SOS位置
    - 服务器对应API地址：http://106.14.6.65/docs/cloud.html#h.hr89o9700bfa LBS定位
    - web端最终显示定位使用地图的未作要求
    - 短信地址需定义，参考APP地址："TCLMOVE://alcatel-move.com/latam/lbs/v1.0?i=123456789018140&t=1493703018&c=%5B460%2C01%2C-1%2C-1%2C-295%5D&w=%5B%2206%3A83%3Acd%3A26%3Adb%3A1d%22%2C-64%2CSCD-Guest%5D%2C%5B%22f4%3A83%3Acd%3A26%3Adb%3A1d%22%2C-62%2CSWD-Cloud-APP%5D%2C%5B%2200%3A02%3A03%3A04%3A05%3A06%22%2C-70%2CHH40_V_0506_2.4GHz%5D"格式
    - 短信中URL提供的是encodeURIComponent()函数编码的URL,javascript中需要使用decodeURIComponent(URLstring)对URL进行解码。如上URL示例解码后为"TCLMOVE://alcatel-move.com/latam/lbs/v1.0?i=123456789018140&t=1493703018&c=[460,01,-1,-1,-295]&w=["06:83:cd:26:db:1d",-64,SCD-Guest],["f4:83:cd:26:db:1d",-62,SWD-Cloud-APP],["00:02:03:04:05:06",-70,HH40_V_0506_2.4GHz]" 
    - 短信中URL还可以通过APP打开，因此需要与APP组进行协商定义好后发给李昌勤team（做手表的，短信内容是由手表发出）
    - LBS定位这个API的请求参数有十几个参数,最终定义好的短信URL需要包含所有这些参数。
    - web端通过URL解析拿到所有参数的数据之后按api LBS定位定义的请求参数组好所需要的数据然后提交给服务器获取定位信息
    - 从服务器获取到定位信息后在web端通过调用对应地图API实现定位信息展示。
    - 百度地图参考http://lbsyun.baidu.com/jsdemo.htm#i8_4  
    - 高德地图参考http://lbs.amap.com/api/javascript-api/example/location/browser-location 
    - 谷歌地图参考http://www.runoob.com/try/try.php?filename=tryhtml_map_overlays_marker
- `3.5h` HH70EE
 - EE遗留问题
  - SMS Forwarding - the entry box should not allow end user to enter letters, should only allow numbers.i.e. 07961229635 is OK.  071691ABCDE2 is NOK. if end user trys to enter 0712ABCEDG12, the SW should not allow the saving of it.  Instead, it should provide a pop-up notification "Number is invalid, please check and try again." -----huan.you
  - SW10: log in时标题栏闪一下
  - 提示语需要优化Change SIM PIN-Confirm SIM PIN:"Please enter confirm SIM PIN"
  - 关于输入框为空时提示语“Required”问题确认

#### 05-5
- `8h` HH70EE
 - EE5.5回复新修改点Review and assign and modify
  - Check how much data you have left or buy a data add-on.
  - SW10: log in时标题栏闪一下
  - 提示语需要优化Change SIM PIN-Confirm SIM PIN:"Please enter confirm SIM PIN"
  - Parental Control在Status-Enable/disable切换的时候，所有滑动按钮会同步滑动，需要优化。


#### 05-4
- `8h` HH70EE
  - EE5.4回复新修改点Review and assign and modify and test
    - New requirement confirm and modify
      - Settings-WiFi-WPS
      - Settings-WiFi-WPS
      - Device-Update-Online
      - Device-Update-Local update

#### 05-3
- `8h` HH70EE
  - EE5.2&5.3回复新修改点Review and assign and modify and test
   - 4705104 [EE]SMS Forwarding数字+字符或者字母都可以添加  Huan.you
   - 4705093 [EE]simlock缺少输入次数提示语  Jinhui
   - 4705091 [EE]simlock缺少长度提示语  Jinhui
   - 4705090 [EE]关闭PIN码后，再开启PIN码，页面布局问题  Jimin
   - 1.EE 登陆时菜单栏会闪现一下
   - 2.添加EE定制 SIM PIN Enable按钮跳转到解PIN页面，解PIN成功后自动跳至” Status”界面。
   - 3.Samba note in the UM is currently 192.168.x.1 (192.168.x.1替换为实际网关地址)
   - 4.添加获取当前页路由到vuex.currentRouter以便在各种需要判断路由的情况下使用。
   - 由于超时退出还有问题，添加IsSupportTimeOutLogout配置项，EE和Generic暂时都改为不支持。
   - 修改EE首页Enter SIM PIN登陆后跳转路由时没有传递路由的params的bug

#### 05-2
- `8h` HH70EE
  - EE5.2回复新修改点Review and assign and modify
    - 1. 续上修改完成admin默认密码成功后，页面停留在”Log in password”界面，此时应该自动跳至” Status”界面。（包括SIM PIN Enable开机，解PIN后也应该应该自动跳至” Status”界面。）
    - 2.  IP address规则错误；输入192.169.1.1，却提示You've already saved this as your home IP address. Please enter a different address. IP address规则识别依然有误，请优化。
    - SW10:点击“Settings”出现的目录为“Setup”，应为第一目录“Quick setup”。
    - SW10:“User Guide”的位置应该为之前“Log out”的位置，“Home”等目录整体往后移动向“User Guide”对齐
    - 4.  首次登录WebUI提示修改admin默认密码，”Device”目录标题未点亮。
    - 5.  点击”Services-Share”下子目录USB mass storage/DLNA，提示输入密码。点击X不输入密码，页面自动跳至” Status”，但标题依然为” Services”。
    - 6.  续上修改完成admin默认密码成功后，页面停留在”Log in password”界面，此时应该自动跳至” Status”界面。（包括SIM PIN Enable开机，解PIN后也应该应该自动跳至” Status”界面。）
    - 7.  主界面点击”CHANGE YOUR 3GEE WIFI DEVICE SSID AND PASSWORD. LOG IN>”进入”Settings-WiFi-Basic”界面，”Settings” 目录标题未点亮。
    - 8.  主界面点击SMS-” Click here >"进入SMS界面，”Services” 目录标题未点亮。
    - 9.  主界面点击SMS Forwarding-” Click here >"进入SMS Forwarding界面，”Services” 目录标题未点亮。

### 2017-04

#### 04-28
- `8h` HH70EE
  - EE4.28回复新修改点Review and assign and modify
    - 1.  ” Setup Wizard”修改为“Quick setup”，并将“Quick setup”移动至”Settings”目录下第一栏（”Dial-Up”上面）。----xueqin
    - 2.  We need to send an SMS to the user when they reach 90% of the SMS limit (i.e. 90/100) warning them that they are close to their limit, and to please delete some SMS.  Otherwise, EE will not be able to send an SMS to the user notifying them that they have almost used up their data allowance. @FW&UI----huan
    - 3.  On Web-UI Home页面4GEE Router字体不对、且位置需居中与EE图标。----xueqin
      Log in之后EE最新的需求如图：”Log out”修改为“Home”并移动到”Status”前面，意味着点击”Home”即Log out返回Log in Home界面。已跟Joe再三确认EE是这么提的需求。 
    - 4.  Landing page - 4GEE Router in the title bar is the wrong font. @UI----xueqin
      once logged in to Web-UI, add 4GEE Router next to EE logo----xueqin
    - 5.  EE最新的需求“Dial-Up”修改为”Setup” ----xueqin
    - 6.  Network selection-Network search mode为Auto隐藏搜网列表，Manual显示搜网列表。----jundai
    - 7.  IP address规则错误；输入192.169.1.1，却提示You've already saved this as your home IP address. Please enter a different address. ----jimin
    - 8.  UM中的No SIM card修改为No SIM，同步修改HOME界面和Status- Internet- SIM card status:No SIM card以及WebUI所有SIM card都修改为SIM；----xueqin
    - 9.  删除Sent box的reply；----huan
    - 10. SMS Settings-“SMS delivery report” change to “SMS delivery reports”； ----huan
    - 11. Connected devices当没有设备被Block时，隐藏Block list。----xueqin
    - 12. Advance settings应修改为Advanced settings；----xueqin
    - 13. 修改WebUI所有“WiFi password”为”WiFi key”，同步修改包括UM；----xueqin

#### 04-27
- `7h` HH70EE
  - Review and assign and modify EE new feedback
    - LAN流量数据表格在手机上仍有换行(还未复现）
    - 1.  Parental Control 在Status-Enable/disable切换的时候，所有滑动按钮会同步滑动，需要优化。-----jimin
    - 6.  在拨号连接状态下可以切换网络模式并进行手动搜网，拨号连接断开。如用户不手动注册网络切换到其他界面，Router一直为no service状态。目前网络设置界面存在隐患，建议修改为在拨号连接状态下，网络模式和搜网模式灰化不可操作或提醒用户先断开拨号连接。Connect IP mode在拨号连接状态下也同样存在该隐患，建议同步修改。  -----jundai.hu
    - 10. SMS-forwarding Remove default number 07XXXXXXX12.It should be empty.  -----huan.you
    - 11. SMS Forwarding - the entry box should not allow end user to enter letters, should only allow numbers.i.e. 07961229635 is OK.  071691ABCDE2 is NOK. if end user trys to enter 0712ABCEDG12, the SW should not allow the saving of it.  Instead, it should provide a pop-up notification "Number is invalid, please check and try again." -----huan.you
    - 16. Setup Wizard - this needs to change to another screen, should move to the top of the 'Settings' tab.----xueqin SPM还在确认，暂不修改
    - 19. On Web-UI
      change 'Log out' to 'Home'
      change '4GEE Router' to 'Status'
      Change 'System' to 'Device' ----xueqin SPM还在确认，暂不修改
    - 21. IP filter on SW - can click apply without adding anything to the blacklist/whitelist and says 'successful'.  Should be a prompt to user to add a valid IP to whitelist/blacklist.-----jimin
    - 23. Landing page - 4GEE Router in the title bar is the wrong font. once logged in to Web-UI, add 4GEE Router next to EE logo ----xueqin 
    - LAN流量数据表格在手机上仍有换行----xueqin 
- `1h` Team工作
  - 软件月度会议
  
#### 04-26
- `6h` HH70&HH40 
  - HH40 review及分析,Ergo确认: HH40 Alpha test_Ergo and WEBUI_Not matching queries
  - HH40&70 样式bug修改
- `2h` HH70EE
  - bug review 修改
    - Log in密码修改下的提示语更新
    - LAN流量数据表格在手机上仍有换行(还未复现）
    - 删掉可选项(optional)显示  

#### 04-25
- `5.5h` HH70 E1_EE
  - EE新需求修改及bug编译验证
   - 1.添加指令文件用于后续添加指令
   - 2.添加指令formLabelIcon用于在form表单控件el-form-item的label标签下添加图标。
   - 3.在EE项目上NetworkMode与ConnectMode后添加help图标，点击help图标出现对应提示语。此项已作为可配置项
   - Configure WAN下secondary DNS server如果是optional，*应该去掉
   - WIFI流量和LAN流量数据表格里还有换行
   - Connected device列表在手机上仍有换行
- `3h` HH70&HH40 
  - bug 4637594验证
  - HH40上放开 Device access页面并将storage相关项作为可配置项在HH40版本上隐藏
  - bug分析assign

#### 04-24
- `5h` HH70 E1_EE
  - EE新需求
- `3h` HH70&HH40 
  - bug 4637594 【HH40V】【alpha】mac filter的白名单功能开启后，开启WPS功能时仍提示：successful，而不是提醒用户有白名单功能限制
  - wps状态下WIFI设置没有对应的提示。

#### 04-21
- `0.5h` 工作总结记录
- `6h` Team工作
  - review Team成员的工作记录
  - 对Team成员进行2017Q1绩效面谈
  - CPE项目image方案Review与研究
  - 组内共享个人本地demo方案调研
- `0.5h` HH70 E1_EE
  - 新需求Review
- `1h` HH70&HH40 
  - bugReview

#### 04-20
- `0.5h` 工作总结记录
- `6h` Team工作
  - review Team成员的工作记录
  - 对Team成员进行2017Q1绩效面谈(还未完成)
  - CPE项目image方案Review，文档编写(还未完成)
- `0.5h` HH70 E1_EE
  - bug状态Review
- `1h` HH70&HH40 
  - 版本orangepoland_FL

#### 04-19
- `0.5h` 工作总结记录
- `6h` Team工作
  - review Team成员的工作记录，添加对应的Review建议到文档
  - 添加gulp-tool目录用于所有使用gulp批处理的工具，添加对应文档到docs
  - 添加处理HH70 SVG图片的gulp task到gulp-tool
  - 任务分配
    - 整理HH40字符串文档发给SPM（jundai.hu）
    - 整理负责的在线UM（MB12)流程文档用于请假期间备份（jundai.hu）
- `1h` HH70 E1_EE
  - Change required on Web-UI,提供对应修改后截图给UM Team，下次发版需要更新UM。
- `0.5` HH70&HH40 
  - 验证HH40 bug 4592653、4595086、4598152


#### 04-18
- `0.5h` 工作总结记录
- `4.5h` Team工作
  - 探讨Team成员如何提高自己，后续总结一个前端学习的培训 
  - 整理转载网络上比较全的前端资源到组内站点
  - HH70重要问题汇总文档添加如下内容
    - 怎样将UI代码放到设备中
    - HH70 升级指导
- `1h` HH70 E1_EE
  - bug review和分配
    - System settings   
    - Parental Control
  - review 4.14号代码
- `2h` HH70&HH40 bug 
  - review和分配
  - bug fix
    - 4592653 【HH40V】【alpha】插上漫游卡搜到网络后，不会显示有漫游图标 
    - 4595086【HH40V】【alpha】开启WPS功能时，WEB UI 上没有WPS状态显示，无法查看是否处于WPS状态，也不知道是否连接上
    - 4598152【HH40V】【alpha】短信满时，满短信图标显示为短信图标上一条红色竖线，而不是叹号与ERGO不一致 


#### 04-17
- `0.5h` 工作总结记录
- `3.5h` Team工作
  - HH70项目各模块负责人文档编写 
- `2h` HH70 E1_EE
  - bug
    - 4598152   
  - review 4.14号代码
- `1h` HH70 bug 
  - review和分配
   - 4596392
- `1h` 其他
  - 解决ALM系统不能使用的问题

#### 04-13
- `4h` Team工作
  - 梳理HH70/HH40项目工作，细化项目负责人，各模块负责人、各模块代码主要review人
  - 添加文档HH70 项目重要问题汇总
  - Team成员项目支持
    - Y900NB Turkcell Turkey
    - MW40V_Djezzy_D7Z3 SW
    - Plus10 Web UI
- `4h` HH70 E1_EE
  - bug fix
    - usb状态为USB insert时改为显示USB Name
  - bug review & 分配
    - In the Share  settings there is no option to close / cancel the login window, the X is missing 
  - In the Share  settings the additional administrator login control fails. If the user just clicks login with NO password, the action is executed. 

#### 备注
  - `本地模拟器` 
  - `E:\WEBUI_SRC\UI_WEB supervisor` index.js http://127.0.0.1:9096/
  - `本地docs服务器`
  - `E:\smart_relese\SmartSwUiTools supervisor` index.js http://127.0.0.1:8003/docs