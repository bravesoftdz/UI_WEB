# y859 项目维护

## 文档信息

### 说明
!> y859 代码地址，git提交流程

### 创建人信息
- 创建人: `jundai.hu@jrdcom.com`

### 参考文档

### 评审Review记录

## y859 项目维护

### 代码地址
- 使用SecureCRT 5.1，连接109服务器，登录名和密码为本人名字的全拼。
- 创建代码存放的目录：mkdir y859。
- 克隆开发库，git clone git@10.128.161.91:mbb/M9625AAATWNLZD.git -b Y859_2G1G/master(注：以前维护的是develop和master分支，后firmware人员建议要求只维护master分支)
- 进入代码目录：配置Git当前用户的姓名和邮件地址，如：
 - $ git config --global user.name 'jundai.hu'
 - $ git config --global user.email jundai.hu@jrdcom.com
- 用gitbash 和 SecureCRT 5.1 进入代码目录，输入命令：git config –l  查看用户名和邮箱是否配置正确。

### 提交代码
- 每次有新项目时，首先都要更新本地和库上最新代码，输入命令：git pull。
- 进入本地电脑y859代码目录，修改项目。
- 将本地修改的y859代码，用compare工具对比到109服务器的y859目录。
- 查看当前工作状态: 在secureCRT，进入y859代码目录, 输入命令：git status，查看修改的状态。(copy修改文件的路径)
- 把修改的部分提交到暂存区输入命令：git add filename。filename指上一部cop修改文件的路径，注后面一定要加一个'/'符号
- 把修改提交到本地版本库输入命令：git commit –m '说明'。
- 同步本地版本库到远程版本库: 进入859项目路径，输入命令ls，查看当前目录文件。
找到文件gerrit-push.py，运行./gerrit-push.py 进行代码push。
- 查看当前push后返回的命令描述，是否提交成功。

### 将提交的109代码文件上服务器
- 在浏览器中打开：http://10.128.161.209:8080/login/%23%2Fq%2Fstatus%3Aopen
 - 输入username和password如：jundai.hu jundai.hu
- 登陆后,点击'settings'按钮，进入settings页面。
- 点击当前菜单项的'my'按钮，进入个人的信息页面。
- 点击'changes'按钮，进入'My Rviews'页面
- 点击你修改的subject，进入修改的页面。
- 点击'reply'按钮，回复。
- 点击'add'按钮，增加review人员,如jinhui.lu
- 退出你当前的账户，输入jinhui.lu的账户，登陆http://10.128.161.209:8080/login/%23%2Fq%2Fstatus%3Aopen
 - 然后添加回复，submit代码。
- 注：之所以要登陆jinhui.lu的账户，是因为我们部分人员没有开通submit的权限。


