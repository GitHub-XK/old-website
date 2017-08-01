/*
	Copyright 2016 Sigvart Brendberg and Kim Holder

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.
	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	GNU General Public License for more details.
	You should have received a copy of the GNU General Public License
	along with this program. If not, see <http://www.gnu.org/licenses/>.
*/
//depends on planets.js for data
var idIcon = 0;
var moon = planets["moon"];
var earth= planets["earth"];
var integralCallInitializer = function(start,end){
	var EMmassRatio = moon.gm/(moon.gm + earth.gm);
	var firstPoint = integralCall(
		start/moon.orbit.semiMajor,
		EMmassRatio
	);
	var secondPoint = integralCall(
		end/moon.orbit.semiMajor,
		EMmassRatio
	);
	return (secondPoint - firstPoint)
		* (earth.gm + moon.gm)
		/ moon.orbit.semiMajor;
};
var integralCall = function(dist,jst){
	return - dist*dist/2 + dist * (1 - jst) - jst/Math.abs(dist) + (1 - jst)/(-Math.abs(dist - 1));
};
var tether = function(){
	var check = {
		surface : document.getElementById("surface").checked,
		eml1    : document.getElementById("eml1").checked,
		zylon   : document.getElementById("zylon").checked,
		mass    : document.getElementById("tethermass").checked
	};
	var startaltitude = Number(document.getElementById("start").value);
	var endaltitude   = Number(document.getElementById("end").value);
	var strength      = Number(document.getElementById("material").value);
	if(check.surface){
		startaltitude = moon.radius;
		document.getElementById("start").value = moon.radius/1000;
	}
	else{
		startaltitude *= 1000;
	};
	if(check.eml1){
		endaltitude = moon.orbit.l1Distance;
		document.getElementById("end").value = moon.orbit.l1Distance/1000;
	}
	else{
		endaltitude *= 1000;
	};
	if(check.zylon){
		strength = 3720000;
		document.getElementById("material").value = 3720000;
	};
	var resultLE = integralCallInitializer(startaltitude,endaltitude);
	var resultLE2 = Math.pow(Math.E,resultLE/strength);
	resultLE = Math.round(resultLE*100)/100;
	resultLE2 = Math.round(resultLE2*1000)/1000;
	var warnings = "";
	if(Math.abs(startaltitude) < 1737000){
		warnings += "It seems like your elevator starts inside the Moon!<br>Are you sure that is what you want? ";
	};
	if(startaltitude > endaltitude){
		warnings += "It seems like your star and end altitude values are wrong!<br>Try to flip them. ";
	};
	if(endaltitude > moon.orbit.l1Distance){
		warnings += "Your end altitude is beyond EML1!<br>If you think that will give you sensible results, you are wrong. ";
	};
	document.getElementById("resultLE").innerHTML = "Acceleration potential: <b>"+resultLE+"</b> Yuri";
	document.getElementById("resultLE2").innerHTML = "Taper ratio: <b>"+resultLE2+"</b><br>"+warnings;
	if(check.mass){
		var step = (endaltitude - startaltitude)/10000; //change to taste
		var payloadMass = Number(document.getElementById("payloadmass").value);
		var safety = Number(document.getElementById("safety").value);
		var maxLoadCrossSectionDensity = safety * payloadMass * moon.gm/(startaltitude * startaltitude * strength);
		var resultLE3 = 0;
		for(i = startaltitude; i < endaltitude; i += step){
			resultLE3 += step * maxLoadCrossSectionDensity * Math.pow(Math.E,integralCallInitializer(startaltitude,i)/strength);
		};
		resultLE3 = Math.round(resultLE3);
		document.getElementById("resultLE3").innerHTML = "Elevator mass: <b>" + resultLE3 + " kg</b>";
	};
//Draw the tether graphics
	var tetherCanvas = document.getElementById("tetherCanvas");
	var ctx = tetherCanvas.getContext("2d");
	ctx.clearRect(0,0,tetherCanvas.width,tetherCanvas.height);
	var visibleRadius = 325*moon.radius/endaltitude;
	ctx.beginPath();
	ctx.arc(50,50,visibleRadius,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle = "#D0D0D0";
	ctx.fill();
	ctx.moveTo(375,50);
	ctx.lineTo(50+325*startaltitude/endaltitude,50);
	ctx.stroke();
};
