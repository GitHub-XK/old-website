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

//eventchain

place="";
success=1;
budget=1000;
growth = 1000;
local = true;

thepage = function(stuff){ //this is the giant info page function. Put stuff here.
	if(stuff[0] === "a"){
		if(stuff === "about"){
			simplePrint("Command that prints the credits.<br><img src=\"images/hoh.gif\">");
		};
	}
	else if(stuff[0] === "b"){
		if(stuff === "build"){
			simplePrint("Command to construct something<br>Syntax: build <thing>");
		}
		else if(stuff === "budget"){
			simplePrint("The amount of money you have to spend.");
		};
	}
	else if(stuff[0] === "c"){
		simplePrint("Clears everything on the screen.");
	}
	else if(stuff[0] === "d"){
		if(stuff === "delta" | stuff === "deltav" | stuff === "delta-v" | stuff === "dv"){
			simplePrint("Litterary \"change in velocity\", the limiting property of a spacecraft<br><br>Some values (m/s):<br><br>Earth-LEO: ~9500<br>LEO-LTO: 3120<br>LTO-LunarEscape: 140<br>LunarEscape-LMO: 680<br>LMO-Moon: 1720<br><img src=\"images/deltamap.jpg\">");
		};
	}
	else if(stuff[0] === "e"){
		if(stuff === "exit"){
			simplePrint("Prints a link to leave the game.");
		};
	}
	else if(stuff[0] === "h"){
		if(stuff === "heinlein"){
			simplePrint("Wrote the book \"The Moon is a harsh mistress\".");
		};
		if(stuff === "help"){
			simplePrint("Prints a list of commands");
		};
	}
	else if(stuff[0] === "i"){
		if(stuff === "info"){
			simplePrint("I'm So Meta, Even This Acronym.");
		};
	}
	else if(stuff[0] === "l"){
		if(stuff === "launch"){
			simplePrint("Go here to launch a payload");
		};
		if(stuff === "leo"){
			simplePrint("Low Earth Orbit");
		};
		if(stuff === "load"){
			simplePrint("The command to retrieve a savefile.");
		};
		if(stuff === "location"){
			simplePrint("Overview of where your spacecraft are.");
		};
		if(stuff === "ls"){
			simplePrint("Prints a list of all commands");
		};
	}
	else if(stuff[0] === "m"){
		if(stuff === "moon"){
			simplePrint("Also the command to go directly to the Moon base.");
			simplePrint("<img src=\"images/moon.gif\">");
			simplePrint("All your Moon are belong to us!");
		};
		if(stuff === "moonwards"){
			simplePrint("The project that ispired me to make this game.");
		};
	}
	else if(stuff[0] === "n"){
		if(stuff === "ntr"){
			simplePrint("Nuclear rocket engines. Has a higher Isp than chemical rockets.");
		};
	}
	else if(stuff[0] === "q"){
		if(stuff === "quit"){
			simplePrint("Identical to \"exit\"");
		};
	}
	else if(stuff[0] === "r"){
		if(stuff === "rd"){
			simplePrint("The Research and Development centre<br>Here new technology is invented.");
		};
	}
	else if(stuff[0] === "s"){
		if(stuff === "save"){
			simplePrint("Creates a savefile in LocalStorage");
		};
		if(stuff === "short"){
			simplePrint("i for info<br>dv for delta-v<br>l for location");
		};
	}
	else if(stuff[0] === "t"){
		if(stuff === "tilde"){
			simplePrint("~");
		};
	}
	else{
		printi("That was an unknown character!");
	};
};

//notifications:

note = function(text,duration){
	document.getElementById("note").innerHTML = text;
	setTimeout(function(){
		document.getElementById("note").innerHTML = "";
	},duration);
};

for(var i=0;i<technology.list.length;i++){
	var TMPname = technology.list[i];
	if(technology[TMPname].icon != undefined){
		technology[TMPname].Rstrings = "<span onclick=\"Rfunction("+i+")\" style=\"color: #aaaaaa\""+clickableBlue+">"+"<img src=\"images/"+technology[TMPname].icon+".png\"><br>"+technology[TMPname].visibleName+"</span> Cost: "+technology[TMPname].price+"<br><span>"+technology[TMPname].comment+"</span>";
	}
	else{
		technology[TMPname].Rstrings = "<span onclick=\"Rfunction("+i+")\" style=\"color: #aaaaaa\""+clickableBlue+">"+"<br>"+technology[TMPname].visibleName+"</span> Cost: "+technology[TMPname].price+"<br><span>"+technology[TMPname].comment+"</span>";	
	};
};

