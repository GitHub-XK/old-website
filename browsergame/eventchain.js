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
/*
	else if(stuff[0] === "f"){
	}
	else if(stuff[0] === "g"){
	}
*/
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
/*
	else if(stuff[0] === "j"){
	}
	else if(stuff[0] === "k"){
	}
*/
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
/*
	else if(stuff[0] === "o"){
	}
	else if(stuff[0] === "p"){
	}
*/
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
/*
	else if(stuff[0] === "u"){
	}
	else if(stuff[0] === "v"){
	}
	else if(stuff[0] === "w"){
	}
	else if(stuff[0] === "x"){
	}
	else if(stuff[0] === "y"){
	}
	else if(stuff[0] === "z"){
	}
*/
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

printScience = function(){
		if(technology[10] != 3){
			simplePrint(RhighString);
		};
		if(technology[6] != 3){
			simplePrint(RlargString);
		};
		if(technology[2] != 3){
			simplePrint(Rcryo2String);
		};
		if(technology[3] != 3){
			simplePrint(RrockString);
		};
		if(technology[1] != 3){
			simplePrint(RnukeString);
		};
		if(technology[0] != 3){
			simplePrint(RcryoString);
		};
		if(technology[9] != 3){
			simplePrint(RliquString);
		};
		if(technology[4] != 3){
			simplePrint(RfibrString);
		};
		if(technology[8] != 3){
			simplePrint(RmateString);
		};
		if(technology[7] != 3){
			simplePrint(RboosString);
		};
		if(technology[5] != 3){
			simplePrint(RcapsString);
		};
};

//research:

