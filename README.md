# cwui
A UI library for cloudwood, includes the base widgets in mobile web applications.

cwui 云莱坞UI规范

cwui是云莱坞移动端基础样式库，以下像素均以iphone6/6s（750）为基准，基础组件包含`fonts`、`colors`、`button`、`cell`、`article`、`icons`、`tab`等。

[https://github.com/yunlaiwu/cwui](https://github.com/yunlaiwu/cwui)

### fonts
| 环境        | 语言           | 字体  |
| ------------- |:-------------:| -----:|
|   ios9    | 中 | 苹方－简 |
|   ios9       | 英 | SF-UI   |
| Android   | 中   |思源黑体|
| Android   | 英   |Roboto|

### colors
`#00acff(云莱坞主题颜色)`、`#333333`、`#666666`、`#999999`、`#ffffff`、`#c1c1c2(border颜色)`、`#FAFAF7(多文字背景色)`

### button
目前用到的button基本为云莱坞主题色，大小上分为full-width, middle, small

``` css
.btn{
  background-color: #00acff;
  color: #fff;
  border:0 none;
  border-radius: 5px;
}
```

1. full-width:
``` css
.btn.full-width{
    width: 100%;
    height: 88px;
    font-size: 32px;
}
```
![full-width](http://ac-2eYaD9YT.clouddn.com/fdcfc26a56ee2863dac0.png)
2. middle:
``` css
.btn.middle{
  width: 100px;
  height: 60px;
  font-size: 38px;
}
```
![middel](http://ac-2eYaD9YT.clouddn.com/6c9e3a8ff7781ccb7aeb.png)
3. small:
``` css
.btn.small{
  width: 130px;
  height: 45px;
  font-size: 24px;
}
```
![small](http://ac-2eYaD9YT.clouddn.com/7f2ae5984a0ca2909d35.png)

### cell
左右边距各40px, 上下内彼边距为32px, 背景颜色#fff, cell之间的间距为28px(如果有文字的间距为 28px+文字的行高)

  ![cell](http://ac-2eYaD9YT.clouddn.com/c7688c34c34d82446e38.png)

### article
标题:
``` css
h3{
  color: #333;
  font-size: 48px;
}
```
链接文字：
``` css
a.link-text{
  font-size:24px;
  color: #00acff;
}
```
正文：
``` css
p.main-text{
  color: #333;
  font-size: 32px;
  line-height: 1.6;
}
```
标签：
``` css
span.tag-text{
  color: #999;
  font-size: 24px;
}
```
信息文字：
``` css
span.info-text{
  color: #333;
  font-size: 26px;
  font-weight: lighter;
}
```
![article](http://ac-2eYaD9YT.clouddn.com/8ad33112bc87edd56545.png)

### icons
目前移动web端常用的icons都打包成字体文字（cwicon.svg）

![icons](http://ac-2eYaD9YT.clouddn.com/9d6b572573e9a2950dc6.png)

### tab
tab item采用弹性布局等分宽度，高度70px
``` css
.tab-item{
  font-size:32px;
  color:#666;
}
.tab-item.active{
  font-size: 34px;
  color: #00acff;
}
```
![tab](http://ac-2eYaD9YT.clouddn.com/962ee1325bd1fffbb4b4.png)
