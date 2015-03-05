var content = function onloadEvent(ValueId){
						
	if (!event.srcElement || !event.srcElement.parentElement || !event.srcElement.parentElement.onclick){ return;}

	var cellindex=event.srcElement.parentElement.parentElement.cellIndex-1;
	var o = event.srcElement.parentElement.parentElement.parentElement.cells[cellindex].children[0]; 
	 
	if (!o || o.tagName!='A'){ return; }
	o.val=ValueId;      
	if (o.href.lastIndexOf('PlusClick()') <= 0 ){
		o.href =o.href+";PlusClick();void(0);";          
	}    
	
	 var obj2= event.srcElement.parentElement;     
	 obj2.attachEvent("onclick",RtnFalse) ;   
	 
}

var script = document.createElement("script");
script.type = "text/javascript";
script.textContent = content;
document.documentElement.appendChild(script);