science = function(){
	if(technology[0] === 2){
		RcryoString = "<span onclick=\"Rcryo()\" style=\"color: #00ff00\">Cryogenic fuels</span>";
	}
	else if(technology[0] === 1){
		if(RcryoProg === 100){
			technology[0] = 2;
			RcryoString = "<span onclick=\"Rcryo()\" style=\"color: #00ff00\">Cryogenic fuels</span>";
			note("Notification:<br><span style=\"color: #00ff20\" onclick=\"tolk('rd')\">Cryogenic fuels</span> research is completed.",10000);
			technology[2] = 0;
			updateShop();
		}
		else{
			RcryoString = "<span onclick=\"Rcryo()\" style=\"color: #0000ff\">Cryogenic fuels</span> <span style=\"color: #ff0000\">"+RcryoProg+"%</span>";
			RcryoProg++;
		};
	};
	if(technology[1] === 2){
		RnukeString = "<span onclick=\"Rnuke()\" style=\"color: #00ff00\">Nuclear thermal rockets</span>";
	}
	else if(technology[1] === 1){
		nukeAccident("develop");
		if(RnukeProg === 100){
			technology[1] = 2;
			RnukeString = "<span onclick=\"Rnuke()\" style=\"color: #00ff00\">Nuclear thermal rockets</span>";
			note("Notification:<br><span style=\"color: #00ff20\" onclick=\"tolk('rd')\">Nuclear thermal rockets</span> research is completed.",10000);
			updateShop();
		}
		else{
			RnukeString = "<span onclick=\"Rnuke()\" style=\"color: #0000ff\">Nuclear thermal rockets</span> <span style=\"color: #ff0000\">"+RnukeProg+"%</span>";
			RnukeProg++;
		};
	};
	if(technology[2] === 2){
		Rcryo2String = "<span onclick=\"Rcryo2()\" style=\"color: #00ff00\">Cryogenic storage</span>";
	}
	else if(technology[2] === 1){
		if(Rcryo2Prog === 100){
			technology[2] = 2;
			Rcryo2String = "<span onclick=\"Rcryo2()\" style=\"color: #00ff00\">Cryogenic storage</span>";
			note("Notification:<br><span style=\"color: #00ff20\" onclick=\"tolk('rd')\">Cryogenic storage</span> research is completed.",10000);
			updateShop();
		}
		else{
			Rcryo2String = "<span onclick=\"Rcryo2()\" style=\"color: #0000ff\">Cryogenic storage</span> <span style=\"color: #ff0000\">"+Rcryo2Prog+"%</span>";
			Rcryo2Prog++;
		};
	};
	if(technology[3] === 2){
		RrockString = "<span onclick=\"Rrock()\" style=\"color: #00ff00\">Regolith melting</span>";
	}
	else if(technology[3] === 1){
		if(RrockProg === 100){
			technology[3] = 2;
			RrockString = "<span onclick=\"Rrock()\" style=\"color: #00ff00\">Regolith melting</span>";
			note("Notification:<br><span style=\"color: #00ff20\" onclick=\"tolk('rd')\">Regolith melting</span> research is completed.",10000);
			technology[4] = 0;
			updateShop();
		}
		else{
			RrockString = "<span onclick=\"Rrock()\" style=\"color: #0000ff\">Regolith melting</span> <span style=\"color: #ff0000\">"+RrockProg+"%</span>";
			RrockProg++;
		};
	};
	if(technology[4] === 2){
		RfibrString = "<span onclick=\"Rfibr()\" style=\"color: #00ff00\">Basalt fibres</span>";
	}
	else if(technology[4] === 1){
		if(RfibrProg === 100){
			technology[4] = 2;
			RfibrString = "<span onclick=\"Rfibr()\" style=\"color: #00ff00\">Basalt fibres</span>";
			note("Notification:<br><span style=\"color: #00ff20\" onclick=\"tolk('rd')\">Basalt fibres</span> research is completed.",10000);
			updateShop();
		}
		else{
			RfibrString = "<span onclick=\"Rfibr()\" style=\"color: #0000ff\">Basalt fibres</span> <span style=\"color: #ff0000\">"+RfibrProg+"%</span>";
			RfibrProg++;
		};
	};
	if(technology[5] === 2){
		RcapsString = "<span onclick=\"Rcaps()\" style=\"color: #00ff00\">Capsule development</span>";
	}
	else if(technology[5] === 1){
		if(RcapsProg === 100){
			technology[5] = 2;
			technology[10] = 0;
			RcapsString = "<span onclick=\"Rcaps()\" style=\"color: #00ff00\">Capsule development</span>";
			note("Notification:<br><span style=\"color: #00ff20\" onclick=\"tolk('rd')\">Capsule development</span> research is completed.",10000);
			updateShop();
		}
		else{
			RcapsString = "<span onclick=\"Rcaps()\" style=\"color: #0000ff\">Capsule development</span> <span style=\"color: #ff0000\">"+RcapsProg+"%</span>";
			RcapsProg++;
		};
	};
	if(technology[6] === 2){
		RlargString = "<span onclick=\"Rlarg()\" style=\"color: #00ff00\">Heavy duty rocketry</span>";
	}
	else if(technology[6] === 1){
		if(RlargProg === 100){
			technology[6] = 2;
			RlargString = "<span onclick=\"Rlarg()\" style=\"color: #00ff00\">Heavy duty rocketry</span>";
			note("Notification:<br><span style=\"color: #00ff20\" onclick=\"tolk('rd')\">Heavy duty rocketry</span> research is completed.",10000);
			updateShop();
		}
		else{
			RlargString = "<span onclick=\"Rlarg()\" style=\"color: #0000ff\">Heavy duty rocketry</span> <span style=\"color: #ff0000\">"+RlargProg+"%</span>";
			RlargProg++;
		};
	};
	if(technology[7] === 2){
		RboosString = "<span onclick=\"Rboos()\" style=\"color: #00ff00\">Solid rocket boosters</span>";
	}
	else if(technology[7] === 1){
		if(RboosProg === 100){
			technology[7] = 2;
			if(technology[8] === 2){
				technology[9] = 0;
			};
			RboosString = "<span onclick=\"Rboos()\" style=\"color: #00ff00\">Solid rocket boosters</span>";
			note("Notification:<br><span style=\"color: #00ff20\" onclick=\"tolk('rd')\">Solid rocket boosters</span> research is completed.",10000);
			updateShop();
		}
		else{
			RboosString = "<span onclick=\"Rboos()\" style=\"color: #0000ff\">Solid rocket boosters</span> <span style=\"color: #ff0000\">"+RboosProg+"%</span>";
			RboosProg+=2;
		};
	};
	if(technology[8] === 2){
		RmateString = "<span onclick=\"Rmate()\" style=\"color: #00ff00\">Better materials</span>";
	}
	else if(technology[8] === 1){
		if(RmateProg === 100){
			technology[8] = 2;
			technology[1] = 0;
			if(technology[7] === 2){
				technology[9] = 0;
			};
			RmateString = "<span onclick=\"Rmate()\" style=\"color: #00ff00\">Better materials</span>";
			note("Notification:<br><span style=\"color: #00ff20\" onclick=\"tolk('rd')\">Better materials</span> research is completed.",10000);
			updateShop();
		}
		else{
			RmateString = "<span onclick=\"Rmate()\" style=\"color: #0000ff\">Better materials</span> <span style=\"color: #ff0000\">"+RmateProg+"%</span>";
			RmateProg+=2;
		};
	};
	if(technology[9] === 2){
		RliquString = "<span onclick=\"Rliqu()\" style=\"color: #00ff00\">Liquid fuel boosters</span>";
	}
	else if(technology[9] === 1){
		if(RliquProg === 100){
			technology[9] = 2;
			RliquString = "<span onclick=\"Rliqu()\" style=\"color: #00ff00\">Liquid fuel boosters</span>";
			note("Notification:<br><span style=\"color: #00ff20\" onclick=\"tolk('rd')\">Liquid fuel boosters</span> research is completed.",10000);
			updateShop();
		}
		else{
			RliquString = "<span onclick=\"Rliqu()\" style=\"color: #0000ff\">Liquid fuel boosters</span> <span style=\"color: #ff0000\">"+RliquProg+"%</span>";
			RliquProg++;
		};
	};
	if(technology[10] === 2){
		RhighString = "<span onclick=\"Rhigh()\" style=\"color: #00ff00\">High-speed reentry</span>";
	}
	else if(technology[10] === 1){
		if(RhighProg === 100){
			technology[10] = 2;
			RhighString = "<span onclick=\"Rhigh()\" style=\"color: #00ff00\">High-speed reentry</span>";
			note("Notification:<br><span style=\"color: #00ff20\" onclick=\"tolk('rd')\">High-speed reentry</span> research is completed.",10000);
			updateShop();
		}
		else{
			RhighString = "<span onclick=\"Rhigh()\" style=\"color: #0000ff\">High-speed reentry</span> <span style=\"color: #ff0000\">"+RhighProg+"%</span>";
			RhighProg++;
		};
	};
	if(command === "rd"){
		tolk("rd");
	};
};

