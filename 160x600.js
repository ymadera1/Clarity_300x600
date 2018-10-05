

function init() {
	var d, frm1Txt1, frm1Txt2;
	animate(), setClicks();
	
}
	TweenLite.set(frm1Txt1, {top: 268, left:-200, scale:1, opacity:0}); 
	TweenLite.set(frm1Txt3, {top: 100, left:-119, scale:1, opacity:0}); 
	TweenLite.set(frm1Txt5, {top: 200, left:36, scale:1.1, opacity:0 });
	///TweenLite.set(frm1Txt1, {top:32, left:114, z:200, opacity:0, transformPerspective:80 });
	///TweenLite.set(frm1Txt2, {top:68, left:80, z:200, opacity:0, transformPerspective:80 });
	TweenLite.set(frm1Footer1, {opacity: 0, left:10, top:552});	


frm1Txt0 = document.getElementById("frm1Txt0");
frm1Txt1 = document.getElementById("frm1Txt1");

frm1Txt3 = document.getElementById("frm1Txt3");
frm1Txt5 = document.getElementById("frm1Txt5");
////frm1Txt99 = document.getElementById("frm1Txt99");


ctaShift = false;
myleft="-119px";//this sets the left edge for the rollover...
myleft2="-109px";

//myleft=.3;//this sets the left edge for the rollover...
//myleft2=.335;

function shiftCta(){
    if(!ctaShift){
        ctaShift = true;
        TweenLite.to(frm1Txt3, .2, {left: myleft2, ease:Quad.easeInOut, delay:0, overwrite:0, onComplete: rolloutCta});
//		TweenLite.to(frm1Txt3, .2, {scale: myleft2, left:-20, ease:Quad.easeOut, delay:0, overwrite:0, onComplete: rolloutCta});

     }
}

function rolloutCta(){
    TweenLite.to(frm1Txt3, .35, {left: myleft, ease:Quad.easeInOut, delay: 0, overwrite:0, onComplete: function(){ctaShift = false;}});
//    TweenLite.to(frm1Txt3, .35, {scale: myleft, left:-30, ease:Quad.easeOut, delay: 0, overwrite:0, onComplete: function(){ctaShift = false;}});

}



function animate() {

	
   d = 1;

	


TweenLite.to(frm1Txt1, 0.3, {scale:1, left:10, opacity: 1, ease:Quad.easeInOut, delay: d, overwrite: 0});
TweenLite.to(frm1Txt3, 0.4, {scale:.3, ease:Quad.easeOut, delay: d, overwrite: 0});		
	
d+=1.5;
d+=.4;
d+=.55;	
TweenLite.to(frm1Txt1, 0.4, {opacity: 1, top:165, ease:Back.easeOut, delay: d, overwrite: 0});	

TweenLite.to(frm1Txt3, 0.4, {opacity: 1, top:152, ease:Back.easeOut, delay: d+.15, overwrite: 0});		
TweenLite.to(frm1Txt5, 0.4, {opacity: 1, top:288, ease:Back.easeOut, delay: d, overwrite: 0});		
d+=.5;
TweenLite.to(frm1Footer1, 0.5, {opacity: .45, ease:Quad.easeInOut, delay: d, overwrite: 0});
	
	
	////d+=1.514;////1.5

////TweenLite.to(cta, .4, {opacity: 1, ease:Quad.easeOut, delay: d, overwrite: 0}); 
////d+=1.5;///.5;

}




function setClicks() {
	document.getElementById("animation").addEventListener("click", exitHandler_main), document.getElementById("cta").addEventListener("click", exitHandler_main), document.getElementById("pi1").addEventListener("click", exitHandler_pi1), document.getElementById("mg1").addEventListener("click", exitHandler_mg1), document.getElementById("pi2").addEventListener("click", exitHandler_pi2), document.getElementById("mg2").addEventListener("click", exitHandler_mg2), document.getElementById("pi3").addEventListener("click", exitHandler_pi3), document.getElementById("mg3").addEventListener("click", exitHandler_mg3), document.getElementById("pi4").addEventListener("click", exitHandler_pi4), document.getElementById("mg4").addEventListener("click", exitHandler_mg4), document.getElementById("BI_logo").addEventListener("click", exitHandler_BI_logo), document.getElementById("Lily_logo").addEventListener("click", exitHandler_Lily_logo)
}





var _coun, _countIncr = .1,
	_counterInt;
window.onload = function () {
	init()
};
