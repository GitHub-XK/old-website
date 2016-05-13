//stuffprops
//engines:
engines = [
//["name","mass","exhaust","thrust"]
[],
[],
[]
];

//locations:

places = [
//["id","display",[["con1","time","instant","time","spiral"],["con2","time","instant","time","spiral"]],"time","new"]
[0,"LEO","Low Earth Orbit",[["LTOlow",0,3120],[]]],
[0,"LTOlow","Lunar Transfer Orbit",[["LEO",0,3120]],100,"LTOmiddle"],
[0,"LTOmiddle","Lunar Transfer Orbit",[],400,"LTOhigh"],
[0,"LTOhigh","Lunar Transfer Orbit",[["Lescape",0,140]],200,"LTOreturn"],
[0,"LTOreturn","Ops!",[],1400,"LTOlow"]
];

//crafts

crafts = [
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
			simplePrint("<a style=\"color: #ff0000\">Big nuclear screwup!</a><br><br><a style=\"color: #0000cc\" onclick=\"nukeAccident(\\\"secret\\\")\">Keep the accident secret</a><br><a style=\"color: #0000cc\" onclick=\"nukeAccident(\\\"clean\\\")\">Anounce clean up</a><br><a style=\"color: #0000cc\" onclick=\"nukeAccident(\\\"stop\\\")\">Stop the NTR program</a>");
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
		alert("And you are one of the good guys? :P");//FIXME
		if(Math.random() > 0.6){
			setTimout(function(){
				note("Nuclear accident uncovered. You are in trouble.",10000);
			},100000);
		};
	};
};

pendingList = [];
pending = "";

vehicles = [
//[availability,name,capacity,cost,human rating,safety,launches],
[true,"Basic rocket",8000,500,false,0.9,0]
];

updateShop=function(){
	for(var i=0;i<shopItems.length;i++){
		if(shopItems[i][1] === false){
			for(var j=0;technology[shopItems[i][2][j]];j++){
				if(j === shopitems[i][2].length-1){
					shopItems[i][1] = true;
				};
			};
		};
		if(shopItems[i][1]){
			storeString += "<a>"+shopItems[i][0]+"</a><br>";
		};
	};
};

shopItems=[
["Cryogenic upper stage",false,[0]]
];

storeString="";

//tech

technology =[
0,//cryogenics
0,//NTR
0,//cryo2
0,//rock
0,//basalt
0//capsule
];
