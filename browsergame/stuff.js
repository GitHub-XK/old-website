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

//stuffprops

//locations:

places = [
//["id","display",[["con1","time","instant","time","spiral"],["con2","time","instant","time","spiral"]],"time","new"]
[1,"LEO","Low Earth Orbit",[[1,0,3120],[7,5,0]],false],				//0
[0,"LTOlow","Lunar Transfer Orbit",[[0,0,3120]],100,"LTOmiddle"],		//1
[0,"LTOmiddle","Lunar Transfer Orbit",[],400,"LTOhigh"],			//2
[0,"LTOhigh","Lunar Transfer Orbit",[[5,0,820]],200,"LTOreturn"],		//3
[0,"LTOreturn","Returning from the Moon",[],1400,"LTOlow"],			//4
[0,"LMO","Lunar orbit",[[4,0,820,200,1800],[6,10,1720,false]],false],		//5
[0,"moon","On the Moon",[[5,10,1720,false],[]],false],				//6
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
			placeLEOstring += "<span"+clickableBlue+"onclick=\"specificCraft("+i+")\" style=\"color:green\">\""+crafts[i][0]+"\"</span> has ";
			if(crafts[i][5] != 0){
				placeLEOstring += crafts[i][5]+" passengers, ";
			}
			else{
				placeLEOstring += "no passengers, ";	
			};
			if(crafts[i][7]){
				placeLEOstring += "is transporting a "+crafts[i][6]+", ";
			};
			placeLEOstring += "and has "+crafts[i][4]+"m/s delta-v remaining.<br>"
		};
	};
	clear();
	if(placeLEOstring === ""){
		placeLEOstring += "There are currenty no spacecraft in low Earth orbit.";
	};
	placeLEOstring += "<br><br><span onclick=\"tolk('location');command='location'\" class=\"blue\""+clickableBlue+">Back</span>";
	simplePrint(placeLEOstring);
	printi("Low Earth orbit:");
};

