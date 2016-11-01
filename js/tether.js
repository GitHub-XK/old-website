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
//depends on space.js for data
var idIcon = 0;
var eml1DistanceFromTheMoon = 58730214;
var integralCallInitializer = function(start,end){
	var SCALEstart = start/space.moon.orbit.radius;
	var SCALEend = end/space.moon.orbit.radius;
	var jStMaSsRaTiO = space.moon.gm/(space.moon.gm + space.earth.gm);
	var firstPoint = integralCall(SCALEstart,jStMaSsRaTiO);
	var secondPoint = integralCall(SCALEend,jStMaSsRaTiO);
	return (secondPoint - firstPoint) * (space.earth.gm + space.moon.gm)/space.moon.orbit.radius;
};
var integralCall = function(dist,jst){
	return - dist*dist/2 + dist * (1 - jst) - jst/Math.abs(dist) + (1 - jst)/(-Math.abs(dist - 1));
};
var tether = function(){
	var surfacecheck = document.getElementById("surface").checked;
	var eml1check = document.getElementById("eml1").checked;
	var zyloncheck = document.getElementById("zylon").checked;
	var masscheck = document.getElementById("tethermass").checked;
	var startaltitude = Number(document.getElementById("start").value);
	var endaltitude = Number(document.getElementById("end").value);
	var strength = Number(document.getElementById("material").value);
	if(surfacecheck){
		startaltitude = space.moon.radius;
		document.getElementById("start").value = space.moon.radius/1000;
	}
	else{
		startaltitude = startaltitude * 1000;
	};
	if(eml1check){
		endaltitude = eml1DistanceFromTheMoon;
		document.getElementById("end").value = eml1DistanceFromTheMoon/1000;
	}
	else{
		endaltitude = endaltitude * 1000;
	};
	if(zyloncheck){
		strength = 3720000;
		document.getElementById("material").value = 3720000;
	};
	var resultLE = integralCallInitializer(startaltitude,endaltitude);
	var resultLE2 = Math.pow(Math.E,resultLE/strength);
	resultLE = Math.round(resultLE*100)/100;
	resultLE2 = Math.round(resultLE2*1000)/1000;
	var warnings = "";
	if(Math.abs(startaltitude) < 1737000){
		warnings = warnings+"It seems like your elevator starts inside the Moon! Are you sure that is what you want? ";
	};
	if(startaltitude > endaltitude){
		warnings = warnings+"It seems like your star and end altitude values are wrong! Try to flip them. ";
	};
	if(endaltitude > eml1DistanceFromTheMoon){
		warnings = warnings + "Your end altitude is beyond EML1! If you think that will give you sensible result, you are wrong. ";
	};
	document.getElementById("resultLE").innerHTML = "Acceleration potential: <b>"+resultLE+"</b> Yuri";
	document.getElementById("resultLE2").innerHTML = "Taper ratio: <b>"+resultLE2+"</b><br>"+warnings;
	if(masscheck){
		var iter = 10000 //change to taste
		var step = (endaltitude - startaltitude)/iter;
		var payloadMass = Number(document.getElementById("payloadmass").value);
		var safety = Number(document.getElementById("safety").value);
		var maxLoadCrossSectionDensity = safety*payloadMass*space.moon.gm/(startaltitude * startaltitude * strength);
		var resultLE3 = 0;
		for(i = startaltitude; i < endaltitude; i += step){
			resultLE3 += step * maxLoadCrossSectionDensity * Math.pow(Math.E,integralCallInitializer(startaltitude,i)/strength);
		};
		resultLE3 = Math.round(resultLE3);
		document.getElementById("resultLE3").innerHTML = "Elevator mass: <b>"+resultLE3+" kg</b>";
	};
//Draw the tether graphics
	var tetherCanvas = document.getElementById("tetherCanvas");
	tetherCanvas.width = tetherCanvas.width;
	var ctx = tetherCanvas.getContext("2d");
	var visibleRadius = 325*space.moon.radius/endaltitude;
	ctx.beginPath();
	ctx.arc(50,50,visibleRadius,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle = "#D0D0D0";
	ctx.fill();
	ctx.moveTo(375,50);
	ctx.lineTo(50+325*startaltitude/endaltitude,50);
	ctx.stroke();
};