//research modules

RcryoProg = 0;
RcryoString = "<span onclick=\"Rcryo()\" style=\"color: #aaaaaa\""+clickableBlue+">Cryogenic fuels</span> Cost: 1000<br><span>Make use of more efficient fuels</span>";
Rcryo = function(){
	if(technology[0] === 0){
		technology[0] = 1;
		budget-=1000;
		budgetFresh(-1000);
		RcryoString = "<span onclick=\"Rcryo()\" style=\"color: #0000ff\">Cryogenic fuels</span> <span style=\"color: #ff0000\">"+RcryoProg+"%</span>";
		clear();
		tolk("rd");
	};
};

RnukeProg = 0;
RnukeString = "<span onclick=\"Rnuke()\" style=\"color: #aaaaaa\""+clickableBlue+">Nuclear thermal rockets</span> Cost: 2000<br><span>(Protip: try to not make it explode)</span>";
Rnuke = function(){
	if(technology[1] === 0){
		nukeAccident("initi");
		technology[1] = 1;
		budget-=2000;
		budgetFresh(-2000);
		RnukeString = "<span onclick=\"Rnuke()\" style=\"color: #0000ff\">Nuclear thermal rockets</span> <span style=\"color: #ff0000\">"+RnukeProg+"%</span>";
		clear();
		tolk("rd");
	};
};

Rcryo2Prog = 0;
Rcryo2String = "<span onclick=\"Rcryo2()\" style=\"color: #aaaaaa\""+clickableBlue+">Cryogenic storage</span> Cost: 2500<br><span>Allow cryogenic fuels to be used in deep space</span>";
Rcryo2 = function(){
	if(technology[2] === 0){
		technology[2] = 1;
		budget-=2500;
		budgetFresh(-2500);
		Rcryo2String = "<span onclick=\"Rcryo2()\" style=\"color: #0000ff\">Cryogenic storage</span> <span style=\"color: #ff0000\">"+Rcryo2Prog+"%</span>";
		clear();
		tolk("rd");
	};
};

RrockProg = 0;
RrockString = "<span onclick=\"Rrock()\" style=\"color: #aaaaaa\""+clickableBlue+">Regolith melting</span> Cost: 1000<br><span>Let your base make its own building materials</span>";
Rrock = function(){
	if(technology[3] === 0){
		technology[3] = 1;
		budget-=1000;
		budgetFresh(-1000);
		RrockString = "<span onclick=\"Rrock()\" style=\"color: #0000ff\">Regolith melting</span> <span style=\"color: #ff0000\">"+RrockProg+"%</span>";
		clear();
		tolk("rd");
	};
};

RfibrProg = 0;
RfibrString = "<span onclick=\"Rfibr()\" style=\"color: #aaaaaa\""+clickableBlue+">Basalt fibres</span> Cost: 2500";
Rfibr = function(){
	if(technology[4] === 0){
		technology[4] = 1;
		budget-=2500;
		budgetFresh(-2500);
		RfibrString = "<span onclick=\"Rfibr()\" style=\"color: #0000ff\">Basalt fibres</span> <span style=\"color: #ff0000\">"+RfibrProg+"%</span>";
		clear();
		tolk("rd");
	};
};

