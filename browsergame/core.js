c = ["","","","","","","","","","","","","","","","","","","",""]; //wtf solution to escape the approaching deadline
var p = function(id,value) {
	c[id] = value;
	document.getElementById("c"+id).innerHTML = value;
};

buzzy = 0;queue=[];
printi = function(stu){
	if(buzzy){
//		alert("Weird error, probably you use windows.");
		queue.push(stu);
//		alert(queue);
	}
	else{
		buzzy=1; //FIXME
		c[0] = stu;
		telluty = 0;
		for(i = 0;i < stu.length;i++){
			setTimeout(function(){
				document.getElementById("c0").innerHTML = stu.slice(0,telluty+1);
				telluty++
			},i*30);
			setTimeout(function(){
				buzzy=0;
				if(queue.length != 0){
					printi(queue[0]);
					queue=[];
				};
			},(stu.length+1)*30);
		};
	};
};

simplePrint = function(ting){
	c[0] = ting;
	document.getElementById("c0").innerHTML = ting;
};

fresh = function(){
	for (i = 19;i > 0;i--){
		p(i,c[i-1]);
	};
	p(0,"");
};

document.onkeypress = trykk;
function trykk(e){
	var evtobj = window.event? event : e
	var unicode = evtobj.charCode? evtobj.charCode : evtobj.keyCode
	if (unicode === 13){
		fresh();
		command = document.getElementById("command").value;
		document.getElementById("command").value = "";
		simplePrint(">>"+command);
		fresh();
		if(customPrompt){
			storyfind(place);
			customPrompt = false;
		}
		else{
			tolk(command);
		};
	};
};
