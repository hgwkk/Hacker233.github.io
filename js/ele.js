window.onload=function() {
    var oIn=document.getElementsByClassName('catalog_in');
    for(var i=0;i<oIn.length;i++)
    {
        oIn[i].onmouseover=function() {
            oIn[i].style.backgroundColor="red";
        }
    }
}
