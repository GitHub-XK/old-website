//tolkning og rammeverdiar
customPrompt = false;
list = ["about","budget","build","clear","exit","help","info <thing>","launch","load","location","rd","save","shop"];
complete = "about<br>budget<br>build<br>clear<br>documentation<br>exit<br>help<br>info <thing><br>kim<br>launch<br>load<br>ls<br>location<br>quit<br>rd<br>save<br>shop";
tolk = function(com){
	compara = "";
	var mello = 0;
	for(i=0;i<com.length;i++){
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
	else if(com === "help"){
		helper="";
		for(i=0;i<list.length;i++){
			helper+=list[i]+"<br>";
		};
		printi(helper);
	}
	else if(com === "budget"){
		printi("Budget: "+budget);
	}
	else if(com === "about" | com === "credits"){
		clear();
		simplePrint("<img src=\"images/hoh.gif\"><a style=\"color: white\"> <i>Hoh productions</i></a>");
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
		simplePrint("<button style=\"color:#e0e0e0\" id=\"launchButton\" onclick=\"launch()\">Launch</button>");
		simplePrint(availableLaunchers);
		simplePrint("Available launchers:");
		simplePrint("<a id=\"totalMass\" class=\"red\">Total mass:</a>");
		simplePrint(pending);
		simplePrint("Pending payloads: (click to toggle)");
		totalMass();
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
	else if(com === "rd"){
			clear();
			printScience();
			simplePrint("Key: <a style=\"color: #aaaaaa\">Available</a>, <a style=\"color: #0000ff\">In development</a>, <a style=\"color: #00ff20\">Complete</a><br>=========================<br>");
			simplePrint("<b>Welcome to Research and Development!</b><br>Click to toggle different areas of research.");
	}
	else if(com === "save" && local === true){
		saveFunction(prompt("Name:"));
	}
	else if(com === "shop" | com === "store"){
		clear();
		simplePrint(storeString);
		printi("Here you can by stuff!");
	}
	else if(com === "time"){
		//filler
		printi("There is a scary counter...");
	}
	else{
		printi("Unknown command, try \"help\"");
	};
};
now = 0;
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
			budgetFresh(Math.floor(0.01*budget));
			budget += Math.floor(0.01*budget);
		};
	};
},1000);

budgetFresh = function(change){
	if(change < 0){
		document.getElementById("budget").innerHTML = "Budget: <b><a style=\"color: #ff0000\">"+budget+"</a><b> <a style=\"color: #ff0000\">"+change+"</a>";
	}
	else{
		document.getElementById("budget").innerHTML = "Budget: <b><a style=\"color: #ff0000\">"+budget+"</a><b> <a style=\"color: #00ff20\">+"+change+"</a>";
	};
	setTimeout(function(){
		document.getElementById("budget").innerHTML = "Budget: <a style=\"color: #e02200\">"+budget+"</a>";
	},500);
};
