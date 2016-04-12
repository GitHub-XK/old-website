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
