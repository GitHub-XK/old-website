//eventchain
/*

<event> = function(){
  <action1>
  <action2>
  ...
  <call event>
};

*/
place="";
success=1;
budget=1000;
growth = 1000;
local = true;
storyfind = function(place){
	if(place === "build"){
		printi(command+" built!");//not really buil yet
	};
};

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
			simplePrint("Role not decided yet");
		};
	}
	else if(stuff[0] === "c"){
	}
	else if(stuff[0] === "d"){
		if(stuff === "delta" | stuff === "deltav" | stuff === "delta-v" | stuff === "dv"){
			simplePrint("Litterary \"change in velocity\", the limiting property of a spacecraft<br><br>Some values (m/s):<br><br>Earth-LEO: ~9500<br>LEO-LTO: 3120<br>LTO-LunarEscape: 140<br>LunarEscape-LMO: 680<br>LMO-Moon: 1720");
		};
	}
	else if(stuff[0] === "e"){
		if(stuff === "exit"){
			simplePrint("Prints a link to exit the game.");
		};
	}
	else if(stuff[0] === "f"){
	}
	else if(stuff[0] === "g"){
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
	else if(stuff[0] === "j"){
	}
	else if(stuff[0] === "k"){
	}
	else if(stuff[0] === "l"){
		if(stuff === "launch"){
			simplePrint("Go here to launch a payload");
		};
		if(stuff === "leo"){
			simplePrint("Low Earth Orbit");
		};
		if(stuff === "location"){
			simplePrint("Overview of where your spacecraft are.");
		};
	}
	else if(stuff[0] === "m"){
		if(stuff === "moon"){
			simplePrint("<img src=\"images/moon.gif\">");
			simplePrint("All your Moon are belong to us!");
		};
	}
	else if(stuff[0] === "n"){
		if(stuff === "ntr"){
			simplePrint("Nuclear rocket engines. Has a higher Isp than chemical rockets.");
		};
	}
	else if(stuff[0] === "o"){
	}
	else if(stuff[0] === "p"){
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
	else{
		printi("That was a weird character!");
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
		if(Rcryo2State != -1){
			simplePrint(Rcryo2String);
		};
		if(RrockState != -1){
			simplePrint(RrockString);
		};
		if(RnukeState != -1){
			simplePrint(RnukeString);
		};
		if(RcryoState != -1){
			simplePrint(RcryoString);
		};
		if(RfibrState != -1){
			simplePrint(RfibrString);
		};
		if(RcapsState != -1){
			simplePrint(RcapsString);
		};
};

//research:

science = function(){
	if(RcryoState === 1){
		RcryoProg++;
		if(RcryoProg === 100){
			RcryoState = 2;
			RcryoString = "<a onclick=\"Rcryo()\" style=\"color: #00ff00\">Cryogenic fuels</a>";
			note("Notification:<br><a style=\"color: #00ff20\" onclick=\"tolk(\\\"rd\\\")\">Cryogenic fuels</a> research is completed.",10000);
			Rcryo2State = 0;
			technology[0]=true;
			updateShop();
		}
		else{
			RcryoString = "<a onclick=\"Rcryo()\" style=\"color: #0000ff\">Cryogenic fuels</a> <a style=\"color: #ff0000\">"+RcryoProg+"%</a>";
		};
	};
	if(RnukeState === 1){
		RnukeProg++;
		nukeAccident("develop");
		if(RnukeProg === 100){
			RnukeState = 2;
			RnukeString = "<a onclick=\"Rnuke()\" style=\"color: #00ff00\">Nuclear thermal rockets</a>";
			note("Notification:<br><a style=\"color: #00ff20\" onclick=\"tolk(\\\"rd\\\")\">Nuclear thermal rockets</a> research is completed.",10000);
			technology[1]=true;
			updateShop();
		}
		else{
			RnukeString = "<a onclick=\"Rnuke()\" style=\"color: #0000ff\">Nuclear thermal rockets</a> <a style=\"color: #ff0000\">"+RnukeProg+"%</a>";
		};
	};
	if(Rcryo2State === 1){
		Rcryo2Prog++;
		if(Rcryo2Prog === 100){
			Rcryo2State = 2;
			Rcryo2String = "<a onclick=\"Rcryo2()\" style=\"color: #00ff00\">Cryogenic storage</a>";
			note("Notification:<br><a style=\"color: #00ff20\" onclick=\"tolk(\\\"rd\\\")\">Cryogenic storage</a> research is completed.",10000);
			technology[3]=true;
			updateShop();
		}
		else{
			Rcryo2String = "<a onclick=\"Rcryo2()\" style=\"color: #0000ff\">Cryogenic storage</a> <a style=\"color: #ff0000\">"+Rcryo2Prog+"%</a>";
		};
	};
	if(RrockState === 1){
		RrockProg++;
		if(RrockProg === 100){
			RrockState = 2;
			RrockString = "<a onclick=\"Rrock()\" style=\"color: #00ff00\">Regolith melting</a>";
			note("Notification:<br><a style=\"color: #00ff20\" onclick=\"tolk(\\\"rd\\\")\">Regolith melting</a> research is completed.",10000);
			RfibrState = 0;
			technology[4]=true;
			updateShop();
		}
		else{
			RrockString = "<a onclick=\"Rrock()\" style=\"color: #0000ff\">Regolith melting</a> <a style=\"color: #ff0000\">"+RrockProg+"%</a>";
		};
	};
	if(RfibrState === 1){
		RfibrProg++;
		if(RfibrProg === 100){
			RfibrState = 2;
			RfibrString = "<a onclick=\"Rfibr()\" style=\"color: #00ff00\">Basalt fibre</a>";
			note("Notification:<br><a style=\"color: #00ff20\" onclick=\"tolk(\\\"rd\\\")\">Basalt fibre</a> research is completed.",10000);
			technology[5]=true;
			updateShop();
		}
		else{
			RfibrString = "<a onclick=\"Rfibr()\" style=\"color: #0000ff\">Basalt fibre</a> <a style=\"color: #ff0000\">"+RfibrProg+"%</a>";
		};
	};
	if(RcapsState === 1){
		RcapsProg++;
		if(RcapsProg === 100){
			RcapsState = 2;
			RcapsString = "<a onclick=\"Rcaps()\" style=\"color: #00ff00\">Capsule development</a>";
			note("Notification:<br><a style=\"color: #00ff20\" onclick=\"tolk(\\\"rd\\\")\">Capsule development</a> research is completed.",10000);
			technology[6]=true;
			updateShop();
		}
		else{
			RcapsString = "<a onclick=\"Rcaps()\" style=\"color: #0000ff\">Capsule development</a> <a style=\"color: #ff0000\">"+RcapsProg+"%</a>";
		};
	};
	if(command === "rd"){
		tolk("rd");
	};
};

RcryoState = 0;
RcryoProg = 0;
RcryoString = "<a onclick=\"Rcryo()\" style=\"color: #aaaaaa\">Cryogenic fuels</a> Cost: 1000";
Rcryo = function(){
	if(RcryoState === 0){
		RcryoState = 1;
		budget-=1000;
		budgetFresh(-1000);
		RcryoString = "<a onclick=\"Rcryo()\" style=\"color: #0000ff\">Cryogenic fuels</a> <a style=\"color: #ff0000\">"+RcryoProg+"%</a>";
		clear();
		tolk("rd");
	};
};

RnukeState = 0;
RnukeProg = 0;
RnukeString = "<a onclick=\"Rnuke()\" style=\"color: #aaaaaa\">Nuclear thermal rockets</a> Cost: 2000";
Rnuke = function(){
	if(RnukeState === 0){
		nukeAccident("initi");
		RnukeState = 1;
		budget-=2000;
		budgetFresh(-2000);
		RnukeString = "<a onclick=\"Rnuke()\" style=\"color: #0000ff\">Nuclear thermal rockets</a> <a style=\"color: #ff0000\">"+RnukeProg+"%</a>";
		clear();
		tolk("rd");
	};
};

RcapsState = 0;
RcapsProg = 0;
RcapsString = "<a onclick=\"Rcaps()\" style=\"color: #aaaaaa\">Develop a human rated capsule</a> Cost: 1000";
Rcaps = function(){
	if(RcapsState === 0){
		RcapsState = 1;
		budget-=1000;
		budgetFresh(-1000);
		RcapsString = "<a onclick=\"Rcaps()\" style=\"color: #0000ff\">Develop a human rated capsule</a> <a style=\"color: #ff0000\">"+RcapsProg+"%</a>";
		clear();
		tolk("rd");
	};
};

RrockState = 0;
RrockProg = 0;
RrockString = "<a onclick=\"Rrock()\" style=\"color: #aaaaaa\">Regolith melting</a> Cost: 1000";
Rrock = function(){
	if(RrockState === 0){
		RrockState = 1;
		budget-=1000;
		budgetFresh(-1000);
		RrockString = "<a onclick=\"Rrock()\" style=\"color: #0000ff\">Regolith melting</a> <a style=\"color: #ff0000\">"+RnukeProg+"%</a>";
		clear();
		tolk("rd");
	};
};

Rcryo2State = -1;
Rcryo2Prog = 0;
Rcryo2String = "<a onclick=\"Rcryo2()\" style=\"color: #aaaaaa\">Cryogenic storage</a> Cost: 2500";
Rcryo2 = function(){
	if(Rcryo2State === 0){
		Rcryo2State = 1;
		budget-=2500;
		budgetFresh(-2500);
		Rcryo2String = "<a onclick=\"Rcryo2()\" style=\"color: #0000ff\">Cryogenic storage</a> <a style=\"color: #ff0000\">"+Rcryo2Prog+"%</a>";
		clear();
		tolk("rd");
	};
};

RfibrState = -1;
RfibrProg = 0;
RfibrString = "<a onclick=\"Rfibr()\" style=\"color: #aaaaaa\">Basalt fibres</a> Cost: 2500";
Rfibr = function(){
	if(RfibrState === 0){
		RfibrState = 1;
		budget-=3000;
		budgetFresh(-3000);
		RfibrString = "<a onclick=\"Rfibr()\" style=\"color: #0000ff\">Basalt fibres</a> <a style=\"color: #ff0000\">"+RfibrProg+"%</a>";
		clear();
		tolk("rd");
	};
};

//location

Hlocation = function(){
	clear();
//	simplePrint("<a style=\"color: #0000c0\">Low Earth Orbit</a> <a style=\"color: #ff0000\">"+places[0][0]+"</a>");
	simplePrint("<a style=\"color: #0000c0\">Lunar Transfer Orbit</a> <a style=\"color: #ff0000\">"+Number(places[4][0]+places[1][0]+places[2][0]+places[3][0])+"</a>");
	simplePrint("<a style=\"color: #0000c0\">Low Earth Orbit</a> <a style=\"color: #ff0000\">"+places[0][0]+"</a>");
};

//launches
availableLaunchers = "";
listUpdate = function(){
	if(pendingList.length === 0){
		pending = "<a style=\"color: #ff0000\">No launch pending.</a>";
	}
	else{
		pending = "";
		for(i=0;i<pendingList.length;i++){
			pending += "<a style=\"color: #0000b0\">"+pendingList[i][0]+". Mass = "+pendingList[i][1]+"kg</a><br>";
		};
	};
	availableLaunchers = "";
	for(var i=0;i<vehicles.length;i++){
		availableLaunchers += "<a style=\"color:#0000ff\">\""+vehicles[i][1]+"\", ";
		if(vehicles[i][4] != true){availableLaunchers += "not "};
		availableLaunchers += "human rated. Capacity "+vehicles[i][2]+" cost "+vehicles[i][3]+"</a><br>";
	};
};