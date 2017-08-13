window.onload=function() {
    var wrap=document.getElementById('wrap');
    var content=document.getElementById('content');
    var tips=document.getElementById('tips');
    var aLi=tips.getElementsByTagName('li');
    var now=0;
    for(var i=0;i<aLi.length;i++)
    {
        aLi[0].className="active";
        content.style.left=0+"px";
        aLi[i].onclick=function() {
            now=this.index;
            play();
        }
    }
    function play() {
        for(var j=0;j<aLi.length;j++)
        {
            aLi[j].className="";
        }
        aLi[now].className="active";
        startMove(content,{left: -720 * now,});
    }
    function autoPlay() {
        now++;
        if(now==aLi.length)
        {
            now=0;
        }
        play();
    }
    var timer=setInterval(autoPlay,3000);
    wrap.onmouseover= function () {
        clearInterval(timer);
    }
    wrap.onmouseout=function() {
        timer=setInterval(autoPlay,3000);
    }

        //资料下载部分
    var oDiv=document.getElementsByClassName('a_pan');
    var oA=document.getElementsByClassName('a_onclick');
    var oBtn=document.getElementsByClassName('resert_btn');
    for(var i=0;i<oDiv.length;i++)
    {
        oA[i].index=i;
        oA[i].onclick=function() {
            oDiv[this.index].style.display='block';
        }
    }
    for(var j=0;j<oDiv.length;j++)
    {
        oBtn[j].index=j;
        oBtn[j].onclick=function() {
            oDiv[this.index].style.display='none';
        }
    }
}
