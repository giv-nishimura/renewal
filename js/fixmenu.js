/*
 fix menu
 2017/01/26 crytus corporation.
*/
function fm_hasClass(e, c)
{
    var classes = e.className;
    if (!classes) return false;
    if (classes === c) return true;
    return classes.search("\\b" + c + "\\b") != -1;
}
function fm_addClass(e, c)
{
    if (fm_hasClass(e, c)) return;
    var classes = e.className;
    if (classes && classes[classes.length-1] != " ")
        c = " " + c;
    e.className += c;
}
function fm_removeClass(e, c)
{
    var pattern = new RegExp("\\b" + c + "\\b\\s*", "g");
    e.className = e.className.replace(pattern, "");
}
function fm_addEvent(elm,listener,fn){
	try{
		elm.addEventListener(listener,fn,false);
	}catch(e){
		elm.attachEvent("on"+listener,fn);
	}
}
