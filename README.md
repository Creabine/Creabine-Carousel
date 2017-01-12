# Creabine Carousel
## 介绍
一款简单的渐变轮播插件。[example](http://www.qdfuns.com/notes/26955/7c6096d13f967a2fb26015a5adef0125.html)
## 使用
1 引用文件：

`<link rel="stylesheet" href="Creabine-Carousel.css">`

`<script src="Creabine-Carousel.js"></script>`
    
2 添加标签：

`<div id="carouselRoot"></div>`

3 js调用：

```
var Carousel=new CreabineCarousel(
    {
        root:"carouselRoot",
        images:[url1,url2,url3,url4,url5,...],
        content:[{title:"title1",text:"text1"},{title:"title2",text:"text2"},...],
        autoScroll:true
    }
)
```

### Options
| name          | type         | default         | required   |
| --------      | ---------    |:----------:     | ----------:| 
| root          | string       | NaN             |  yes       |
| images        | Array    	   | NaN             |  yes       |
| content       | Object array | NaN             |  yes       |
| autoScroll    | boolean      | false           |  no        |
| scrollDuration| number       | 5000            |  no        |
| height	    | number       | 700             |  no        |


