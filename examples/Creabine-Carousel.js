/**
 * Created by Creabine on 17/01/11.
 */


/**
 *初始化配置
 * @param options
 */

function CreabineCarousel(options){
	var imgPathList = options.images;
    var textList = options.content;
    if (!options.root) {
        throw "require root to this CreabineCarousel";
    }
    if (!imgPathList) {
        throw "must provide parameter images";
    }
    if (imgPathList.length != textList.length) {
        throw "images are not equal to contents";
    }
    var changeCount = 0;
    var timer;
    var _autoScroll = options.autoScroll || false;
    var _scrollDuration = options.scrollDuration || 4000;
    var _height = options.height || 700;

    function initElements() {
    	var _root = document.getElementById(options.root);
    	if (!_root) {
            throw "no exist called this name element,please create element called this name";
        }
        _root.className = "CreabineCarousel";
        _root.style.height = _height + "px";
        var _dotContainer = document.createElement("ul");
        _dotContainer.className = 'CreabineCarousel-dotContainer';
        _root.appendChild(_dotContainer);
        for (var i = 0; i < imgPathList.length; i++) {
            var _dot = document.createElement("li");
            _dot.className = "dot";
            _dot.id = "item" + (i+1) + "dot";
            _dotContainer.appendChild(_dot);
            var _item = document.createElement("div");
            _item.className = "CreabineCarousel-item"
            _item.id = "item" + (i+1);
            _item.style.backgroundImage = "url(" + imgPathList[i] + ")";
            _item.style.backgroundSize = "cover";
            _item.style.backgroundRepeat = "no-repeat";
            if(i == 0){
                _item.style.opacity = '0';
                _item.style.zIndex = '1';
            }
            _root.appendChild(_item);
            var _h = document.createElement("h1");
            _h.innerText = textList[i].title;
            _item.appendChild(_h);
            var _p = document.createElement("p");
            _p.innerText = textList[i].text;
            _item.appendChild(_p);
        }
        _dotContainer.addEventListener("mouseover",function(e){
        	if( e.target && e.target.className == "dot" ){
        		clearInterval(timer);
        		var id = e.target.id.substring(0,5);
        		CarouselHover(id);
        	}
        });
        _dotContainer.addEventListener("mouseout",function(e){
        	if( e.target && e.target.className == "dot" ){
        		var id = e.target.id;
        		CarouselOut(id);
        	}
        });
        if(_autoScroll){
            timer = setInterval(function(){Carousel()},_scrollDuration);
        }

    }
    function Carousel(){
        var all = document.getElementsByClassName('CreabineCarousel-item');
        for (var i = all.length - 1; i >= 0; i--) {
            all[i].style.opacity = '0';
            all[i].style.zIndex = '1';
        }
        var i=((changeCount++%5)+1);
        var id = "item" + i;
        document.getElementById(id).style.opacity = '1';
        document.getElementById(id).style.zIndex = '10';
    }
    function CarouselHover(id){
        clearInterval(timer);
        var all = document.getElementsByClassName('CreabineCarousel-item');
        for (var i = all.length - 1; i >= 0; i--) {
            all[i].style.opacity = '0';
            all[i].style.zIndex = '1';
        }
        document.getElementById(id).style.opacity = '1';
        document.getElementById(id).style.zIndex = '10';
    }
    function CarouselOut(id){
        var num = id.substring(4,5);
        num = parseInt(num)-1;
        changeCount = num;
        timer = window.setInterval(function(){Carousel()},_scrollDuration);
    }
    initElements();
}