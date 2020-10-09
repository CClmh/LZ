function reinitIframe(){
	var iframe = document.getElementById("iframes");
	try{
		var bHeight = iframe.contentWindow.document.body.scrollHeight;
		var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
		var height = Math.max(bHeight, dHeight);
		iframe.height = height;
		}catch (ex){}
}
window.setInterval("reinitIframe()", 200);

// function changeFrameHeight(){
//      var ifm= document.getElementById("iframes");
//      ifm.height=document.documentElement.clientHeight-56;
//  }
//  window.onresize=function(){ changeFrameHeight();}
//  $(function(){changeFrameHeight();});


