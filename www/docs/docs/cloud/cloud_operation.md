# Cloud Operation Service WEB UI

## 文档信息

### 说明

### 创建人信息
- 创建人: `jinhui.lu@tcl.com`

### 参考文档
- http://139.196.178.104/docs/operation.html

### 评审Review记录

## WEB UI相关

### 开发历史记录

- `2017-04-10` jinhui.lu 完成以下功能
  - 基础框架搭建，样式布局，交互设计
  - 登录，退出登录功能
  - 设备绑定信息查询
  - 设备解绑
  - 用户权限管理
  - 查看用户列表、添加、删除用户
  - 查看Fota列表，上传、下载、删除、发布功能
  - 设备白名单列表显示、添加设备白名单、删除白名单
  - 修改密码
  - 代码部署

### 开发调试部署

####  WEB UI源码仓库

`svn://10.128.161.92/datacard/QCT_MDM9x30/branches/WEBUI_SRC/Cloud`

#### 开发环境搭建

1. clone源码，命令行进入源码目录，输入命令`cnpm i`
2. 编译命令`npm run build`，生成的`www`目录文件即为最终发布的文件
3. 输入调试命令`npm run dev`,此时浏览器会自动打开UI页面，修改`src`目录下文件会实时刷新UI

####  编译后代码地址

`https://tcl-lujinhui@github.com/tcl-lujinhui/cloudOperation.git`  
`注`:后续迁移到`http://120.25.95.35/`上；方便部署到服务器

