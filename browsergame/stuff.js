//stuffprops

//locations:

places = [
//["id","display",[["con1","time","instant","time","spiral"],["con2","time","instant","time","spiral"]],"time","new"]
[1,"LEO","Low Earth Orbit",[["LTOlow",0,3120],["landed",5,0]],false],		//0
[0,"LTOlow","Lunar Transfer Orbit",[["LEO",0,3120]],100,"LTOmiddle"],		//1
[0,"LTOmiddle","Lunar Transfer Orbit",[],400,"LTOhigh"],			//2
[0,"LTOhigh","Lunar Transfer Orbit",[["LMO",0,820]],200,"LTOreturn"],		//3
[0,"LTOreturn","Returning from the Moon",[],1400,"LTOlow"],			//4
[0,"LMO","Lunar orbit",[["LTOreturn",0,820,200,1800],["moon",10,1720,false]]],	//5
[0,"moon","On the Moon",[["LMO",10,1720,false],[]],false],			//6
[0,"landed","Landed",[],5,"recovered"],						//7
[0,"recovered","Recovered",[],false],						//8
[0,"EML1","EML1",[],false],							//9
[0,"EML2","EML2",[],false]							//10
];

placeLEOstring = "";
placeLEO = function(){
	placeLEOstring = "";
	for(var i=0;i<crafts.length;i++){
		if(crafts[i][1] === "LEO"){
			placeLEOstring += "<a style=\"color:green\">\""+crafts[i][0]+"\"</a> has ";
			if(crafts[i][5] != 0){
				placeLEOstring += crafts[i][5]+" passengers, ";
			}
			else{
				placeLEOstring += "no passengers, ";	
			};
			if(crafts[i][6] != false){
				placeLEOstring += "is transporting a "+crafts[i][6]+", ";
			};
			placeLEOstring += "and has "+crafts[i][4]+"m/s delta-v remaining.<br>"
		};
	};
	clear();
	if(placeLEOstring === ""){
		placeLEOstring += "There are currenty no spacecraft in low Earth orbit.";
	};
	placeLEOstring += "<br><br><a onclick=\"tolk('location');command='location'\" class=\"blue\""+clickableBlue+">Back</a>";
	simplePrint(placeLEOstring);
	printi("Low Earth orbit:");
};

placeLTOstring = "";
placeLTO = function(){
	placeLTOstring = "";
	for(var i=0;i<crafts.length;i++){
		if(crafts[i][1] === "LTOlow" | crafts[i][1] === "LTOmiddle" | crafts[i][1] === "LTOhigh"){
			placeLTOstring += "<a style=\"color:green\">\""+crafts[i][0]+"\"</a> has ";
			if(crafts[i][5] != 0){
				placeLTOstring += crafts[i][5]+" passengers, ";
			}
			else{
				placeLTOstring += "no passengers, ";
			};
			if(crafts[i][6] != false){
				placeLTOstring += "is transporting a "+crafts[i][6]+", ";
			};
			placeLTOstring += "and has "+crafts[i][4]+"m/s delta-v remaining.<br>"
		};
	};
	clear();
	if(placeLTOstring === ""){
		placeLTOstring += "There are currenty no spacecraft in lunar transfer orbit.";
	};
	placeLTOstring += "<br><br><a onclick=\"tolk('location');command='location'\" class=\"blue\""+clickableBlue+">Back</a>";
	simplePrint(placeLTOstring);
	printi("Lunar transfer orbit:");
};

placemoonstring = "";
placemoon = function(){
	placemoonstring = "";
	for(var i=0;i<crafts.length;i++){
		if(crafts[i][1] === "moon"){
			placemoonstring += "<a style=\"color:green\">\""+crafts[i][0]+"\"</a> has ";
			if(crafts[i][5] != 0){
				placemoonstring += crafts[i][5]+" passengers, ";
			}
			else{
				placemoonstring += "no passengers, ";
			};
			if(crafts[i][6] != false){
				placemoonstring += "is transporting a "+crafts[i][6]+", ";
			};
			placemoonstring += "and has "+crafts[i][4]+"m/s delta-v remaining.<br>"
		};
	};
	clear();
	if(placemoonstring === ""){
		placemoonstring += "There are currenty no spacecraft on the Moon.";
	};
	placemoonstring += "<br><br><a onclick=\"tolk('location');command='location'\" class=\"blue\""+clickableBlue+">Back</a>";
	simplePrint(placemoonstring);
	printi("On the Moon:");
};

//spacecraft

crafts = [
//[name,location,timestamp,mass,delta-v,passengers,[part id]]
["Examplecraft I","LEO",0,8000,2000,0,[0]]
];

uniqueListing = 1;

partID = [
["Dummy satelitte"]
];


//story

nukeAccident = function(id){
	if(id === "develop"){
		if(Math.random()<0.008){
			note("A minor nuclear accident happened.<br> We are using 100 from the budget to clean up the mess",10000);
			budget-=100;
			budgetFresh(-100);
		}
		else if(Math.random()<0.001){
			clear();
			command="clear";//NOP
			note("Fallout alert!",10000);
			simplePrint("<a style=\"color: #ff0000\">Big nuclear screwup!</a><br><br><a style=\"color: #0000cc\" onclick=\"nukeAccident('secret')\">Keep the accident secret</a><br><a style=\"color: #0000cc\" onclick=\"nukeAccident('clean')\">Anounce clean up</a><br><a style=\"color: #0000cc\" onclick=\"nukeAccident('stop')\">Stop the NTR program</a>");
		};
	}
	else if(id === "initi"){
		if(Math.random()<0.3){
			var choice = Math.random();
			setTimeout(function(){
			if(choice < 0.5){
				note("Some random dude says:<br>\"Radiation is scary!\"",10000);
			}
			else if(choice < 0.75){
				note("Some random guy says:<br>\"Is this safe???\"",10000);			
			}
			else{
				note("Notification:<br>A supporter retracted their funding",10000);
				budget-=150;
				setTimeout(function(){budgetFresh(-150);},1500);
			};
			},2000);
		};
	}
	else if(id === "secret"){
		alert("And you are one of the good guys? :P");//FIXME messages are not supposed to be delivered by "alert". I have to complete that notification system.
		if(Math.random() > 0.6){
			setTimout(function(){
				note("Nuclear accident uncovered. You are in trouble.",10000);
			},100000);
		};
	}
	else{
		alert("The game expected something to happen, but there seems to be no module to handle it.");
	};
};