RcapsProg = 0;
RcapsString = "<span onclick=\"Rcaps()\" style=\"color: #aaaaaa\""+clickableBlue+">Develop a human rated capsule</span> Cost: 1000<br><span>A box. With people inside.</span>";
Rcaps = function(){
	if(technology[5] === 0){
		technology[5] = 1;
		budget-=1000;
		budgetFresh(-1000);
		RcapsString = "<span onclick=\"Rcaps()\" style=\"color: #0000ff\">Develop a human rated capsule</span> <span style=\"color: #ff0000\">"+RcapsProg+"%</span>";
		clear();
		tolk("rd");
	};
};

RlargProg = 0;
RlargString = "<span onclick=\"Rlarg()\" style=\"color: #aaaaaa\""+clickableBlue+">Heavy duty rocketry</span> Cost: 3000<br><span>Go bigger and better</span>";
Rlarg = function(){
	if(technology[6] === 0){
		technology[6] = 1;
		budget-=3000;
		budgetFresh(-3000);
		RlargString = "<span onclick=\"Rlarg()\" style=\"color: #0000ff\">Heavy duty rocketry</span> <span style=\"color: #ff0000\">"+RlargProg+"%</span>";
		clear();
		tolk("rd");
	};
};

RboosProg = 0;
RboosString = "<span onclick=\"Rboos()\" style=\"color: #aaaaaa\""+clickableBlue+">Solid rocket boosters</span> Cost: 500<br><span>There is only one solution: More boosters.</span>";
Rboos = function(){
	if(technology[7] === 0){
		technology[7] = 1;
		budget-=500;
		budgetFresh(-500);
		RboosString = "<span onclick=\"Rboos()\" style=\"color: #0000ff\">Solid rocket boosters</span> <span style=\"color: #ff0000\">"+RboosProg+"%</span>";
		clear();
		tolk("rd");
	};
};

RmateProg = 0;
RmateString = "<span onclick=\"Rmate()\" style=\"color: #aaaaaa\""+clickableBlue+">Better materials</span> Cost: 700<br><span>This unlocks a lot of new research.</span>";
Rmate = function(){
	if(technology[8] === 0){
		technology[8] = 1;
		budget-=700;
		budgetFresh(-700);
		RmateString = "<span onclick=\"Rmate()\" style=\"color: #0000ff\">Better materials</span> <span style=\"color: #ff0000\">"+RmateProg+"%</span>";
		clear();
		tolk("rd");
	};
};

RliquProg = 0;
RliquString = "<span onclick=\"Rliqu()\" style=\"color: #aaaaaa\""+clickableBlue+">Liquid fuel boosters</span> Cost: 1200<br><span>Upgrade your solid rocket boosters!</span>";
Rliqu = function(){
	if(technology[9] === 0){
		technology[9] = 1;
		budget-=1200;
		budgetFresh(-1200);
		RliquString = "<span onclick=\"Rliqu()\" style=\"color: #0000ff\">Liquid fuel boosters</span> <span style=\"color: #ff0000\">"+RliquProg+"%</span>";
		clear();
		tolk("rd");
	};
};

RhighProg = 0;
RhighString = "<span onclick=\"Rhigh()\" style=\"color: #aaaaaa\""+clickableBlue+">High-speed reentry</span> Cost: 1200<br><span>Make it possible to return from the Moon.</span>";
Rhigh = function(){
	if(technology[10] === 0){
		technology[10] = 1;
		budget-=1200;
		budgetFresh(-1200);
		RhighString = "<span onclick=\"Rhigh()\" style=\"color: #0000ff\">High-speed reentry</span> <span style=\"color: #ff0000\">"+RhighProg+"%</span>";
		clear();
		tolk("rd");
	};
};

//location

Hlocation = function(){
	clear();
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
				pending += "\""+clickableBlue+">"+pendingList[i][0]+". Mass = "+pendingList[i][1]+"kg</span><br>";
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
		alert("Here there is supposed to be a video or series of images of a launch.\nSorry to dissapoint you :(");//remove me
		note("The launch was successfull!",5000);
		clear();
		simplePrint("Your craft has been launched. Go to <span class=\"blue\" "+clickableBlue+" onclick=\"tolk('location');command='location'\">Locations</span> to view it in orbit, or bo back to <span class=\"blue\" "+clickableBlue+" onclick=\"tolk('launch');command='launch'\">Launch</span>.<br>(This is so far things are developed, there is now just placed a placeholder in orbit.)");
	}
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
