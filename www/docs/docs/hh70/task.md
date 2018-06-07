# HH70项目各模块负责人

## 文档信息

### 说明
!> 此文档主要是HH70上相关模块责任划分

### 创建人信息
- 创建人: `xueqin.jin@tcl.com`

### 参考文档
- `\\datasz.hq.ta-mp.com\SCD-SMARTHINGS\SWD\WebUI\01.Projects\HH70\HH70 WebUi进度-任务分配表.xlsx`
- `\\datasz.hq.ta-mp.com\SCD-SMARTHINGS\SWD\WebUI\01.Projects\LINKHUB Web Ergo V1.1.pdf`

### 评审Review记录


## 功能模块划分表
- `SPM：参考下面模块Onwer负责人分配bug`
- `Firmware：API有任何问题请与模块Onwer负责人沟通`

| Main Menu          | Sub Menu       | Blocks             | owner  | 主review人 |
| ------------------ | -------------- | -------------------| ------ | ---------- |
| Home               | Login          | login              | 羊茂堂 | 陆金辉     |
|                    |                | login first        | 羊茂堂 | 陆金辉     |
|                    |                | Status Bar         | 羊茂堂 | ---------- |
| index              |                | index              | 羊茂堂 | ---------- |
|                    | Status         | Internet           | 羊茂堂 | 陆金辉     |
|                    |                | LAN                | 羊茂堂 | 陆金辉     |
|                    |                | WLAN               | 羊茂堂 | 陆金辉     |
|                    | Setup Wizard   | Setup Wizard       | 羊茂堂 | ---------- |
| Services           | Statistics     | Internet           | 胡均带 | 陆金辉     |
|                    |                | LAN                | 胡均带 | 陆金辉     |
|                    |                | WLAN               | 胡均带 | 陆金辉     |
|                    | SMS            | Inbox              | 游欢   | 金雪琴     |
|                    |                | Outbox             | 游欢   | 金雪琴     |
|                    |                | Drafts             | 游欢   | 金雪琴     |
|                    |                | New Message        | 游欢   | 金雪琴     |
|                    |                | SMS Settings       | 游欢   | 金雪琴     |
|                    |                | SMS Forwarding     | 游欢   | 金雪琴     |
|                    |                | SMS Report         | 游欢   | 金雪琴     |
|                    | Call Logs      | Incoming Call      | 游欢   | 金雪琴     |
|                    |                | Outgoing Call      | 游欢   | 金雪琴     |
|                    |                | Missed Call        | 游欢   | 金雪琴     |
|                    | Share          | USB                | 钟继敏 | ---------- |
|                    |                | Storage Share      | 钟继敏 | ---------- |
|                    |                | DLNA               | 钟继敏 | ---------- |
|                    |                | User Settings      | 钟继敏 | ---------- |
| Basic Settings     | Dial-Up        | Mobile Connection  | 胡均带 | 金雪琴     |
|                    |                | Profile Management | 胡均带 | 陆金辉     |
|                    |                | Network Settings   | 胡均带 | 陆金辉     |
|                    |                | Monthly Plan       | 胡均带 | 陆金辉     |
|                    | WAN            | WAN Status         | 游欢   | ---------- |
|                    |                | WAN Configure      | 游欢   | ---------- |
|                    |                | MAC Clone          | 游欢   | ---------- |
|                    | WLAN           | Basic Settings     | 钟继敏 | ---------- |
|                    |                | Advanced Settings  | 钟继敏 | ---------- |
|                    |                | WPS Settings       | 钟继敏 | ---------- |
|                    | LAN            | LAN Settings       | 羊茂堂 | ---------- |
|                    | Security       | PIN Management     | 钟继敏 | 陆金辉     |
|                    |                | Routing Rules      | 钟继敏 | 陆金辉     |
|                    |                | WAN ping           | 钟继敏 | 陆金辉     |
|                    |                | IP filter          | 钟继敏 | 陆金辉     |
|                    |                | MAC filter         | 钟继敏 | 陆金辉     |
|                    |                | URL filter         | 钟继敏 | 陆金辉     |
|                    |                | Parental Control   | 钟继敏 | 陆金辉     |
| Advanced Settings  | NAT Settings   | DMZ Settings       | 羊茂堂 | 金雪琴     |
|                    |                | ALG Settings       | 羊茂堂 | 金雪琴     |
|                    |                | UPnP Settings      | 羊茂堂 | 金雪琴     |
|                    |                | Virtual Server     | 羊茂堂 | 陆金辉     |
|                    | QoS            | QoS                | 胡均带 | 金雪琴     |
| System             | Device Info    | Device Information | 胡均带 | 金雪琴     |
|                    | Reboot&Reset   | Reboot             | 胡均带 | 金雪琴     |
|                    |                | Factory Reset      | 胡均带 | 金雪琴     |
|                    | Upgrade        | Local Upgrade      | 羊茂堂 | 陆金辉     |
|                    |                | Online Upgrade     | 钟继敏 | 陆金辉     |
|                    |                | TR069              | 钟继敏 | 陆金辉     |
|                    | Device Mgmt    | Password Change    | 游欢   | 金雪琴     |
|                    |                | System Settings    | 游欢   | 金雪琴     |
|                    |                | Backup&Restore     | 羊茂堂 | 陆金辉     |
| 框架设计           |                |                    | 陆金辉 | ---------- |

## 其他相关责任划分

#### API 文档
  - 初版API文档由xueqin.jin完成
  - 后续修改为各模块负责人

#### 字符串
  - 英文字符串由模块负责人添加到HH70_String.xlsx
  - 需要统计相关语言缺省翻译时由项目总负责人根据组内成员手头任务来临时分配

#### 图片资源
  - 待HH70项目图片资源使用方案文档完成后，再补充
