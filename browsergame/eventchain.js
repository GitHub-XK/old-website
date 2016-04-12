//eventchain
/*

<event> = function(){
  <action1>
  <action2>
  ...
  <call event>
};

logic "bombs"?

*/
place="";
success=1;
budget=1000;
storyfind = function(place){
	if(place === "build"){
		printi(command+" built!");//not really yet
	};
};

thepage = function(stuff){
	if(stuff[0] === "a"){
		if(stuff === "about"){
			simplePrint("Command that prints the credits.");
		};
	}
	else if(stuff[0] === "b"){
		if(stuff === "build"){
			simplePrint("Command to construct something<br>Syntax: build <thing>");
		};
	}
	else if(stuff[0] === "c"){
	}
	else if(stuff[0] === "d"){
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
			simplePrint("I Am So Meta Even This Acronym.");
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
	}
	else if(stuff[0] === "n"){
	}
	else if(stuff[0] === "o"){
	}
	else if(stuff[0] === "p"){
	}
	else if(stuff[0] === "q"){
	}
	else if(stuff[0] === "r"){
	}
	else if(stuff[0] === "s"){
	}
	else if(stuff[0] === "t"){
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
