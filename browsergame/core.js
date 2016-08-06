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
now = 0;
c = ["","","","","","","","","","","","","","","","","","","",""]; //wtf solution to escape an approaching deadline
command = "";
init = true;
var p = function(id,value) {
	c[id] = value;
	document.getElementById("c"+id).innerHTML = value;
};

buzzy = 0;
queue = [];
printi = function(stu){
	if(buzzy){
		queue.push(stu);
	}
	else{
		buzzy=1; //FIXME there may be a subtle bug in the queue. This is of medium priority, as it is in the core script
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

selectedTime = 1;
acceleration = function(factor){
	document.getElementById("toggle"+selectedTime).style.background = "gray";
	selectedTime = factor;
	document.getElementById("toggle"+selectedTime).style.background = "red";
	if(init){
		init = false;
	}
	else{
		clearInterval(times);
	};
	//set the "crontab"
	if(factor != 0){
		times = setInterval(function(){
			now++;
			document.getElementById("timing").innerHTML = now;
			if(now%5 === 0){
				science();
				//applies the penalty for using too much money
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
								cosmonauts[i][1] = 3; //status 3 = dead
								note(cosmonauts[i][0]+" has died of old age",20000);
							};
						};
						if(command === "cosmo"){
							tolk("cosmo");
						};
					};
				};
			};
		},1000/factor);
	};
};
acceleration(1);

saveFunction = function(fileName){
	alert("At the moment, savefiles only preserve your technology level and budget.");
	saveString="";
	for(var i = 0;i<technology.length;i++){
		saveString += technology[i];
	};
	saveString += "b"+budget+"b"; //b is a delimeter
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

//command interpretation and core values
customPrompt = false;
list = ["about","budget","build","clear","exit","help","info <thing>","launch","load","location","rd","save","shop"];
complete = "about<br>budget<br>build<br>clear<br>documentation<br>exit<br>help<br>info <thing><br>kim<br>launch<br>load<br>ls<br>location<br>moon<br>quit<br>rd<br>save<br>shop";
//check what command was entered
tolk = function(com){
	compara = "";
	var mello = 0;
	for(var i=0;i<com.length;i++){
		if(com[i]===" "){
			mello = i;
			i = com.length;
		};
	};
	if(mello != 0){
		compara = com.slice(mello+1,com.length);
		com = com.slice(0,mello);
	};
	if (com === "clear"){
		clear();
	}
	if (com === "cosmo" | com === "cosmonauts"){
		cosmo();
	}
	else if(com === "help"){
		helper="";
		for(var i=0;i<list.length;i++){
			helper+=list[i]+"<br>";
		};
		printi(helper);
	}
	else if(com === "budget"){
		printi("Budget: "+budget);
	}
	else if(com === "about" | com === "credits"){
		clear();
		//credits
		simplePrint("<img src=\"images/hoh.gif\"><span style=\"color: white\"> <i>Hoh productions</i></span>");
		printi("Created by Sigvart Brendberg, 2016<br>\"My God! It is full of bugs!\"<br>\"You say good games can not be made with crappy code?\"<br>\"You are rigth!\"");
	}
	else if(com === "kim"){
		printi("Thank you for the inspiration :)");
	}
	else if(com === "build"){
		printi("Build a...");
	}
	else if(com === "info" | com === "i"){
		if(compara === ""){
			printi("info about...");
			unfinished = "info ";
			customPrompt=true;
		}
		else{
			thepage(compara);
		};
	}
	else if(com === "documentation"){
		simplePrint("PLEASE NO!<br><br>Filler<br>Filler<br>Filler...");
	}
	else if(com === "exit" | com === "quit"){
		simplePrint("<a href=\"https://www.moonwards.com\">Exit the game and go back to Moonwards.</a>");//URL to main site
	}
	else if(com === "launch"){
		clear();
		listUpdate();
		//launch button
		simplePrint("<button style=\"color:#e0e0e0\" id=\"launchButton\" onclick=\"launch()\">Launch</button>");
		simplePrint(availableLaunchers);
		simplePrint("Available launchers:");
		simplePrint("<span id=\"totalMass\" class=\"red\">Total mass:</span>");
		simplePrint(pending);
		simplePrint("Pending payloads: (click to toggle)");
		totalMass();
		//mission name input
		simplePrint("<input type=\"text\" value=\"\" id=\"missionName\" placeholder=\"Mission name\">");
		printi("Welcome to mission control!");
	}
	else if(com === "load" && local === true){
		loadFunction(prompt("Name:"));
	}
	else if(com === "location" | com === "l"){
		Hlocation();
	}
	else if(com === "ls"){
		simplePrint(complete);
	}
	else if(com === "man"){
		printi("Manual pages use \"info\", not \"man\".");
	}
	else if(com === "minigame"){
		clear();
		simplePrint("<div style=\"background:#ff0000;width:512px;height:512px\"><img src=\"images/hoh.gif\" style=\"margin-left:40px;margin-top:20px\"></div>");
		minigame();
	}
	else if(com === "nosave"){
		local = false;
	}
	else if(com === "moon"){
		clear();
		document.getElementById("toggelino").style.display = "none";
		document.getElementById("devWarning").style.display = "none";
		simplePrint("<span style=\"color:#00FF00\"><h1>The Moon</h1><p>--You have no equipment on the Moon--</p><div><div id=\"moonmap\"><img src=\"images/lalande.jpg\"><canvas id=\"moonCanvas\" width=\"516\" height=\"516\"></canvas></div></div><br><p><i>\"We leave as we came and, God willing, as we shall return: with peace and hope for all mankind\"</i></p><p> - Gene Cernan, Apollo 17, Dec 19, 1972</p></span>");
		moonGUI();
	}
	else if(com === "rd"){
		clear();
		//document.getElementById("toggelino").style.display = "inline";
		//document.getElementById("devWarning").style.display = "inline";
		//Tech three container
		//simplePrint("<canvas id=\"techCanvas\" width=\"400\" height=\"300\"></canvas>");
		printScience();
		//Technology colour coding key
		simplePrint("Key: <span style=\"color: #aaaaaa\">Available</span>, <span style=\"color: #0000ff\">In development</span>, <a style=\"color: #00ff20\">Complete</a><br>=========================<br>");
		//R&D tab info
		simplePrint("<b>Welcome to Research and Development!</b><br>Click to toggle different areas of research.");
		//techCanvasDraw();
	}
	else if(com === "save" && local === true){
		saveFunction(prompt("Name:"));
	}
	else if(com === "shop" | com === "store"){
		clear();
		//Show info about an item
		simplePrint("<span id=\"shopDetails\"></span>");
		simplePrint(storeString);
		printi("Here you can by stuff!");
	}
	else if(com === "time"){
		//filler
		printi("There is a scary counter...");
	}
	else{
		//catch unrecognized input
		printi("Unknown command, try \"help\"");
	};
};

//function that displays a change in funds
budgetFresh = function(change){
	if(change < 0){
		document.getElementById("budget").innerHTML = "Budget: <b><span style=\"color: #ff0000\">"+budget+"</span><b> <a style=\"color: #ff0000\">"+change+"</a>";
	}
	else{
		document.getElementById("budget").innerHTML = "Budget: <b><span style=\"color: #ff0000\">"+budget+"</span><b> <a style=\"color: #00ff20\">+"+change+"</a>";
	};
	setTimeout(function(){
		document.getElementById("budget").innerHTML = "Budget: <span style=\"color: #e02200\">"+budget+"</span>";
	},500);
};
