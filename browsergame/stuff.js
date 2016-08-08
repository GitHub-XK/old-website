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

places = {
	LEO:{
		number:1,
		id:"LEO",
		visibleName:"Low Earth Orbit",
		string:"",
		transfer:[
			{
				target:"LTOlow",
				time:0,
				deltav:3120
			},
			{
				target:"landed",
				time:5,
				deltav:0
			}
		],
	},
	LTOlow:{
		number:0,
		id:"LTOlow",
		visibleName:"Lunar Transfer Orbit",
		string:"",
		transfer:[
			{
				target:"LEO",
				time:0,
				deltav:3120
			}
		],
		timeout:100,
		destination:"LTOmiddle"
	},
	LTOmiddle:{
		number:0,
		id:"LTOmiddle",
		visibleName:"Lunar Transfer Orbit",
		string:"",
		transfer:[],
		timeout:400,
		destination:"LTOhigh"
	},
	LTOhigh:{
		number:0,
		id:"LTOhigh",
		visibleName:"Lunar Transfer Orbit",
		string:"",
		transfer:[
			{
				target:"LMO",
				time:0,
				deltav:820
			}
		],
		timout:200,
		destination:"LTOreturn"
	},
	LTOreturn:{
		number:0,
		id:"LTOreturn",
		visibleName:"Returning from the Moon",
		string:"",
		transfer:[],
		timeout:1400,
		destination:"LTOlow"
	},
	LMO:{
		number:0,
		id:"LMO",
		visibleName:"Lunar orbit",
		string:"",
		transfer:[
			{
				target:"LTOreturn",
				time:0,
				deltav:820,
				spiralTime:200,
				spiralDeltav:1800
			},
			{
				target:"moon",
				time:10,
				deltav:1720
			}
		]
	},
	moon:{
		number:0,
		id:"moon",
		visibleName:"On the Moon",
		string:"",
		transfer:[
			{
				target:"LMO",
				time:10,
				deltav:1720
			}
		]
	},
	landed:{
		number:0,
		id:"landed",
		visibleName:"Landed",
		string:"",
		transfer:[],
		timeout:5,
		destination:"recovered"
	},
	recovered:{
		number:0,
		id:"recovered",
		visibleName:"Recovered",
		string:"",
		transfer:[],
	},
	EML1:{
		number:0,
		id:"EML1",
		visibleName:"EML1",
		string:"",
		transfer:[],
	},
	EML2:{
		number:0,
		id:"EML2",
		visibleName:"EML2",
		string:"",
		transfer:[],
	},
	list:["LEO","moon","landed","LTOlow","LTOmiddle","LTOhigh"]
};

placeF = function(place){
	places[place].string = "";
	for(var i=0;i<craft.length;i++){
		if(craft[i].location === place){
			places[place].string += "<span"+clickableBlue+"onclick=\"specificCraft("+i+")\" style=\"color:green\">\""+craft[i].visibleName+"\"</span> has ";
			if(craft[i].crew != 0){
				places[place].string += craft[i].crew+" passengers, ";
			}
			else{
				places[place].string += "no passengers, ";	
			};
/*
			if(craft[i][7]){
				places[place].string += "is transporting a "+craft[i][6]+", ";
			};
*/
			places[place].string += "and has "+craft[i].deltav+"m/s delta-v remaining.<br>"
		};
	};
	clear();
	if(places[place].string === ""){
		places[place].string = "There are currenty no spacecraft in "+places[place].visibleName;
	};
	places[place].string += "<br><br><span onclick=\"tolk('location');command='location'\" class=\"blue\""+clickableBlue+">Back</span>";
	simplePrint(places[place].string);
	printi(places[place].visibleName+":");
};

//spacecraft

craft = [
{
	id:0,
	visibleName:"Examplecraft I",
	location:"LEO",
	timeStamp:0,
	mass:8000,
	deltav:2000,
	crew:0,
	parts:[
		{visibleName:"Dummy satelitte"},
		{visibleName:"FuelTank",fuel:100,size:100},
		{visibleName:"Engine",exhaustv:3000}
	]
}
];

uniqueListing = 1;

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
{
	visibleName:"Dummy satellite",
	mass:5000,
	ready:false,
	visible:true,
	crew:0
}
];
pending = "";

pendingToggle = function(id){
	if(pendingList[id].ready){
		document.getElementById("pending"+id).style.color = "#0000b0";
		pendingList[id].ready = false;	
	}
	else{
		document.getElementById("pending"+id).style.color = "#00ff00";
		pendingList[id].ready = true;
	};
	totalMass();
};

