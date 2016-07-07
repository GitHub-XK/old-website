/**
 *
 *
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 *
 * Copyright (C) 2016  Sigvart Brendberg
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

c = ["","","","","","","","","","","","","","","","","","","",""]; //wtf solution to escape the approaching deadline
command = "";
init = true;
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
		document.getElementById("toggle0").style.background = "gray";
		document.getElementById("toggle2").style.background = "gray";
		document.getElementById("toggle3").style.background = "gray";
	}
	else if(factor===5){
		document.getElementById("toggle0").style.background = "gray";
		document.getElementById("toggle1").style.background = "gray";
		document.getElementById("toggle3").style.background = "gray";
	}
	else if(factor===0){
		document.getElementById("toggle1").style.background = "gray";
		document.getElementById("toggle2").style.background = "gray";
		document.getElementById("toggle3").style.background = "gray";
	}
	else{
		document.getElementById("toggle0").style.background = "gray";
		document.getElementById("toggle1").style.background = "gray";
		document.getElementById("toggle2").style.background = "gray";
	};
	if(init){
		init = false;
	}
	else{
		clearInterval(times);
	};
	if(factor != 0){
		times = setInterval(function(){
			now++;
			document.getElementById("timing").innerHTML = now;
			if(now%5 === 0){
				science();
				if(budget < 0){
					budgetFresh(Math.ceil(0.01*budget));
					budget += Math.ceil(0.01*budget);
				};
				if(now%100 < 2){
					budget += growth;
					budgetFresh(growth);
					note("New budget",5000);
					if(now%200 < 2){
						//make cosmonauts age and die
						for(var i=0;i<cosmonauts.length;i++){
							if(cosmonauts[i][1] != 3){
								cosmonauts[i][3]++;
							};
							if(cosmonauts[i][3] > 60 && Math.random() < 0.04){
								cosmonauts[i][1] = 3; //status = dead
								note(cosmonauts[i][0]+" has died of old age",10000);
							};
						};
/*
						for(var i=0;i<Rcosmonauts.length;i++){
							Rcosmonauts[i][3]++;
							if(Rcosmonauts[i][3] > 60 && Math.random() < 0.04){
								Rcosmonauts[i][1] = 3; //status = dead
								note(Rcosmonauts[i][0]+" has died of old age",10000);
							};
						};
*/
						if(command === "cosmo"){
							tolk("cosmo");
						};
					};
				};
			};
		},1000/factor);
	};
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
	document.getElementById("budget").innerHTML = "Budget: <span style=\"color: #e02200\">"+budget+"</span>";
};

commandToggled = false;
togglerText = "Show command line";
toggleCommand = function(){
	if(commandToggled){
		commandToggled = false;
		commandModule = "";
		togglerText = "Show command line";
	}
	else{
		commandToggled = true;
		commandModule = "<p>Type some commands! (The command line is only kept for debuging)</p><input type=\"text\" value=\"\" id=\"command\">";
		togglerText = "Hide command line";
	};
	document.getElementById("hidden").innerHTML = commandModule;
	document.getElementById("toggelino").innerHTML = togglerText;
};
