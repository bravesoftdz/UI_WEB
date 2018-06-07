# 9x07 MiFi安全问题更新

## 涉及产品
> MW40 MW40V1 通用版及所有定制

## 安全更新点

> 通用版json接口添加安全更新

- http header添加自定义头部验证，添加参数`_TclRequestVerificationKey`和`_TclRequestVerificationToken`
- Login和ChangePassword两个接口参数由明文传输改为密文
- 上传类型接口添加body参数`_TclRequestVerificationToken`，用于传输加密之后的login token，Login token由Login接口返回并存储在cookie中
- 默认所有接口需要登录才能访问，否则返回错误，针对不同的版本列出不需要登录即可访问的接口给FW放出权限
- 错误处理
  - token异常时调用Logout接口
- 加密函数如下：  
```js
function newEncrypt(str) {
  if (str == "" || str == undefined) {
    return "null";
  }
  str=String(str);//Login 返回的token类型为Number
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

## 修改点

1. MW40通用版本http请求头部默认添加header参数验证_TclRequestVerificationKey，值为KSDHSDFOGQ5WERYTUIQWERTYUISDFG1HJZXCVCXBN2GDSMNDHKVKFsVBNf
2. MW40通用版本http请求头部默认添加header参数验证_TclRequestVerificationToken,未登录即可调用的接口，此参数传值为null，登录需要验证的接口传值根据Login接口的返回值token经过加密运行的值
3. Login和ChangePassword接口改为密文传输，通用版添加配置项，默认不开启，参数为IsEncryptionAndToken，若配置为true，则开启加密传输
4. 由于uploadBackupSettings上传文件的接口不能自定义http请求头，所以修改ajaxFileupload.js，允许接口uploadBackupSettings添加参数，用于验证_TclRequestVerificationToken
5. 登录之后监听接口HeartBeat，如果返回的错误码为"-32698"或者“-32699”，则UI调用Logout接口，并刷新页面。使得登录WEBUI之后的情况下，清空浏览器cookie后能自动退出登录


## 主要问题点

- 本次更新仅在通用版上添加了更新，对于简单定制，需要做好同步工作，对应深度定制及完全定制需做好方案移植工作
- 不同版本根据定制情况列出不需要登录即可访问的接口给到FW
- 使用其他加密方案的定制需要修改为通用版方案，如H3g，（改动大需要预留足够时间验证）
- tn和json接口同时使用的版本处理方式（改动大，需要预留足够时间验证）
  - Login接口必须使用json的接口用于返回login token
  - 列出不需要登录也可以访问的tn及json接口
- 纯tn接口的版本，需要列出不需要登录也可以访问的接口
- 查找不经过公共ajax函数的所有API请求，添加上自定义的header信息，即在代码中自己使用$.ajax方法去请求接口的地方，都需要添加上自定义的header
- 找出所有的上传类型接口，在调用的时候在body中添加参数`_TclRequestVerificationToken`，值为加密之后的token


## 测试

- 自定义header的验证，所有json接口
- Login和ChangePassword接口的验证，参数传输的是加密之后的字符串且接口返回成功则ok，否则fail
- 登录WEB UI之后清空cookie的验证，UI自动退出则正常，否则fail
- 未登录的时候需要访问的接口正常返回数据则Ok，返回error则需要将该接口列出给FW
- 验证所有上传文件类型的接口是否添加了body参数`_TclRequestVerificationToken`，并且接口正常返回成功


