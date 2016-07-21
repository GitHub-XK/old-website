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

Rprog = [0,0,0,0,0,0,0,0,0,0,0,0]; //planed
Runlock = [[2],[],[],[4],[],[10,11],[],[9],[1],[],[],[]];
Rprice = [1000,2000,2500,1000,2500,1000,3000,500,700,1200,1200,600];
Ricons=[
"",
"nuclearIcon",
"",
"",
"",
"capsuleIcon",
"",
"boosterIcon",
"materialsIcon",
"",
"reentryIcon",
""
];
Rcomments=[
];
RstringsFutureTemplate = [
"Cryogenic fuels",
"Nuclear thermal rockets",
"Cryogenic storage",
"Regolith melting",
"Basalt fibres",
"Capsule development",
"Heavy duty rocketry",
"Solid rocket boosters",
"Better materials",
"Liquid fuel boosters",
"High-speed reentry",
"Eva suits",
];
RstringsTemplate = [
"Cryogenic fuels</span> Cost: 1000<br><span>Make use of more efficient fuels",
"<img src=\"images/nuclearIcon.png\"><br>Nuclear thermal rockets</span> Cost: 2000<br><span>(Protip: try to not make it explode)",
"Cryogenic storage</span> Cost: 2500<br><span>Allow cryogenic fuels to be used in deep space",
"Regolith melting</span> Cost: 1000<br><span>Let your base make its own building materials",
"Basalt fibres</span> Cost: 2500<br><span>Hightech stone age ahead.",
"<img src=\"images/capsuleIcon.png\"><br>Develop a human rated capsule</span> Cost: 1000<br><span>A box. With people inside.",
"Heavy duty rocketry</span> Cost: 3000<br><span>Go bigger and better",
"<img src=\"images/boosterIcon.png\"><br>Solid rocket boosters</span> Cost: 500<br><span>There is only one solution: More boosters.",
"<img src=\"images/materialsIcon.png\"><br>Better materials</span> Cost: 700<br><span>This unlocks a lot of new research.",
"Liquid fuel boosters</span> Cost: 1200<br><span>Upgrade your solid rocket boosters!",
"<img src=\"images/reentryIcon.png\"><br>High-speed reentry</span> Cost: 1200<br><span>Make it possible to return from the Moon.",
"EVA suits</span> Cost: 600<br><span>Make it possible to return from the Moon."
];
Rstrings = [];
for(var i=0;i<RstringsTemplate.length;i++){
	Rstrings.push("<span onclick=\"Rfunction("+i+")\" style=\"color: #aaaaaa\""+clickableBlue+">"+RstringsTemplate[i]+"</span>");
};
Rnotes = [];
RstringsFuture=[];
for(var i=0;i<Ricons.length;i++){
	var mogleg = "";
	if(Ricons[i] != ""){
		mogleg="<img src=\"images/"+Ricons[i]+"Green.png\">";
	};
	RstringsFuture.push(["<span onclick=\"Rfunctions("+i+")\" style=\"color: #0000ff\">"+RstringsFutureTemplate[i]+"</span> <span style=\"color: #ff0000\">"+Rprog[i]+"%</span>","<span style=\"color: #00ff00\">"+mogleg+RstringsFutureTemplate[i]+"</span>"]);
	Rnotes.push("Notification:<br><span style=\"color: #00ff20\" onclick=\"tolk('rd')\">"+RstringsFutureTemplate[i]+"</span> research is completed.");
};

Rfunction = function(id){
	if(technology[id] === 0){
		technology[id] = 1;
		budget-=Rprice[id];
		budgetFresh(-Rprice[id]);
		Rstrings[id] = RstringsFuture[id][0];
		clear();
		tolk("rd");
		science();
	};
	if(id === 1){
		nukeAccident("initi");
	};
};

printScience = function(){
	for(var i=0;i<Rstrings.length;i++){
		if(technology[i] != 3){
			simplePrint(Rstrings[i]);
		};
	};
};

//research:

science = function(){
	for(var i=0;i<technology.length;i++){
		if(technology[i] === 1){
			if(Rprog[i] === 100){
				technology[i] = 2;
				Rstrings[i] = RstringsFuture[i][1];
				note(Rnotes[i],10000);
				for(var j=0;j<Runlock[i].length;j++){
					technology[Runlock[i][j]] = 0;
				};
				updateShop();
			}
			else{
				Rstrings[i] = "<span onclick=\"Rfunction("+i+")\" style=\"color: #0000ff\">"+RstringsFutureTemplate[i]+"</span> <span style=\"color: #ff0000\">"+Rprog[i]+"%</span>";
				Rprog[i]+=2;
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