placeLTOstring = "";
placeLTO = function(){
	placeLTOstring = "";
	for(var i=0;i<crafts.length;i++){
		if(crafts[i][1] === "LTOlow" | crafts[i][1] === "LTOmiddle" | crafts[i][1] === "LTOhigh"){
			placeLTOstring += "<a"+clickableBlue+"onclick=\"specificCraft("+i+")\" style=\"color:green\">\""+crafts[i][0]+"\"</a> has ";
			if(crafts[i][5] != 0){
				placeLTOstring += crafts[i][5]+" passengers, ";
			}
			else{
				placeLTOstring += "no passengers, ";
			};
			if(crafts[i][7]){
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

placeLMOstring = "";
placeLMO = function(){
	placeLMOstring = "";
	for(var i=0;i<crafts.length;i++){
		if(crafts[i][1] === "LMO"){
			placeLMOstring += "<a"+clickableBlue+"onclick=\"specificCraft("+i+")\" style=\"color:green\">\""+crafts[i][0]+"\"</a> has ";
			if(crafts[i][5] != 0){
				placeLMOstring += crafts[i][5]+" passengers, ";
			}
			else{
				placeLMOstring += "no passengers, ";
			};
			if(crafts[i][7]){
				placeLMOstring += "is transporting a "+crafts[i][6]+", ";
			};
			placeLMOstring += "and has "+crafts[i][4]+"m/s delta-v remaining.<br>"
		};
	};
	clear();
	if(placeLMOstring === ""){
		placeLMOstring += "There are currenty no spacecraft in lunar orbit.";
	};
	placeLMOstring += "<br><br><a onclick=\"tolk('location');command='location'\" class=\"blue\""+clickableBlue+">Back</a>";
	simplePrint(placeLMOstring);
	printi("Lunar orbit:");
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
			if(crafts[i][7]){
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

placelandedstring = "";
placelanded = function(){
	placelandedstring = "";
	for(var i=0;i<crafts.length;i++){
		if(crafts[i][1] === "landed"){
			placelandedstring += "<a style=\"color:green\">\""+crafts[i][0]+"\"</a> has ";
			if(crafts[i][5] != 0){
				placelandedstring += crafts[i][5]+" passengers, ";
			}
			else{
				placelandedstring += "no passengers, ";
			};
			if(crafts[i][7]){
				placelandedstring += "is transporting a "+crafts[i][6]+", ";
			};
			placelandedstring += "and has "+crafts[i][4]+"m/s delta-v remaining.<br>"
		};
	};
	clear();
	if(placelandedstring === ""){
		placelandedstring += "There are currenty no landed spacecraft.";
	};
	placelandedstring += "<br><br><a onclick=\"tolk('location');command='location'\" class=\"blue\""+clickableBlue+">Back</a>";
	simplePrint(placelandedstring);
	printi("Returned from space:");
};

//spacecraft

crafts = [
//[name,location,timestamp,mass,delta-v,passengers,[part id],carry things?]
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
//[name,mass,launch now?,visible?,crewnumber]
["Dummy satellite",5000,false,true,0]
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
		if(shopItems[i].allowed === false){
			for(var j=0;j<shopItems[i].required.length && technology[technology.list[shopItems[i].required[j]]].status === 2;j++){
				if(j === shopItems[i].required.length-1){
					shopItems[i].allowed = true;
				};
			};
		};
		if(shopItems[i].allowed){
			if(shopItems[i].icon != ""){
				storeString += "<img src='"+shopItems[i].icon+"Green.png' width=\"16\" height=\"16\">";
			};
			storeString += "<a onclick=\"buyFromStore("+i+")\" onmouseover=\"this.style.background='gray';document.getElementById('shopDetails').innerHTML = shopItems["+i+"].details;\" onmouseout=\"this.style.background='#000000';\">"+shopItems[i].visibleName+" </a><a class=\"red\">"+shopItems[i].cost+" </a><a class=\"blue\">"+shopItems[i].number+"</a><br>";
		};
	};
};

shopItems = [ //if you know what you are doing, you can change things in this array
{
	visibleName:"Cryogenic upper stage (small)",
	allowed:false,
	required:[0],
	cost:250,
	number:0,
	mass:15000,
	payload:false,
	crewsize:[0],
	details:"Mass: 15000<br>A small but efficient upper stage burning LH2/LOX.",
	props:[],
	icon:""
},
{
	visibleName:"Cryogenic upper stage (large)",
	allowed:false,
	required:[0,2,6],
	cost:750,
	number:0,
	mass:40000,
	payload:false,
	crewsize:[0],
	details:"Mass: 40000<br>",
	props:[],
	icon:""
},
{
	visibleName:"Nuclear upper stage",
	allowed:false,
	required:[0,2,6,1],
	cost:1500,
	number:0,
	mass:40000,
	payload:false,
	crewsize:[0],
	details:"Mass: 40000<br>Very efficient and mostly harmless.",
	props:[],
	icon:"images/nuclearIcon"
},
{
	visibleName:"Basic rocket core",
	allowed:true,
	required:[],
	cost:250,
	number:0,
	mass:100000,
	payload:false,
	crewsize:[0],
	details:"Mass: 100000<br>Well, you have to start <i>somewhere</i>.",
	props:[],
	icon:""
},
{
	visibleName:"Basic upper stage",
	allowed:true,
	required:[],
	cost:120,
	number:0,
	mass:15000,
	payload:false,
	crewsize:[0],
	details:"Mass: 15000<br>An engine attached to a fuel tank. What else do you need?",
	props:[],
	icon:""
},
{
	visibleName:"Regolith melter",
	allowed:false,
	required:[3],
	cost:50,
	number:0,
	mass:4000,
	payload:true,
	crewsize:[0],
	details:"",
	props:[],
	icon:""
},
{
	visibleName:"Basalt fibre factory",
	allowed:false,
	required:[4],
	cost:100,
	number:0,
	mass:6000,
	payload:true,
	crewsize:[0],
	details:"",
	props:[],
	icon:""
},
{
	visibleName:"Solid rocket boosters",
	allowed:false,
	required:[7],
	cost:100,
	number:0,
	mass:40000,
	payload:false,
	crewsize:[0],
	details:"",
	props:[],
	icon:"images/boosterIcon"
},
{
	visibleName:"Capsule",
	allowed:false,
	required:[5],
	cost:80,
	number:0,
	mass:2500,
	payload:true,
	crewsize:[1],
	details:"Mass: 3000<br>Can only carry one person.<br><span class=\"blue\">7</span> of <span class=\"blue\">10</span> monkeys recommend this product.",
	props:[],
	icon:"images/capsuleIcon"
},
{
	visibleName:"Grapefruit",
	allowed:true,
	required:[],
	cost:1,
	number:0,
	mass:0.3,
	payload:true,
	crewsize:[0],
	details:"A grapefruit specifically developed for use in space.",
	props:[],
	icon:""
},
{
	visibleName:"EVA suit",
	allowed:false,
	required:[11],
	cost:100,
	number:0,
	mass:90,
	payload:true,
	crewsize:[1],
	details:"A suit for extra vehicular activity in space.",
	props:[],
	icon:""
}
];

storeString="";

buyFromStore = function(thing){
	budget-=shopItems[thing].cost;
	budgetFresh(-shopItems[thing].cost);
	shopItems[thing].cost-=Math.floor(shopItems[thing].cost*0.01);
	shopItems[thing].number++;
	if(shopItems[thing].payload){
		pendingList.push([shopItems[thing].visibleName,shopItems[thing].mass,false,true,shopItems[thing].crewsize[0]]);
	};
	updateShop();
	clear();
	simplePrint("<span id=\"shopDetails\"></span>");
	simplePrint(storeString);
	simplePrint("Here you can by stuff!");
	command="shop";
};

technology = {
	cryogenics:{
		visibleName:"Cryogenic fuels",
		status:0,
		icon:"cryogenicsIcon",
		price:1000,
		progress:0,
		comment:"Make use of more efficient fuels"
	},
	ntr:{
		visibleName:"Nuclear thermal rockets",
		status:3,
		icon:"nuclearIcon",
		price:2000,
		progress:0,
		requires:["materials","cryogenics"],
		comment:"(Protip: try to not make it explode)"
	},
	cryo2:{
		visibleName:"Cryogenic storage",
		status:3,
		price:2500,
		progress:0,
		requires:["cryogenics"],
		comment:"Allow cryogenic fuels to be used in deep space"
	},
	rock:{
		visibleName:"Regolith melting",
		status:0,
		price:1000,
		progress:0,
		comment:"Let your base make its own building materials"
	},
	basalt:{
		visibleName:"Basalt fibres",
		status:3,
		price:2500,
		progress:0,
		requires:["rock"],
		comment:"Hightech stone age ahead."
	},
	capsule:{
		visibleName:"Capsule development",
		status:0,
		icon:"capsuleIcon",
		price:1000,
		progress:0,
		comment:"A box. With people inside."
	},
	largetech:{
		visibleName:"Heavy duty rocketry",
		status:0,
		price:3000,
		progress:0,
		requires:["materials"],
		comment:"Go bigger and better"
	},
	boosters:{
		visibleName:"Solid rocket boosters",
		status:0,
		icon:"boosterIcon",
		price:500,
		progress:0,
		comment:"There is only one solution: More boosters."
	},
	materials:{
		visibleName:"Better materials",
		status:0,
		price:700,
		progress:0,
		comment:"This unlocks a lot of new research."
	},
	liquid:{
		visibleName:"Liquid fuel boosters",
		status:3,
		price:1200,
		progress:0,
		requires:["boosters"],
		comment:"Upgrade your solid rocket boosters!"
	},
	high:{
		visibleName:"High-speed reentry",
		status:3,
		icon:"reentryIcon"
		price:1200,
		progress:0,
		requires:["capsule"],
		comment:"Make it possible to return from the Moon."
	},
	evaSuits:{
		visibleName:"Eva suits",
		status:3,
		price:600,
		progress:0,
		requires:["capsule"],
		comment:"AKA capsule for one person"
	},
	list:["cryogenics","ntr","cryo2","rock","basalt","capsule","largetech","boosters","materials","liquid","high","evaSuits"]
};

minigame = function(){
	alert("There is no implementation of this minigame yet");
};

specificCraft = function(id){
	speci = id; //needs a global reference to interact with DOM
	clear();
	tmpPlace = crafts[id][1];
	tmpPlace2 = -1;
	for(var i=0;i<places.length;i++){
		if(tmpPlace === places[i][1]){
			tmpPlace2 = i;
		};
	};
	navigationString = "";
	for(var i=0;i<places[tmpPlace2][3].length;i++){
		navigationString += "<a"+clickableBlue+" onclick=\"crafts[speci][1]=places[places[tmpPlace2][3]["+i+"][0]][1];places[places[tmpPlace2][3]["+i+"][0]][0]++;places[tmpPlace2][0]--;note(crafts[speci][0]+' has transfered to '+places[places[tmpPlace2][3]["+i+"][0]][2],3000);crafts[speci][2]=now;tolk('location');command='location'\">"+places[places[tmpPlace2][3][i][0]][2] + "</a> <a class=\"red\">"+places[tmpPlace2][3][i][2]+"</a> m/s<br>";
	};
	simplePrint("<h4>\""+crafts[id][0]+"\"</h4><p>"+crafts[id][6]+"</p><br><br><a class=\"blue\">Navigation:</a><br><p id=\"navChoice\"><br>"+navigationString+"</p><br><br><a onclick=\"tolk('location');command='location'\" class=\"blue\""+clickableBlue+">Back</a>");
};

//this bit is a little fun, it generatres random names for the cosmonauts, and defaults to Mexico.

mexicanGenerator = function(){
	if(Math.random() > 0.5){
		firstName = mexicanMale[Math.floor(Math.random()*mexicanMale.length)];
	}
	else{
		firstName = mexicanFemale[Math.floor(Math.random()*mexicanFemale.length)];
	};
	var lastName = mexicanSurnames[Math.floor(Math.random()*mexicanSurnames.length)];
	return firstName +" "+ lastName;
};

mexicanFemale = ["Victoria","Manuela","Teresa","Catarina","Maria","Consuela","Carmen","Margarita","Marissa","Ximena","Camila","Valeria","Daniela","Sofia","Regina","Renata","Valentina","Andrea","Natalia","Mariana","Fernanda","Guadelupe","Jimena","Esmeralda","Alejandra","Alondra","Isabella"];

mexicanMale = ["Angel","Manuel","Gerardo","Cesar","Lorenzo","Esteban","Eloy","Cristiano","Ramiro","Juan","Jose","Mario","Elias","Rodolfo","Aurelio","Edgar","Omar","Enrique","Jaime","Julio","Marcos","Pedro","Rafael","Antonio","Ricardo","Jorge","Noe","Alfonzo","Moises","Andres","Nicholas","Roberto"];

mexicanSurnames = ["Garcia","Garza","Martinez","Alvarez","Rodriguez","Romero","Lopez","Fernandez","Hernandez","Medina","Gonzales","Moreno","Perez","Mendoza","Sanchez","Herrera","Rivera","Soto","Ramirez","Jimenez","Torres","Vargas","Gonzales","Castro","Flores","Rodriquez","Diaz","Mendez","Gomez","Munoz","Ortiz","Santiago","Cruz","Pena","Morales","Guzman","Reyes","Salazar","Ramos","Aguilar","Ruiz","Delgado","Chavez","Valdez","Vasquez","Rios","Gutierrez","Vega","Castillo","Ortega","Espinoza","Nunez"];

//cosmonauts
cosmonauts = [
//[name 0,recruitment status 1,location 2,age 3,content? 4,[skills] 5,gender 6]   (recruitment status: 0=invisible, 1=recruited, 2=recruitable, 3=dead)
];
/*
Rcosmonauts = [
];
*/

for(var i=0;i<10;i++){
	cosmonauts.push([mexicanGenerator(),2,"Mexican",Math.floor(Math.random()*20)+20,true,["Still untrained"]]); //get ten random recruits to chose among.
};
cosmo = function(){
	clear();
	cosmoString = "";
	RcosmoString = "";
	DcosmoString = "";
	cosmoHighlighting = [];
	RcosmoHighlighting = [];
	//generate lists:
	if(cosmonauts.length === 0){
		cosmoString = "No people are interested in your space program";
	}
	else{
		for(var i=0;i<cosmonauts.length;i++){
			if(cosmonauts[i][1] != 3){
				if(cosmonauts[i][1] === 2){ //test
					cosmoHighlighting.push(false);
					cosmoString += "<span"+clickableBlue+"id='cosmo"+i+"' onclick='cosmoSelectionUpdate("+i+",false)'>\""+cosmonauts[i][0]+"\"</span>, age: "+cosmonauts[i][3]+"<br>";
				}
				else{
					RcosmoHighlighting.push(false);
					RcosmoString += "<span"+clickableBlue+"id='Rcosmo"+i+"' onclick='cosmoSelectionUpdate("+i+",true)'>\""+cosmonauts[i][0]+"\"</span>, age: "+cosmonauts[i][3]+" <span style=\"color:#00ff00\""+clickableBlue+"onclick=\"cosmoDetails("+i+")\"id=\"details"+i+"\"></span><br>";
				};
			}
			else{
				DcosmoString += "<span style=\"color:#ffffff\">\""+cosmonauts[i][0]+"\", died from old age at "+cosmonauts[i][3]+".</span><br>";
			};
		};
	};
/*
	if(Rcosmonauts.length === 0){
		RcosmoString = "No people are recruited to your space program";
	}

	else{
		for(var i=0;i<Rcosmonauts.length;i++){
			if(Rcosmonauts[i][1] != 3){
				RcosmoHighlighting.push(false);
				RcosmoString += "<a"+clickableBlue+"id='Rcosmo"+i+"' onclick='cosmoSelectionUpdate("+i+",true)'>\""+Rcosmonauts[i][0]+"\"</a>, age: "+Rcosmonauts[i][3]+" <a style=\"color:#00ff00\""+clickableBlue+"onclick=\"cosmoDetails("+i+")\"id=\"details"+i+"\"></a><br>";
			};
		};
	};
*/
	simplePrint(DcosmoString);
	if(DcosmoString != ""){
		simplePrint("<a style=\"color:#ff2200\">Dead cosmonauts:</a>");
	};
	simplePrint("<a class=\"blue\""+clickableBlue+" onclick=\"recruit()\">Recruit</a>");
	simplePrint(cosmoString);
	simplePrint("<a style=\"color:#ff2200\">Available cosmonauts:</a>");
	simplePrint(RcosmoString);
	simplePrint("<a style=\"color:#ff2200\">Recruited cosmonauts:</a>");
};

cosmoSelectionUpdate = function(plass,logi){
	if(logi){
		if(RcosmoHighlighting[plass]){
			RcosmoHighlighting[plass] = false;
			document.getElementById("Rcosmo"+plass).style.color = "#FF9900";
		}
		else{
			RcosmoHighlighting[plass] = true;
			document.getElementById("Rcosmo"+plass).style.color = "#0000ff";
			document.getElementById("details"+plass).innerHTML = "show details";
		};
	}
	else{
		if(cosmoHighlighting[plass]){
			cosmoHighlighting[plass] = false;
			document.getElementById("cosmo"+plass).style.color = "#FF9900";
		}
		else{
			cosmoHighlighting[plass] = true;
			document.getElementById("cosmo"+plass).style.color = "#0000ff";
		};
	};
};

recruit = function(){
	for(var i=0;i<cosmoHighlighting.length;i++){
		if(cosmoHighlighting[i]){
			cosmonauts[i][1] = 1;
			cosmonauts.push([mexicanGenerator(),2,"Mexican",Math.floor(Math.random()*20)+20,true,["Still untrained"]]);//replace with a new random recruit
		};
	};
	cosmo();
};

cosmoDetails = function(plass){
	clear();
	simplePrint("<a class=\"blue\""+clickableBlue+" onclick=\"tolk('cosmo');command='cosmo'\">Back</a>");
	printi(cosmonauts[plass][0]+"<br><br>Age: "+cosmonauts[plass][3]+"<br>Nationality: "+cosmonauts[plass][2]+"<br>Skills: "+cosmonauts[plass][5][0]);
};