launcherToggled = -1;
readyToLaunch = false;
launcherToggle = function(id){
	for(var i=0;i<vehicles.length;i++){
		if(vehicles[i].available){
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
		if(vehicles[id].capacity >= massToLaunch && massToLaunch > 0){
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
		if(pendingList[i].ready){
			massToLaunch += pendingList[i].mass;
		};
	};
	document.getElementById("totalMass").innerHTML = "Total mass: "+massToLaunch;
	if(launcherToggled != -1){
		if(vehicles[launcherToggled].capacity >= massToLaunch && massToLaunch > 0){
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
{
	available:true,
	visibleName:"Basic rocket",
	capacity:8000,
	cost:500,
	humanRated:false,
	safety:0.9,
	launches:0,
	parts:["Basic rocket core","Basic upper stage"]
},
{
	available:false,
	visibleName:"Better rocket",
	capacity:15000,
	cost:500,
	humanRated:false,
	safety:0.91,
	launches:0,
	parts:["Basic rocket core","Cryogenic upper stage (small)"]
}
];

updateVehicles = function(){
	for(var i=0;i<vehicles.length;i++){
		vehicles[i].available = true;
		var framhald = true;
		for(var j=0;j<vehicles[i].parts.length && framhald;j++){
			for(var k=0;k<shopList.length && framhald;k++){
				if(shopList[k] === vehicles[i].parts[j]){
					if(shopItems[k].number === 0){
						framhald = false;
						vehicles[i].available = false;
					}
					else{
						k=shopList.length;
					};
				}
				else if(k === shopList.length-1){
					framhald = false;
					vehicles[i].available = false;
				};
			};
		};
	};
};

updateShop=function(){
	storeString="";
	for(var i=0;i<shopItems.length;i++){
		if(shopItems[i].allowed === false){
			for(var j=0;j<shopItems[i].required.length && technology[shopItems[i].required[j]].status === 2;j++){
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
	required:["cryogenics"],
	cost:250,
	number:0,
	mass:15000,
	payload:false,
	crewsize:[0],
	details:"Mass: 15000<br>A small but efficient upper stage burning LH2/LOX.",
	props:{},
	icon:""
},
{
	visibleName:"Cryogenic upper stage (large)",
	allowed:false,
	required:["cryogenics","cryo2","largetech"],
	cost:750,
	number:0,
	mass:40000,
	payload:false,
	crewsize:[0],
	details:"Mass: 40000<br>",
	props:{},
	icon:""
},
{
	visibleName:"Nuclear upper stage",
	allowed:false,
	required:["cryogenics","cryo2","largetech","ntr"],
	cost:1500,
	number:0,
	mass:40000,
	payload:false,
	crewsize:[0],
	details:"Mass: 40000<br>Very efficient and mostly harmless.",
	props:{},
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
	props:{},
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
	props:{},
	icon:""
},
{
	visibleName:"Regolith melter",
	allowed:false,
	required:["rock"],
	cost:50,
	number:0,
	mass:4000,
	payload:true,
	crewsize:[0],
	details:"",
	props:{},
	icon:""
},
{
	visibleName:"Basalt fibre factory",
	allowed:false,
	required:["basalt"],
	cost:100,
	number:0,
	mass:6000,
	payload:true,
	crewsize:[0],
	details:"",
	props:{},
	icon:""
},
{
	visibleName:"Solid rocket boosters",
	allowed:false,
	required:["boosters"],
	cost:100,
	number:0,
	mass:40000,
	payload:false,
	crewsize:[0],
	details:"",
	props:{},
	icon:"images/boosterIcon"
},
{
	visibleName:"Capsule",
	allowed:false,
	required:["capsule"],
	cost:80,
	number:0,
	mass:2500,
	payload:true,
	crewsize:[1],
	details:"Mass: 3000<br>Can only carry one person.<br><span class=\"blue\">7</span> of <span class=\"blue\">10</span> monkeys recommend this product.",
	props:{},
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
	props:{},
	icon:""
},
{
	visibleName:"EVA suit",
	allowed:false,
	required:["evaSuits"],
	cost:100,
	number:0,
	mass:90,
	payload:true,
	crewsize:[1],
	details:"A suit for extra vehicular activity in space.",
	props:{},
	icon:""
},
{
	visibleName:"Lunar lander",
	allowed:false,
	required:["lander"],
	cost:1000,
	number:0,
	mass:8000,
	payload:true,
	crewsize:[1],
	details:"It probably works!",
	props:{
		fuel:4000
	},
	capacity:2000,
	icon:""
}
];

shopList = [];
for(var i = 0;i<shopItems.length;i++){
	shopList.push(shopItems[i].visibleName);
};

storeString="";

buyFromStore = function(thing){
	budget-=shopItems[thing].cost;
	budgetFresh(-shopItems[thing].cost);
	shopItems[thing].cost-=Math.floor(shopItems[thing].cost*0.01);
	shopItems[thing].number++;
	if(shopItems[thing].payload){
		pendingList.push(
			{
				visibleName:shopItems[thing].visibleName,
				mass:shopItems[thing].mass,
				ready:false,
				visible:true,
				crew:shopItems[thing].crewsize[0]
			}
		);
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
		icon:"reentryIcon",
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
	lander:{
		visibleName:"Lunar lander",
		status:3,
		price:1000,
		progress:0,
		requires:["capsule","materials"],
		comment:"Get a contractor for the lunar lander"
	},
	list:["cryogenics","ntr","cryo2","rock","basalt","capsule","largetech","boosters","materials","liquid","high","evaSuits","lander"]
};

minigame = function(){
	alert("There is no implementation of this minigame yet");
};

specificCraft = function(id){
	clear();
	craft[id].location;
	navigationString = "";
	for(var i=0;i<places[craft[id].location].transfer.length;i++){
		navigationString += "<a"+clickableBlue+" onclick=\"places[craft["+id+"].location].number--;craft["+id+"].location=places[craft["+id+"].location].transfer["+i+"].target;places[craft["+id+"].location].number++;note(craft["+id+"].visibleName+' has transfered to '+craft["+id+"].location,3000);craft["+id+"].timeStamp=now;tolk('location');command='location'\">"+places[places[craft[id].location].transfer[i].target].visibleName+"</a> <a class=\"red\">"+places[craft[id].location].transfer[i].deltav+"</a> m/s<br>";
	};
	navigationString += "<br><span>Parts:</span><br><br>";
	for(var i=0;i<craft[id].parts.length;i++){
		navigationString += craft[id].parts[i].visibleName+"<br>";
	};
	simplePrint("<p><em>\""+craft[id].visibleName+"\"</em></p><span style='color:#0000ff'>Delta-v: "+craft[id].deltav+"</span><br><span class=\"blue\">Navigation:</span><br><p id=\"navChoice\"><br>"+navigationString+"</p><br><br><a onclick=\"tolk('location');command='location'\" class=\"blue\""+clickableBlue+">Back</a>");
};

//this bit is a little fun, it generatres random names for the cosmonauts, and defaults to Mexico.

mexicanGenerator = function(){
	if(Math.random() > 0.5){
		firstName = names.mexican.male[Math.floor(Math.random()*names.mexican.male.length)];
	}
	else{
		firstName = names.mexican.female[Math.floor(Math.random()*names.mexican.female.length)];
	};
	var lastName = names.mexican.surnames[Math.floor(Math.random()*names.mexican.surnames.length)];
	return firstName +" "+ lastName;
};

names = {
	mexican:{
		female:[
"Victoria",
"Manuela",
"Teresa",
"Catarina",
"Maria",
"Consuela",
"Carmen",
"Margarita",
"Marissa",
"Ximena",
"Camila",
"Valeria",
"Daniela",
"Sofia",
"Regina",
"Renata",
"Valentina",
"Andrea",
"Natalia",
"Mariana",
"Fernanda",
"Guadelupe",
"Jimena",
"Esmeralda",
"Alejandra",
"Alondra",
"Isabella"
		],
		male:[
"Angel",
"Manuel",
"Gerardo",
"Cesar",
"Lorenzo",
"Esteban",
"Eloy",
"Cristiano",
"Ramiro",
"Juan",
"Jose",
"Mario",
"Elias",
"Rodolfo",
"Aurelio",
"Edgar",
"Omar",
"Enrique",
"Jaime",
"Julio",
"Marcos",
"Pedro",
"Rafael",
"Antonio",
"Ricardo",
"Jorge",
"Noe",
"Alfonzo",
"Moises",
"Andres",
"Nicholas",
"Roberto"
		],
		surnames:[
"Garcia",
"Garza",
"Martinez",
"Alvarez",
"Rodriguez",
"Romero",
"Lopez",
"Fernandez",
"Hernandez",
"Medina",
"Gonzales",
"Moreno",
"Perez",
"Mendoza",
"Sanchez",
"Herrera",
"Rivera",
"Soto",
"Ramirez",
"Jimenez",
"Torres",
"Vargas",
"Gonzales",
"Castro",
"Flores",
"Rodriquez",
"Diaz",
"Mendez",
"Gomez",
"Munoz",
"Ortiz",
"Santiago",
"Cruz",
"Pena",
"Morales",
"Guzman",
"Reyes",
"Salazar",
"Ramos",
"Aguilar",
"Ruiz",
"Delgado",
"Chavez",
"Valdez",
"Vasquez",
"Rios",
"Gutierrez",
"Vega",
"Castillo",
"Ortega",
"Espinoza",
"Nunez"
		]
	}
};

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
			cosmonauts.push(
				[
					mexicanGenerator(),
					2,
					"Mexican",
					Math.floor(Math.random()*20)+20,
					true,
					["Still untrained"]
				]
			);//replace with a new random recruit
		};
	};
	cosmo();
};

cosmoDetails = function(plass){
	clear();
	simplePrint("<a class=\"blue\""+clickableBlue+" onclick=\"tolk('cosmo');command='cosmo'\">Back</a>");
	printi(cosmonauts[plass][0]+"<br><br>Age: "+cosmonauts[plass][3]+"<br>Nationality: "+cosmonauts[plass][2]+"<br>Skills: "+cosmonauts[plass][5][0]);
};
