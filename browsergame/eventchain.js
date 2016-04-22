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
		if(stuff === "leo"){
			simplePrint("Low Earth Orbit");
		};
	}
	else if(stuff[0] === "m"){
		if(stuff === "moon"){
			simplePrint("<img src=\"images/moon.gif\">");
			simplePrint("All your Moon are belong to us!");
		};
	}
	else if(stuff[0] === "n"){
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
	}
	else if(stuff[0] === "s"){
		if(stuff === "short"){
			simplePrint("i for info<br>dv for delta-v");
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

note = function(text){
	document.getElementById("note").innerHTML = "Notification<br>"+text;
	setTimeout(function(){
		document.getElementById("note").innerHTML = "";
	},10000);
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
};

//research:

science = function(){
	if(RcryoState === 1){
		RcryoProg++;
		if(RcryoProg === 100){
			RcryoState = 2;
			RcryoString = "<a onclick=\"Rcryo()\" style=\"color: #00ff00\">Cryogenic fuels</a>";
			note("<a style=\"color: #00ff20\" onclick=\"tolk(\\\"rd\\\")\">Cryogenic fuels</a> research is completed.");
			Rcryo2State = 0;
		}
		else{
			RcryoString = "<a onclick=\"Rcryo()\" style=\"color: #0000ff\">Cryogenic fuels</a> <a style=\"color: #ff0000\">"+RcryoProg+"%</a>";
		};
	};
	if(RnukeState === 1){
		RnukeProg++;
		if(RnukeProg === 100){
			RnukeState = 2;
			RnukeString = "<a onclick=\"Rnuke()\" style=\"color: #00ff00\">Nuclear thermal rockets</a>";
			note("<a style=\"color: #00ff20\" onclick=\"tolk(\\\"rd\\\")\">Nuclear thermal rockets</a> research is completed.");
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
			note("<a style=\"color: #00ff20\" onclick=\"tolk(\\\"rd\\\")\">Cryogenic storage</a> research is completed.");
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
			note("<a style=\"color: #00ff20\" onclick=\"tolk(\\\"rd\\\")\">Regolith melting</a> research is completed.");
		}
		else{
			RrockString = "<a onclick=\"Rrock()\" style=\"color: #0000ff\">Regolith melting</a> <a style=\"color: #ff0000\">"+RrockProg+"%</a>";
		};
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
		RnukeState = 1;
		budget-=2000;
		budgetFresh(-2000);
		RnukeString = "<a onclick=\"Rnuke()\" style=\"color: #0000ff\">Nuclear thermal rockets</a> <a style=\"color: #ff0000\">"+RnukeProg+"%</a>";
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