pendingList = [
//[name,mass,launch now?,visible?]
["Dummy satellite",5000,false,true]
];
pending = "";

pendingToggle = function(id){
	if(pendingList[id][2]){
		document.getElementById("pending"+id).style.color = "#0000b0";
		pendingList[id][2] = false;	
	}
	else{
		document.getElementById("pending"+id).style.color = "#00ff00";
		pendingList[id][2] = true;
	};
	totalMass();
};

launcherToggled = -1;
readyToLaunch = false;
launcherToggle = function(id){
	for(var i=0;i<vehicles.length;i++){
		if(vehicles[i][0]){
			document.getElementById("launcher"+i).style.color = "#0000b0";
		};
	};
	if(launcherToggled === id){
		document.getElementById("launcher"+id).style.color = "#0000b0";
		launcherToggled = -1;
		readyToLaunch = false;
	}
	else{
		document.getElementById("launcher"+id).style.color = "#00ff00";
		launcherToggled = Number(id);
		if(vehicles[id][2] >= massToLaunch && massToLaunch > 0){
			readyToLaunch = true;
		}
		else{
			readyToLaunch = false;
		};
		if(readyToLaunch){
			document.getElementById("launchButton").style.color = "red";		
		}
		else{
			document.getElementById("launchButton").style.color = "#e0e0e0";		
		};
	};
};

totalMass = function(){
	massToLaunch = 0;
	for(var i=0;i<pendingList.length;i++){
		if(pendingList[i][2]){
			massToLaunch += pendingList[i][1];
		};
	};
	document.getElementById("totalMass").innerHTML = "Total mass: "+massToLaunch;
	if(launcherToggled != -1){
		if(vehicles[launcherToggled][2] >= massToLaunch && massToLaunch > 0){
			readyToLaunch = true;
		}
		else{
			readyToLaunch = false;
		};
		if(readyToLaunch){
			document.getElementById("launchButton").style.color = "red";		
		}
		else{
			document.getElementById("launchButton").style.color = "#e0e0e0";		
		};
	};
};

vehicles = [
//[availability,name,capacity,cost,human rating,safety,launches,[parts]],
[true,"Basic rocket",8000,500,false,0.9,0,[3,4]],
[false,"Better rocket",15000,500,false,0.91,0,[3,0]]
];

updateVehicles = function(){
	for(var i=0;i<vehicles.length;i++){
		vehicles[i][0] = true;
		for(var j=0;j<vehicles[i][7].length;j++){
			if(shopItems[vehicles[i][7][j]][4] === 0){
				vehicles[i][0] = false;
			};
		};
	};
};

updateShop=function(){
	storeString="";
	for(var i=0;i<shopItems.length;i++){
		if(shopItems[i][1] === false){
			for(var j=0;technology[shopItems[i][2][j]] === 2;j++){
				if(j === shopItems[i][2].length-1){
					shopItems[i][1] = true;
				};
			};
		};
		if(shopItems[i][1]){
			storeString += "<a onclick=\"buyFromStore("+i+")\""+clickableBlue+">"+shopItems[i][0]+" </a><a class=\"red\">"+shopItems[i][3]+" </a><a class=\"blue\">"+shopItems[i][4]+"</a><br>";
		};
	};
};

shopItems=[ //if you know what you are doing, you can change things in this array
//syntax: [name,allowed?,[required tech],cost,number in stock,mass,payload?]
["Cryogenic upper stage (small)",false,[0],250,0,15000,false],
["Cryogenic upper stage (large)",false,[0,2,6],750,0,40000,false],
["Nuclear upper stage",false,[0,2,6,1],1500,0,40000,false],
["Basic rocket core",true,[],250,0,100000,false],
["Basic upper stage",true,[],120,0,15000,false],
["Regolith melter",false,[3],50,0,4000,true],
["Basalt fibre factory",false,[4],100,0,6000,true],
["Solid rocket boosters",false,[7],100,0,40000,false],
["Capsule",false,[5],80,0,3000,true]
];

storeString="Implementation missing";

buyFromStore = function(thing){
	budget-=shopItems[thing][3];
	budgetFresh(-shopItems[thing][3]);
	shopItems[thing][3]-=Math.floor(shopItems[thing][3]*0.01);
	shopItems[thing][4]++;
	if(shopItems[thing][6]){
		pendingList.push([shopItems[thing][0],shopItems[thing][5],false,true]);
	};
	updateShop();
	tolk("shop");
	command="shop";
};

//tech researched

technology =[
0,//0 cryogenics
3,//1 NTR
3,//2 cryo2
0,//3 rock
3,//4 basalt
0,//5 capsule
0,//6 largetech
0,//7 boosters
0,//8 materials
3//9 liquid
];

minigame = function(){
	alert("There is no implementation of this minigame yet");
};
