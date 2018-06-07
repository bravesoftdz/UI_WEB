# MT30 SOS网页版文档及知识分享

## 文档信息

### 说明

### 创建人信息
- 创建人: `jinhui.lu@tcl.com`
- 创建时间：`2017 05-22`

### 参考文档

### 评审Review记录

## 知识分享

### 环境准备
- chrome浏览器插件安装`谷歌访问助手`，用于登录谷歌相关网站


### 基本流程

- 手表发送SOS短信到手机，SOS网址链接进行了URL编码
- 用户点击手机短信中的SOS网址链接，调用浏览器打开SOS网页
- SOS网页解码URL，拼接数据，将数据发送到服务器端请求相关位置信息
- SOS网页根据服务器返回的数据显示地图信息（定位点，地址，时间）
- SOS网页添加链接调用手机地图APP实现导航，显示当前位置到SOS位置的线路

### google maps APIkey相关

#### 申请
- https://console.developers.google.com/apis/dashboard

#### 配额限制
- 申请的API key每天的免费调用测试为25000，超出次数无法访问
- 为避免API key被他人使用，需在google maps控制台中设置允许调用的域名，控制台地址:https://console.developers.google.com/apis/dashboard


### 地图显示相关

#### map API 文档地址
- https://developers.google.cn/maps/documentation/javascript/

#### URL编解码
> url地址中包含特殊字符，请求时URL地址进行了url编码，页面需要进行解码之后才能解析参数，具体参考:http://tool.chinaz.com/tools/urlencode.aspx


#### 网页端调用APP实现路线导航
> 参考网址：https://developers.google.cn/maps/documentation/urls/guide

- IOS链接格式：`comgooglemaps://?saddr=&daddr=23.571324598525,113.92760904948&zoom=10`
  - saddr为导航起点，若为空，则为当前位置
  - daddr为导航终点
- 安卓链接格式：...

- 跨平台方案，即一个地址根据不同的设备情况，选择优先调用方式，优先调用手机平台的谷歌地图APP实现导航，如果对应手机上没有APP，则直接调用网页显示
  - 参考URL:`https://www.google.com/maps/dir/?api=1&destination=23.571324598525,113.92760904948` origin为空则起点为当前位置
  - 其他参数参考: https://developers.google.cn/maps/documentation/urls/guide#directions-action


### 服务器上线部署

#### 服务器访问地址
- git管理地址:`http://120.25.95.35/`
  - 仓库地址：`git@120.25.95.35:webui/sos.git`
- 服务器部署地址：`52.29.124.29`
  - 对应代码目录: `/data/www/tctservice/sos`
- 入口地址`https://www.tcl-move.com/tctservice/sos/index.html`
  - 入口地址中使用参数p指定处理的处理的页面，更新参数p跳转页面，方便后续其他页面扩展






