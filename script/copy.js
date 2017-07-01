document.addEventListener("copy", gm);
function copy(e){
    e.clipbordData.setData ('text/plain',box.value);
	// var box = document.getElementById('box');
	// var range = document.createRange();

	// range.selectNode(box);
	// window.getSelection().addRange(range);
	// document.execCommand('copy');
	
}