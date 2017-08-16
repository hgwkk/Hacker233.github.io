window.onload=function() {
    var oLeft=document.getElementsByClassName("left_content");
    oLeft[0].style.borderBottomColor="white";
    for(var i=0;i<oLeft.length;i++){
       oLeft[i].index=i;
        oLeft[i].onmouseover=function() {
            oLeft[this.index].style.borderBottomColor="white";
        }
    }
    for(var i=0;i<oLeft.length;i++){
        oLeft[i].index=i;
        oLeft[i].onmouseout=function() {
            oLeft[this.index].style.borderBottomColor="none";
        }
    }
}