for(var i=0;i<technology.list.length;i++){
	var TMPname = technology.list[i];
	var mogleg = "";
	if(technology[TMPname].icon != undefined){
		mogleg="<img src=\"images/"+technology[TMPname].icon+"Green.png\">";
	};
	technology[TMPname].RstringsFuture = [
		"<span onclick=\"Rfunction("+i+")\" style=\"color: #0000ff\">"+technology[TMPname].visibleName+"</span> <span style=\"color: #ff0000\">"+technology[TMPname].progress+"%</span>",
		"<span style=\"color: #00ff00\">"+mogleg+technology[TMPname].visibleName+"</span>"
	];
	technology[TMPname].Rnotes = "Notification:<br><span style=\"color: #00ff20\" onclick=\"tolk('rd')\">"+technology[TMPname].visibleName+"</span> research is completed.";
};

Rfunction = function(id){
	var TMPname = technology.list[id];
	if(technology[TMPname].status === 0){
		technology[TMPname].status = 1;
		budget-=technology[TMPname].price;
		budgetFresh(-technology[TMPname].price);
		technology[TMPname].Rstrings = technology[TMPname].RstringsFuture[0];
		clear();
		tolk("rd");
		science();
	};
	if(id === 1){
		nukeAccident("initi");
	};
};

printScience = function(){
	for(var i=0;i<technology.list.length;i++){
		if(technology[technology.list[i]].status != 3){
			simplePrint(technology[technology.list[i]].Rstrings);
		};
	};
};

//research:

science = function(){
	for(var i = 0; i<technology.list.length; i++){
		TMPname = technology.list[i];
		if(technology[TMPname].status === 1){
			if(technology[TMPname].progress === 100){
				technology[TMPname].status = 2;
				technology[TMPname].Rstrings = technology[TMPname].RstringsFuture[1];
				note(technology[TMPname].Rnotes,10000);
				for(var j = 0; j<technology.list.length; j++){
					if(technology[technology.list[j]].status === 3){
						possible = true;
						for(var k = 0; k<technology[technology.list[j]].requires.length; k++){
							if(technology[technology[technology.list[j]].requires[k]].status != 2){
								possible = false;
							};
						};
						if(possible){
							technology[technology.list[j]].status = 0;
						};
					};
				};
				updateShop();
			}
			else{
				technology[TMPname].Rstrings = "<span onclick=\"Rfunction("+i+")\" style=\"color: #0000ff\">"+technology[TMPname].visibleName+"</span> <span style=\"color: #ff0000\">"+technology[TMPname].progress+"%</span>";
				technology[TMPname].progress += 2;
			};
		};
	};
	if(command === "rd"){
		tolk("rd");
	};
};

//location

Hlocation = function(){
	clear();
	simplePrint("<span style=\"color: #0000c0\" onclick=\"placelanded()\""+clickableBlue+">Landed</span> <span style=\"color: #ff0000\">"+places[6][0]+"</span>");
	simplePrint("<span style=\"color: #0000c0\" onclick=\"placemoon()\""+clickableBlue+">On the Moon</span> <span style=\"color: #ff0000\">"+places[6][0]+"</span>");
	simplePrint("<span style=\"color: #0000c0\" onclick=\"placeLMO()\""+clickableBlue+">Lunar orbit</span> <span style=\"color: #ff0000\">"+places[5][0]+"</span>");
	simplePrint("<span style=\"color: #0000c0\" onclick=\"placeLTO()\""+clickableBlue+">Lunar Transfer Orbit</span> <span style=\"color: #ff0000\">"+Number(places[4][0]+places[1][0]+places[2][0]+places[3][0])+"</span>");
	simplePrint("<span style=\"color: #0000c0\" onclick=\"placeLEO()\""+clickableBlue+">Low Earth Orbit</span> <span style=\"color: #ff0000\">"+places[0][0]+"</span>");
	printi("Things you have in space:");
};

