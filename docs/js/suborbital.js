var subOrbitalCanvas = document.getElementById("subOrbitalCanvas");
var subctx = subOrbitalCanvas.getContext("2d");
var moonMap = document.getElementById("moonMap");
var longitude1 =  55;
var longitude2 = -20;
var latitude1  =  20;
var latitude2  =  60;
rad = function(degrees){
	return degrees/180 * Math.PI;
};
toXYZ = function(long,lat){//transform coordinates from angular to cartesian
	x = Math.cos(rad(long)) * Math.cos(rad(lat)) * space.moon.radius;
	y = Math.sin(rad(long)) * Math.cos(rad(lat)) * space.moon.radius;
	z = Math.sin(rad(lat)) * space.moon.radius;
	return [x,y,z];
};
subHop = function(){
	var cords1 = toXYZ(longitude1,latitude1);
	var cords2 = toXYZ(longitude2,latitude2);
	var distance = Math.sqrt(Math.pow(cords1[0] - cords2[0],2) + Math.pow(cords1[1] - cords2[1],2) + Math.pow(cords1[2] - cords2[2],2));
	var semimajor = space.moon.radius/2 + distance/4;
//output
	var totalDeltav = 2*Math.sqrt(space.moon.gm * (2/space.moon.radius - 1/semimajor));
	totalDeltav = Math.round(totalDeltav*100)/100;
	document.getElementById("resultSH").innerHTML = "Delta-v: <b>" + totalDeltav + " m/s</b> ("+Math.round((totalDeltav/3359.84)*100)+"% of an orbital mission)";
};
subDraw = function(){
	subctx.beginPath();
	subctx.drawImage(moonMap,0,0);
	subctx.strokeStyle = "#FF0000";
	subctx.fillStyle = "#0000EF";
	subctx.font = "20px Arial";
	subctx.lineWidth = 3;
	subctx.moveTo(256+256*(longitude1)/180-12,128-128*latitude1/90);
	subctx.lineTo(256+256*(longitude1)/180+12,128-128*latitude1/90);
	subctx.moveTo(256+256*(longitude1)/180,128-128*latitude1/90-12);
	subctx.lineTo(256+256*(longitude1)/180,128-128*latitude1/90+12);
	subctx.fillText(Math.round(longitude1*10)/10+"° "+Math.round(latitude1*10)/10+"°",256+256*(longitude1)/180,128-128*latitude1/90-20);
	subctx.moveTo(256+256*(longitude2)/180-12,128-128*latitude2/90);
	subctx.lineTo(256+256*(longitude2)/180+12,128-128*latitude2/90);
	subctx.moveTo(256+256*(longitude2)/180,128-128*latitude2/90-12);
	subctx.lineTo(256+256*(longitude2)/180,128-128*latitude2/90+12);
	subctx.fillText(Math.round(longitude2*10)/10+"° "+Math.round(latitude2*10)/10+"°",256+256*(longitude2)/180,128-128*latitude2/90-20);
	subctx.stroke();
};
toLongitude = function(position){
	return 180*(position-256)/256;
};
toLatitude = function(position){
	return -90*(position-128)/128;
};
subOrbitalCanvas.onmousedown = checkIfMove;
function checkIfMove(event1){
	var rect = subOrbitalCanvas.getBoundingClientRect();
	var move1Flagg = false;
	var move2Flagg = false;
	if(Math.abs(toLongitude(event1.pageX-window.pageXOffset-rect.left)-longitude1) < 20 && Math.abs(toLatitude(event1.pageY-window.pageYOffset-rect.top)-latitude1) < 20){
		move1Flagg = true;
	}
	else if(Math.abs(toLongitude(event1.pageX-window.pageXOffset-rect.left)-longitude2) < 20 && Math.abs(toLatitude(event1.pageY-window.pageYOffset-rect.top)-latitude2) < 20){
		move2Flagg = true;
	};
	if(move1Flagg || move2Flagg){
		if(move1Flagg){
			document.onmousemove = handleMouseMove1;
		}
		else{
			document.onmousemove = handleMouseMove2;
		};
		subOrbitalCanvas.onclick = fixPosition;
		function handleMouseMove1(event){
			longitude1 = toLongitude(event.pageX-window.pageXOffset-rect.left);
			latitude1 = toLatitude(event.pageY-window.pageYOffset-rect.top);
			subDraw();
			subHop();
		};
		function handleMouseMove2(event){
			longitude2 = toLongitude(event.pageX-window.pageXOffset-rect.left);
			latitude2 = toLatitude(event.pageY-window.pageYOffset-rect.top);
			subDraw();
			subHop();
		};
		function fixPosition(){
			document.onmousemove = undefined;
			subOrbitalCanvas.onclick = checkIfMove;
		};
	};
};
subDraw();
subHop();
