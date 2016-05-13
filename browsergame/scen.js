//tolkning og rammeverdiar
/*reseved words:
  Documentation sucks! But here are some words you can not use (incomplete):

  about
  budget
  build
  c     <- I know, I know, bad habit.
  com
  compara
  hjelper
  list
  mello
  now
  place
  places
  printi
  simplePrint
  storyfind
  thepage
  times
  tolk
*/
customPrompt = false;
list = ["about","budget","build","clear","documentation","exit","help","info <thing>","load","location","rd","save"];
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
//		printi("Currently not completely implemented :p"); //placeholder
		helper="";
		for(i=0;i<list.length;i++){
			helper+=list[i]+"<br>";
		};
		printi(helper);
	}
	else if(com === "budget"){
		printi("Budget: "+budget); //placeholder
	}
	else if(com === "about" | com === "credits"){
		printi("Created by Sigvart Brendberg, 2016<br>\"My God! It is full of bugs!\"<br>\"You say good games can not be made with crappy code?\"<br>\"You are rigth!\"");
	}
	else if(com === "kim"){
		printi("Thank you for the inspiration :)");
	}
	else if(com === "build"){

		printi("Build a...");
//		customPrompt = true;
//		place = "build";
		//parameter later
	}
	else if(com === "info" | com === "i"){
		if(compara === ""){
			printi("info about...");
//			customPrompt = true;
//			place = "info";
		}
		else{
			//alert(compara);
			thepage(compara);
		};
	}
	else if(com === "documentation"){
		simplePrint("PLEASE NO!<br><br>Filler<br>Filler<br>Filler...");
	}
	else if(com === "exit" | com === "quit"){
		simplePrint("<a href=\"http://www.moonwards.com\">Exit the game and go back.</a>");//URL to main site
	}
	else if(com === "save" && local === true){
		alert("Savefiles are not implemented yet");
		localStorage.setItem(compara,"whut"); //no decided file format yet
	}
	else if(com === "launch"){
		listUpdate();
		simplePrint(availableLaunchers);
		simplePrint("Available launchers:");
		simplePrint(pending);
		simplePrint("Pending payloads:");
		printi("Welcome to mission control!");
	}
	else if(com === "load" && local === true){
		localStorage.getItem(compara);
	}
	else if(com === "location" | com === "l"){
		Hlocation();
	}
	else if(com === "man"){
		printi("Manual pages use \"info\", not \"man\".");
	}
	else if(com === "nosave"){
		local = false;
	}
	else if(com === "rd"){
			clear();
			printScience();
			simplePrint("Key: <a style=\"color: #aaaaaa\">Innactive</a>, <a style=\"color: #0000ff\">In development</a>, <a style=\"color: #00ff20\">Complete</a><br>=========================<br>");
			simplePrint("<b>Welcome to Research and Development!</b><br>Click to toggle different areas of research.");
	}
	else if(com === "shop"){
		simplePrint("No stuff implemented yet");
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
	if(now%200 ===0){
		budget += growth;
		budgetFresh(growth);
	};
	if(now%5 === 0){
		science();
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