####  WEB UI发布流程
1. `npm run build`编译后将`www`目录下代码提交到:`https://tcl-lujinhui@github.com/tcl-lujinhui/cloudOperation.git`
2. ssh登录`52.29.124.29`
3. 更新代码命令`cd /data/www/cloudui &&git pull`之后访问[http://www.alcatel-move.com/cloudui/](http://www.alcatel-move.com/cloudui/)即可看到更新后的内容

#### 在线访问地址

[http://www.alcatel-move.com/cloudui/](http://www.alcatel-move.com/cloudui/)


### WEB UI框架设计相关
`待编写....`

### 开发规范

`待编写....`

### 交互设计

`待编写....`

## Service API

### 更新历史
- `2017-04-10` jinhui.lu 创建文档

### 相关信息
#### 维护说明
> 基于[服务器API接口文档](http://139.196.178.104/docs/operation.html)编写，添加一些详细信息，方便后续WEB UI同事开发维护

`注: 服务器文档更新时请UI同事及时同步`

#### 服务器API维护同事

- **叶世刚**:`shigang.ye@tcl.com`

- **陈达**:`dachen@tcl.com`

#### 服务器地址

- 测试服务器地址:`http://139.196.178.104/`
> 用于开发调试

- 正式服务器地址:`http://www.alcatel-move.com/`
> 调试验证ok之后部署到正式服务器上

### UID
> 用户注册后获取到的用户唯一ID，或设备的唯一标识(IMEI, MAC, SN等)，用于生成用户token。

`PID`:`65534`

### Access Token
> 用于标识用户的加密信息，Web用户可以通过登录后获取到此token(返回结果中的access_token字段)，有效期30天。  
> Access token通过HTTP的 Authorization header字段发送给服务器，与其他值用分号(;)分割:  
> Authorization: key=YOUR_API_KEY; token=YOUR_ACCESS_TOKEN

`API KEY`:`BJ_T1Ovh-lgBsT7xCGJ5VkikDU8qKOA7wCit5Fktou4Gxx7il3g`


### Error Code

#### 错误格式

**示例:**
```
{
  "error_id": 0,
  "error_field":"",
  "error_msg": "ok"
}
```

**错误参数说明：**

| Name        | Type           | Info  |
| ----------- |:-------------:| -----:|
| error_id    | int | 错误号 |
| error_field | string | 错误字段 |
| error_msg   | string | 错误信息 |

#### 错误码

| Error code        | Info |
| ----------- |-------------:|
| 0 | Success: 成功，没有错误 |
| 1 | Unsupported: 不支持的功能 |
| 2 | Required: 参数缺失|
| 3 | Type Error: 参数类型不匹配 |
| 4 | Parameter Error: 请求参数错误 |
| 5 | Invalid: 非法或已失效 |
| 6 | Not Found: 未找到 |
| 7 | Exist: 已存在 |
| 8 | Database Error: 数据库错误 |
| 9 | Internal Error: 服务器内部错误 |
| 10 | Unauthorized: 未授权操作 |
| 11 | Forbidden: 操作被禁止 |
| 12 | Locked: 被锁定 |
| ... | ... |



### Account Management

#### 帐号登录

**请求URI:**  `/ops/v1.0/stuff/login`

**HTTP方法:**  `POST`

**Request:**

```
POST /v1.0/account/login HTTP/1.1
Authorization: key=YOUR_API_KEY
Content­-Type: application/json
{
  "email": "jinhui.lu@tcl.com",
  "password": "11111111"
}
```
**Request Params:**

- `email`
  - Required: true
  - Type: string
  - Info: 用户邮箱
- `password`
  - Required: true
  - Type: string
  - Info: 用户密码

**Response:**

```
HTTP/1.1 200 OK
Content­-Type: application/json
{
  "uid": "123456", 
  "access_token":"kdw345aw1dscvsdafsdgsdagg412asgsdg1dasgdsg", 
  "role": 256
}
```

**Response Params:**

- `uid`
  - Type: string
  - Info: 用户ID，用户身份的唯一标识
- `access_token`
  - Type: string
  - Info: 登录后获取的授权信息
- `role`
  - Type: int
  - Info: 当前登录用户的角色 
  - Vule:
    - `256`: 超级管理员
    - `16777472`: Val 管理员
    - `16777216`: Val 员工
    - `33554688`: CC 管理员
    - `33554432`: CC 员工
    - `50331904`: PM 管理员
    - `50331648`: PM 员工

************************************************
#### 帐号注销

**请求URI:**  `/ops/v1.0/stuff/logout`

**HTTP方法:**  `POST`

**Request:**

```
POST /ops/v1.0/stuff/logout HTTP/1.1
Authorization: key=YOUR_API_KEY; token=YOUR_ACCESS_TOKEN
```
**Request Params:**
`null`

**Response:**

```
HTTP/1.1 200 OK
Content­-Type: application/json
{
  "error_id": 0, 
  "error_msg":"ok"
}
```

************************************************
#### 系统初始化时添加管理员账户

**请求URI:**  `/ops/v1.0/stuff/adminaccount`

**HTTP方法:**  `POST`

**Request:**

```
POST /ops/v1.0/stuff/adminaccount HTTP/1.1
Authorization: key=YOUR_API_KEY
Content­-Type: application/json
{
  "email":"1234@tcl.com",
  "password": "123456",
  "role": 256
}
```
**Request Params:**

- `email`
  - Required: true
  - Type: string
  - Info: 管理员邮箱
- `password`
  - Required: true
  - Type: string
  - Info: 管理员密码
- `role`
  - Required: true
  - Type: int
  - Info: 管理员密码

**Response:**

```
HTTP/1.1 200 OK
Content­-Type: application/json
{
  "success": true 
}
```

**Response Params:**

- `success`
  - Type: bool
  - Info: 成功添加管理员的标识

************************************************
#### 管理员添加账户
> 目前超级管理员仅可以添加CC管理和VAl管理员

**请求URI:**  `/ops/v1.0/stuff/account`

**HTTP方法:**  `POST`

**Request:**

```
POST /v1.0/account/login HTTP/1.1
Authorization: key=YOUR_API_KEY
Content­-Type: application/json
{
  "email": "jinhui156.lu@tcl.com",
  "role": 16777472
}
```
**Request Params:**

- `email`
  - Required: true
  - Type: string
  - Info: 用户邮箱
- `role`
  - Required: true
  - Type: int
  - Info: 角色

**Response:**

```
HTTP/1.1 200 OK
Content­-Type: application/json
{
  "success": true, 
  "email_success": true
}
```

**Response Params:**

- `success`
  - Type: bool
  - Info: 管理员添加账户时，成功的标识
- `email_success`
  - Type: bool
  - Info: 在添加账户时系统会自动生成登录密码，并发送邮件给被添加用户，emailSuccess是邮件发送成功的标识

************************************************
#### 获取所有用户信息

**请求URI:**  `/ops/v1.0/stuff`

**HTTP方法:**  `GET`

**Request:**

```
GET /ops/v1.0/stuff  HTTP/1.1
Authorization: key=YOUR_API_KEY; token=YOUR_ACCESS_TOKEN
```

**Response:**

```
HTTP/1.1 200 OK
Content­-Type: application/json
[{
  "stuff_id": "15621305322711633302", 
  "email": "jinhui.lu@tcl.com",
  "role": 256,
  "uid":"15620975404799700657",
  "create_time":"2017-03-16T15:50:42.17+08:00",
  "last_login":"1489563656"
}]
```

**Response Params:**
> 列表为空时，返回`[]`

- `stuff_id`
  - Type: string
  - Info: 员工的ID
- `email`
  - Type: string
  - Info: 员工的邮箱
- `role`
  - Type: int
  - Info: 员工的角色
- `uid`
  - Type: string
  - Info: 当前登录用户的ID
- `create_time`
  - Type: time
  - Info: 员工账号被创建时间
- `last_login`
  - Type: int64
  - Info: 员工上次登录时间


************************************************
#### 管理员删除已添加账户

**请求URI:**  `/ops/v1.0/stuff/account`

**HTTP方法:**  `DELETE`

**Request:**

```
DELETE /ops/v1.0/stuff/account HTTP/1.1
Authorization: key=YOUR_API_KEY; token=YOUR_ACCESS_TOKEN
{
  "id": "15621372826716819727"
}
```
**Request Params:**

- `id`
  - Required: true
  - Type: string
  - Info: 被删除账户的ID,此ID为列表中的参数`stuff_id`

**Response:**

```
HTTP/1.1 200 OK
Content­-Type: application/json
{
  "success": true
}
```

**Response Params:**

- `success`
  - Type: bool
  - Info: 是否删除成功的标识 

************************************************
#### 修改登陆密码

**请求URI:**  `/ops/v1.0/stuff/update`

**HTTP方法:**  `PUT`

**Request:**

```
PUT/ops/v1.0/stuff/update HTTP/1.1
Authorization: key=YOUR_API_KEY; token=YOUR_ACCESS_TOKEN
{
  "oldpassword": "12345678",
  "newpassword": "12345678"
}
```
**Request Params:**

- `oldpassword`
  - Required: true
  - Type: string
  - Info: 账户设置的旧密码
- `newpassword`
  - Required: true
  - Type: string
  - Info: 新密码

**Response:**

```
HTTP/1.1 200 OK
Content­-Type: application/json
{
  "success": true
}
```

**Response Params:**

- `success`
  - Type: bool
  - Info: 是否修改成功的标识


### Device Management

#### 查询设备绑定状态
**请求URI:**  `/ops/v1.0/device/<device_id>`

**HTTP方法:**  `GET`

**Request:**

```
GET /ops/v1.0/device/<device_id> HTTP/1.1
Authorization: key=YOUR_API_KEY; token=YOUR_ACCESS_TOKEN
```

**Response:**

```
HTTP/1.1 200 OK
Content­-Type: application/json

{
  "deviceId": "014748000000156",
  "contact": [
    {
      "uid": "15534565507535480961",
      "username": "tcl123456",
      "phone": "+86999999999",
      "relationship": "5",
      "profile": ""
    },
    {
      "uid": "15569042223625822292",
      "username": "luoyuhang",
      "phone": "+8613668852705",
      "relationship": "1",
      "profile": ""
    }
  ],
  "lastTime": "2016-11-14T16:34:00.337+08:00",
  "isOnline": false
}
```

**Response Params:**

- `deviceId`
  - Type: string
  - Info: 设备的ID
- `contact`
  - Type: Array
  - Info: 绑定的联系人列表信息;如绑定信息为空，则返回null，此时UI上的unbind按钮不显示
- `lastTime`
  - Type: time
  - Info: 设备上次登录时间
- `isOnline`
  - Type: bool
  - Info: 设备是否在线
************************************************

#### 解绑设备
**请求URI:**  `/ops/v1.0/device/<device_id>`

**HTTP方法:**  `DELETE`

**Request:**

```
DELETE /ops/v1.0/device/<device_id> HTTP/1.1
Authorization: key=YOUR_API_KEY; token=YOUR_ACCESS_TOKEN
```

**Response:**

```
HTTP/1.1 200 OK
Content­-Type: application/json
{
  "error_id": 0,
  "error_msg":"ok"
}
```
************************************************

### Activation Statistics

#### 查询设备激活量
> 包括按pid统计激活量、按按月统计激活量

**请求URI:**  `/ops/v1.0/sales`

**HTTP方法:**  `GET`

**Request:**

```
GET /ops/v1.0/sales?year=2017&month=3 HTTP/1.1
Authorization: key=YOUR_API_KEY; token=YOUR_ACCESS_TOKEN
```
**Request Params:**

- `year`
  - Required: false
  - Type: int
  - Info: 统计时间的年
- `month`
  - Required: false
  - Type: int
  - Info: 统计时间的月

**Response:**

```
HTTP/1.1 200 OK
Content­-Type: application/json
{
  "gpscount": 1000,
  "kidcount": 200
}
```

************************************************

### FOTA Management
#### 获取升级包列表
**请求URI:**  `ops/v1.0/firmware/info`

**HTTP方法:**  `GET`

**Request:**

```
GET /ops/v1.0/firmware/info?hw_version=11&sw_version=222 HTTP/1.1
Authorization: key=YOUR_API_KEY; token=YOUR_ACCESS_TOKEN
```

**Request Params:**
> 参数不传时，返回所有列表

- `hw_version`
  - Required: false
  - Type: int
  - Info: 硬件版本号
- `sw_version`
  - Required: false
  - Type: int
  - Info: 软件版本号

**Response:**

```
HTTP/1.1 200 OK
Content­-Type: application/json
[
  {
    "hw_version": 100729937,
    "sw_version": 9,
    "info": "100729937.9.20160726",
    "public": false,
    "size": 3256204,
    "pub_time": "2016-07-26 09:02:54 +0000 UTC"
  },
]
```

**Response Params:**
> 列表为空时，返回`[]`

- `hw_version`
  - Type: int
  - Info: 硬件版本号
- `sw_version`
  - Type: int
  - Info: 软件版本号
- `info`
  - Type: string
  - Info: 介绍
- `public`
  - Type: bool
  - Info: 是否公开
- `size`
  - Type: int
  - Info: 文件大小
- `pub_time`
  - Type: string
  - Info: 上传时间
************************************************

#### 上传升级包
**请求URI:**  `ops/v1.0/firmware/pub`

**HTTP方法:**  `POST`

**Request:**

```
POST /ops/v1.0/firmware/pub  HTTP/1.1
Authorization: key=YOUR_API_KEY; token=YOUR_ACCESS_TOKEN

------WebKitFormBoundary6cTfSAg8OcsuSCm8
Content-Disposition: form-data; name="info"

12334324
------WebKitFormBoundary6cTfSAg8OcsuSCm8
Content-Disposition: form-data; name="hw_version"

889992
------WebKitFormBoundary6cTfSAg8OcsuSCm8
Content-Disposition: form-data; name="sw_version"

582
------WebKitFormBoundary6cTfSAg8OcsuSCm8
Content-Disposition: form-data; name="filedata"; filename="OtaFile_HW889992_SW582_2013824_Encrypt.bin"
Content-Type: application/octet-stream
------WebKitFormBoundary6cTfSAg8OcsuSCm8--
```

**Request Params:**

- `hw_version`
  - Required: true
  - Type: int
  - Info: 硬件版本号
- `sw_version`
  - Required: true
  - Type: int
  - Info: 软件版本号
- `info`
  - Required: true
  - Type: string
  - Info: 介绍

**Response:**

```
HTTP/1.1 200 OK
Content­-Type: application/json
{
  "size": 1024
}
```

**Response Params:**

- `size`
  - Type: init
  - Info: 上传文件的大小
************************************************

#### 发布升级包
**请求URI:**  `/ops/v1.0/firmware/public`

**HTTP方法:**  `PUT`

**Request:**

```
/ops/v1.0/firmware/public HTTP/1.1
Authorization: key=YOUR_API_KEY; token=YOUR_ACCESS_TOKEN
{
  "hw_version": 100729937,
  "sw_version": 9,
  "public": true
}
```
**Request Params:**

- `hw_version`
  - Required: true
  - Type: int
  - Info: 硬件版本号
- `sw_version`
  - Required: true
  - Type: int
  - Info: 软件版本号
- `public`
  - Type: bool
  - Info: 是否公开

**Response:**

```
HTTP/1.1 200 OK
Content­-Type: application/json
{
  "error_id": 0,
  "error_msg": "ok"
}
```

************************************************

#### 下载升级包
**请求URI:**  `/ops/v1.0/firmware/bin`

**HTTP方法:**  `GET`

**Request:**

```
GET /ops/v1.0/firmware/bin?hw_version=11&sw_version=222 HTTP/1.1
```

**Response:**

```
HTTP/1.1 200 OK
filedata
```
************************************************

#### 删除升级包文件
**请求URI:**  `/ops/v1.0/firmware/del`

**HTTP方法:**  `DELETE`

**Request:**

```
DELETE  /ops/v1.0/firmware/del HTTP/1.1
Authorization: key=YOUR_API_KEY; token=YOUR_ACCESS_TOKEN
{
  "hw_version": 12345678,
  "sw_version": 5
}
```
**Request Params:**

- `hw_version`
  - Required: true
  - Type: int
  - Info: 硬件版本号
- `sw_version`
  - Required: true
  - Type: int
  - Info: 软件版本号

**Response:**

```
HTTP/1.1 200 OK
Content­-Type: application/json
{
  "error_id": 0,
  "error_msg": "ok"
}
```

************************************************

#### 设置白名单
**请求URI:**  `/ops/v1.0/firmware/devices`

**HTTP方法:**  `POST`

**Request:**

```
POST /ops/v1.0/firmware/devices  HTTP/1.1
Authorization: key=YOUR_API_KEY; token=YOUR_ACCESS_TOKEN
{
  "device": "123456789012345"
}
```

**Request Params:**

- `device`
  - Required: true
  - Type: string
  - Info: 设备号

**Response:**

```
HTTP/1.1 200 OK
Content­-Type: application/json
{
  "error_id": 0,
  "error_msg": "ok"
}
```
************************************************

#### 获取白名单列表
**请求URI:**  `/ops/v1.0/firmware/devices`

**HTTP方法:**  `GET`

**Request:**

```
GET /ops/v1.0/firmware/devices?current_page=1  HTTP/1.1
Authorization: key=YOUR_API_KEY; token=YOUR_ACCESS_TOKEN
```
**Request Params:**

- `curent_page`
  - Required: true
  - Type: int
  - Info: 当前页

**Response:**

```
HTTP/1.1 200 OK
Content­-Type: application/json
{
  "CurrentPage":1,
  "TotalPage":2,
  "CurrentTotal":50,
  "Total": 53,
  "Data":[
    {"imei":"123226789112"},
    {"imei":"1232267890122fs2"}
  ]
}
```

**Response Params:**

- `CurrentPage`
  - Type: int
  - Info: 当前页
- `TotalPage`
  - Type: int
  - Info: 总共页数
- `CurrentTotal`
  - Type: int
  - Info: 当前记录条数
- `Total`
  - Type: int
  - Info: 总共记录数
- `Data`
  - Type: array
  - Info: 当前页

************************************************

#### 删除白名单
**请求URI:**  `/ops/v1.0/firmware/devices/<deviceId>`

**HTTP方法:**  `DELETE`

**Request:**

```
DELETE /ops/v1.0/firmware/devices/34234234  HTTP/1.1
Authorization: key=YOUR_API_KEY; token=YOUR_ACCESS_TOKEN
```
**Request Params:**

- `deviceId`
  - Required: true
  - Type: string
  - Info: 设备号

**Response:**

```
HTTP/1.1 200 OK
Content­-Type: application/json
{
  "error_id": 0,
  "error_msg": "ok"
}
```
************************************************