//launches
availableLaunchers = "";
listUpdate = function(){
	if(pendingList.length === 0){
		pending = "<span style=\"color: #ff0000\">No launch pending.</span>";
	}
	else{
		pending = "";
		for(i=0;i<pendingList.length;i++){
			if(pendingList[i][3]){
				pending += "<span id=\"pending"+i+"\" onclick=\"pendingToggle("+i+")\" style=\"color: ";
				if(pendingList[i][2]){
					pending += "#00ff00";
				}
				else{
					pending += "#0000b0";
				};
				pending += "\""+clickableBlue+">"+pendingList[i][0]+". Mass = "+pendingList[i][1]+"kg </span>";
				if(pendingList[i][4] > 0){
					pending += "<span class=\"red\">chose a crew [0/"+pendingList[i][4]+"]</span>";
				};
				pending += "<br>";
			};
		};
	};
	updateVehicles();
	availableLaunchers = "";
	for(var i=0;i<vehicles.length;i++){
		if(vehicles[i][0]){
			availableLaunchers += "<span id=\"launcher"+i+"\" onclick=\"launcherToggle("+i+")\" style=\"color:";
			if(i === launcherToggled){
				availableLaunchers += "#00ff00";
			}
			else{
				availableLaunchers += "#0000b0";
			};
			availableLaunchers += "\""+clickableBlue+">\""+vehicles[i][1]+"\", ";
			if(vehicles[i][4] != true){
				availableLaunchers += "not "
			};
			availableLaunchers += "human rated. Capacity "+vehicles[i][2]+"</span><br>";
		};
	};
	if(availableLaunchers === ""){
		availableLaunchers = "No configurations available. You need to buy some parts in the <span class='blue'"+clickableBlue+" onclick=\"updateShop();tolk('shop');command='shop'\">shop</span> first.<br>";
	};
	availableLaunchers += "<span"+clickableBlue+" style=\"color:#00ff00\" onclick=\"launcherEditor()\"><br>Create your own configuration</span>";
};

launcherEditor = function(){
	alert("Here be dragons! (The configuration editor needs graphics, and grapics is time consuming)");
	clear();
	simplePrint("<br><br><br><br><br><br><br><br><br><br><br><br>"); //12 <br> because magic
	simplePrint("<input type=\"text\" value=\"\" id=\"confName\" placeholder=\"configuration name\"></input><button onclick=\"saveConfiguration()\">Save configuration</button><div><img "+editor+" src=\"images/ground.png\"><img src=\"images/basicCoreTMP.png\" "+editor+"><img src=\"images/basicUpperTMP.png\" "+editor+"></div>");
};

saveConfiguration = function(){
};

launch = function(){
	if(readyToLaunch){
		for(var i=0;i<vehicles[launcherToggled][7].length;i++){
			shopItems[vehicles[launcherToggled][7][i]][4]--;
		};
		var tmpName = document.getElementById("missionName").value;
		if(tmpName === ""){
			tmpName = "unnamed";
		};
		crafts.push([tmpName,"LEO",now+"",massToLaunch+"",1000,0,[]]);
		for(var i=0;i<pendingList.length;i++){
			if(pendingList[i][2]){
				pendingList[i][2] = false;
				pendingList[i][3] = false;
			};
			partID.push([pendingList[i][0]]+"");
			crafts[crafts.length-1][6].push(uniqueListing);
			uniqueListing++;
		};
		places[0][0]++;
		simplePrint("<img src=\"images/launch.png\">");
		alert("Here there is supposed to be a video or series of images of a launch.\nSorry to dissapoint you :(");//remove me
		note("The launch was successfull!",5000);
		clear();
		//prints what tabs to go to after a launch
		simplePrint("Your craft has been launched. Go to <span class=\"blue\" "+clickableBlue+" onclick=\"tolk('location');command='location'\">Locations</span> to view it in orbit, or bo back to <span class=\"blue\" "+clickableBlue+" onclick=\"tolk('launch');command='launch'\">Launch</span>.<br>(This is so far things are developed, there is now just placed a placeholder in orbit.)");
	}
	//Detect various cases where you can not launch the rocket
	else if(launcherToggled === -1){
		note("You must select a launcher",5000);
	}
	else if(vehicles[launcherToggled][2] < massToLaunch){
		note("The selected payload is too heavy",5000);
	}
	else{
		note("You must select a payload",5000);
	};
};

//R&D canvas below here

techCanvasDraw = function(){
	var canvas = document.getElementById("techCanvas");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#D0D0D0";
	ctx.fillRect(0,0,400,300);
};

moonGUI = function(){
};
