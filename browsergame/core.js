c = ["","","","","","","","","","","","","","","","","","","",""]; //wtf solution to escape the approaching deadline
var p = function(id,value) {
	c[id] = value;
	document.getElementById("c"+id).innerHTML = value;
};

buzzy = 0;queue=[];
printi = function(stu){
	if(buzzy){
		queue.push(stu);
	}
	else{
		buzzy=1; //FIXME there may be some subtle bug in the queue. This is of medium priority, as it is in the core script
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
	fresh();
};

fresh = function(){
	for (i = 19;i > 0;i--){
		p(i,c[i-1]);
	};
	p(0,"");
};

clear = function(){
	for (i=0;i<20;i++){
		document.getElementById("c"+i).innerHTML = "";
		c=["","","","","","","","","","","","","","","","","","","",""];
	};
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
			command = unfinished+command;
			tolk(command);
			customPrompt = false;
		}
		else{
			tolk(command);
		};
	};
};

function lsTest(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    }
    catch(e) {
        return false;
    };
};

if(lsTest() === true){
    // available
}
else{
    alert("You do not have localStorage enabled! You can still play the game, but not make savefiles.");
};

clickableBlue = " onmouseover=\"this.style.background='#202040';\" onmouseout=\"this.style.background='black';\" ";
editor = "style=\"position:absolute;left:20px;\"";

acceleration = function(factor){
if(factor===1){
	document.getElementById("toggle2").style.background = "gray";
	document.getElementById("toggle3").style.background = "gray";
}
else if(factor===5){
	document.getElementById("toggle1").style.background = "gray";
	document.getElementById("toggle3").style.background = "gray";
}
else{
	document.getElementById("toggle1").style.background = "gray";
	document.getElementById("toggle2").style.background = "gray";
};
clearInterval(times);
times = setInterval(function(){
	now++;
	document.getElementById("timing").innerHTML = now;
	if(now%100 ===0){
		budget += growth;
		budgetFresh(growth);
		note("New budget",5000);
	};
	if(now%5 === 0){
		science();
		if(budget < 0){
			budgetFresh(Math.ceil(0.01*budget));
			budget += Math.ceil(0.01*budget);
		};
	};
},1000/factor);
};

saveFunction = function(fileName){
	alert("At the moment, savefiles only preserve your technology level and budget.");
	saveString="";
	for(var i = 0;i<technology.length;i++){
		saveString += technology[i];
	};
	saveString += "b"+budget+"b";
	localStorage.setItem(fileName,saveString);
};

loadFunction = function(fileName){
	saveString = localStorage.getItem(fileName);
	technologyTmp = [];
	for(i=0;i<technology.length;i++){
		technologyTmp.push(Number(saveString[i]));
	};
	technology = technologyTmp;
	i++;
	budget = "";
	while(saveString[i] != "b"){
		budget+=saveString[i];
		i++;
	};
	budget = Number(budget);
	document.getElementById("budget").innerHTML = "Budget: <a style=\"color: #e02200\">"+budget+"</a>";
};
