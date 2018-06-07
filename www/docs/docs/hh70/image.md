# HH70项目图片资源使用方案

## 文档信息
HH70项目图片资源使用方案

### 说明
!> 

### 创建人信息
- 创建人: `xueqin.jin@tcl.com`

### 参考文档

### 相关网址
- http://iconfont.cn/

### 评审Review记录

## 前言
  以往项目中由于客户定制图片颜色、尺寸大小等需求，需要UE重新提供图片，UI修改代码。
  由于HH70项目上不用支持IE8了，可以考虑使用svg矢量图片来替换位图图片，在UI代码中实现对矢量图片的颜色及尺寸进行改变。
  结合项目颜色独立到color.scss中的方案，实现只修改color.scss中颜色值即可替换包括图片在内的整体颜色风格。

## 预研
  在初步需求确立后研究实际实现的可行性，参考相关资料初步确定需要解决的问题主要是怎样在css中对SVG图片颜色进行控制。

## 纯色SVG图片
- 纯色SVG图片转换为iconfont字体文件方式引入项目中使用
  局限：原始图标只能是纯色的，多色的图片采用其他方案实现颜色尺寸定制。
  优点：1.使用SVG转换为iconfont字体文件后可以方便控制图标大小及颜色，不用再提供新图标。后续项目有新加的图标时才需再次使用iconfont的网站转换生成相关iconfont资源。
        2.所有图标转换为一个字体文件，减少了文件请求数。
  具体操作步骤如下：
 - 1.登陆http://iconfont.cn/ 使用Github账户快捷登陆 用户名：xueqin.jin@tcl.com 密码：mobile#3
 - 2.将UE新提供的纯色的svg图标上传到http://www.iconfont.cn/icons/upload，提交后图标会存到“我上传的图标”。
 - 3.将我上传的图标中所有图标选中加入购物车，打开购物车选择下载代码。
 - 4.下载完成的代码带有demo页面，参考下图，我们只需要每次将新生成的如下几个选中的文件替换到HH70项目目录src/styles目录下即可在项目中使用。
  - ![](/hh70/img/image/iconfont-code.png)
 - 5.使用方法可以参考demo_fontclass.html页面，在具体用到的地方引入相应的图标样式<i class="iconfont icon-xxx"></i>
 - 6.修改字体图标的颜色及大小只需要修改对应样式的color及font-size属性。
 - 7.所有转为字体图标的原始SVG图片已经备份到目录\\datasz.hq.ta-mp.com\SCD-SMARTHINGS\SWD\WebUI\01.Projects\HH70\images-src\General\images\icon-src

## 多色SVG图片
- 多色的svg图片要在css中控制颜色有两点要解决的问题。
  1.svg图片需要以html内嵌的方式引用。
  2.每个svg图片需要添加唯一的样式名，用来在css中根据样式名定位到具体颜色的class。
  第一个问题的解决方案是使用ajax请求SVG图片，将请求回的SVG内容动态嵌入到html代码中。
  由于需要加载的图片可能是根据状态动态变化的，还需要对文件名进行监听，文件名变化了，动态重置SVG内嵌图片的内容。
  优点：解决了在css中控制多色SVG图片颜色值的问题。
  缺点：每个图片需要单独的ajax请求
  SVG原始图片处理步骤及代码中引用方式参考如下：  
  - 1.所有提交的svg图片都是经过添加parseSVG-文件名这种格式的class处理过的，避免svg文件中样式重名导致样式互相影响的问题。已经写了gulp工具进行SVG文件处理，具体使用参考http://10.129.60.82:8003/docs/#/team/gulp_tool svgAddClass部分
  - 2.HH70代码中添加了svg.vue文件用来加载非纯色的svg图片为html内嵌方式使用，具体实现参考代码。
  使用方法 svg-img(:svgUrl="'ic_message_full.svg'") 
  其中svgUrl属性可以为动态变化的图片名，图片名变化后会自动重新加载svg内容
  - 3.考虑到ajax加载svg文件方式的缺点，目前只需要将通用版本上需要用到多色的svg图片使用此方案引用，其他定制版本上的图片由于不具备通用性，只需要将svg图片作为普通图片使用就可以。
  目前通用版本上logo及短信满状态图标及信号状态图片是使用svg-img方式引用的。
  - 4.所有使用这种svg-img方式加载的svg文件统一放在代码路径/images/svg/下了，原始SVG图片备份到了\\datasz.hq.ta-mp.com\SCD-SMARTHINGS\SWD\WebUI\01.Projects\HH70\images-src\General\images\svg-src



