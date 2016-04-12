//tolkning og rammeverdiar
/*reseved words:
  Documentation sucks!
*/
customPrompt = false;
list = ["about","budget","build","clear","documentation","exit","help","info <thing>"];
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
		for (i=0;i<20;i++){
			document.getElementById("c"+i).innerHTML = "";
			c=["","","","","","","","","","","","","","","","","","","",""];
		};
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
		printi("$$$ Currently not implemented :p "); //placeholder
		printi("FIXME");
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
	else{
		printi("Unknown command, try \"help\"");
	};
};
now = 0;
times = setInterval(function(){
now++;
document.getElementById("timing").innerHTML = now;
},1000);
