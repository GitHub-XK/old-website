/*
    Copyright 2016 Sigvart Brendberg and Kim Holder
    
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

//depends on planets.js for data

idIcon = 0;

//Common operations:
rad = function(degrees){
	return degrees/180 * Math.PI;
};
toXYZ = function(long,lat){//transform coordinates from angular to cartesian
	x = Math.cos(rad(long)) * Math.cos(rad(lat)) * planets["moon"].radius;
	y = Math.sin(rad(long)) * Math.cos(rad(lat)) * planets["moon"].radius;
	z = Math.sin(rad(lat)) * planets["moon"].radius;
	return [x,y,z];
};
//main function:
rocket = function(){
	var exhaust = Number(document.getElementById("exhaustvelocityRE").value);
	var massratio = Number(document.getElementById("massratioRE").value);
	var result = Math.log(massratio) * exhaust;
	if(document.getElementById("ispcheckboxRE").checked){
		result *= planets.earth.gravity;
	};
	result = Math.round(result*100)/100;
	if(result === NaN){
		document.getElementById("moreThan").innerHTML = "";
		document.getElementById("lessThan").innerHTML = "";
	}
	else{
		document.getElementById("resultRE").innerHTML = "Delta-v: <b>" + result + " m/s</b>";
		for(var i=0;i<comparissionTable.length;i++){
			if(i){
				document.getElementById("moreThan").innerHTML = "More than "+comparissionTable[i-1][1]+" ("+comparissionTable[i-1][0]+" m/s)";
			};
			if(comparissionTable[i][0] > result){
				document.getElementById("lessThan").innerHTML = "Less than "+comparissionTable[i][1]+" ("+comparissionTable[i][0]+" m/s)";
				i=comparissionTable.length;
			}
			else if(i === comparissionTable.length-1){
				document.getElementById("lessThan").innerHTML = "";
			};
		};
	};
};
comparissionTable = [
	[140,"the delta-v of a minimal lunar capture."],
	[640,"from lunar orbit to EML1 or EML2."],
	[680,"than to escape the Moon from lunar orbit."],
	[820,"a return to Earth from lunar orbit."],
	[1720,"needed to get into orbit from the  lunar surface."],
	[3020,"from the surface of the Moon to a Mars transfer."],
	[3120,"to reach lunar transfer orbit from LEO."],
	[3600,"from the surface of Mars to orbit."],
	[9400,"required to get into orbit."],
	[11200,"Earth's escape velocity."]
];
