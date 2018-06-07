# 路由器API安全相关

## 文档信息

### 说明
!> 方案先在HH70 EE上实现，后续验证OK之后，同步更新通用版，并要求APP同时修改

### 创建人信息
- 创建人: `jinhui.lu@tcl.com`

### 参考文档

### 评审Review记录


### Change History

- `2017-06-22` `jinhui.lu` 
  - 添加加密规则js版代码参考
  - 修改Login接口返回的token类型为Number类型
  - 添加公共错误码

## API修改

### 错误码

- `-32699` : Authentication Failure
- `-32698` : token error

### APIKEY
> 所有API需要HTTP的header传入  
`KSDHSDFOGQ5WERYTUIQWERTYUISDFG1HJZXCVCXBN2GDSMNDHKVKFsVBNf`

API中不是明文传输的内容使用此APIKEY通过一定的规则进行混淆之后传输，FW再去反规则去解析内容

### Token
> 登录成功之后返回token值，所有需要登录之后才能操作的接口需要在HTTP的header中传此Token

### Access Authorization

Access Authorization通过HTTP的header将APIKEY和Token发送给服务器
```
_TclRequestVerificationKey:${APIKEY}
_TclRequestVerificationToken:${Token}
```

>备注:其中的`${Token}`是`Login`接口返回的toke使用加密规则加密之后的值

### 需要修改的接口

#### 登录
> 之前的WEB UI登录密码是明文传输,参考[login](/hh70/smart-release_Json?id=_511-login);现改为如下

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "Login",
  "params": {
    "UserName": "sdafdsalgdsagdasgjkjhkadlsbdsab5b4as",
    "Password": "sdafdsalgdsagdasgjkjhkadlsbdsab5b4"
  },
  "id": "1.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
      "token":45487484
  },
  "id": "1.1"
}
```

**Params:**

- `UserName`: Login UserName
- `Password`: Login Password

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "010101",
    "message": "Username or Password is not correct."
  },
  "id": "1.1"
}
```
- 010101: Username or Password is not correct.
- 010102: Other user is login.
- 010103: If the user login error 5 times, this user can login until the device reboot.
- 010104: If disable guest ap ui access, guest ap can’t access webui.

#### 修改密码

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "ChangePassword",
  "params": {
    "UserName": "sdafdsalgdsagdasgjkjhkadlsbdsab5b4as",
    "CurrPassword": "sdafdsalgdsagdasgjkjhkadlsbdsab5b4as",
    "NewPassword": "sdafdsalgdsagdasgjkjhkadlsbdsab5b4as"
  },
  "id": "1.4"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "1.4"
}
```

**Params:**

- `UserName`: Current admin
- `CurrPassword`: Current password
- `NewPassword`: The new password

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "010401",
    "message": "Username or Password is not correct."
  },
  "id": "1.4"
}
```
- 010401: Change password failed.
- 010402: The current password is wrong.
- 010403: The current password is the same as default password.


### 不需要验证token的接口列表
> 未登录时能访问的接口，只需验证app key的有效性即可


- GetCurrentLanguage
- SetLanguage
- Login
- GetLoginState
- GetSimStatus
- GetSystemStatus
- GetDeviceNewVersion`2017-05-15新增`
- `Logout` 2017-05-16新增` 避免浏览器清空cookie时无法Logout的问题


### 加密规则js代码

!> 参数加密和header上的token都是使用此规则加密

```js
units.encrypt = function(str) {
  if (str == "" || str == undefined) {
    return "";
  }
  var key = "e5dl12XYVggihggafXWf0f2YSf2Xngd1";
  var str1 = [];
  var encryStr = "";
  for (var i = 0; i < str.length; i++) {
    var char_i = str.charAt(i);
    var num_char_i = char_i.charCodeAt();
    str1[2 * i] = (key[i % key.length].charCodeAt() & 0xf0) | ((num_char_i & 0xf) ^ (key[i % key.length].charCodeAt() & 0xf));
    str1[2 * i + 1] = (key[i % key.length].charCodeAt() & 0xf0) | ((num_char_i >> 4) ^ (key[i % key.length].charCodeAt() & 0xf));
  }
  for (var i = 0; i < str1.length; i++) {
    encryStr += String.fromCharCode(str1[i]);
  }
  return encryStr;
}
```

