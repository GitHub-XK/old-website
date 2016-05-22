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

//Global stuff, here be dragons
idIcon = 0;
//A few values that are used a lot:
g = 9.80665; //m/s^2
moonRadius = 1738000; //m
moonGparameter = 4904869590000; //G*M
earthGparameter = 398600441890000; //G*m
EMdistance = 384400000;
eml1DistanceFromTheMoon = 58730214;
//Common operations:
rad = function(degrees){ //for converting to radians
  return degrees/180 * Math.PI;
};
toXYZ = function(long,lat){//transform coordinates from angular to cartesian
  x = Math.cos(rad(long)) * Math.cos(rad(lat)) * moonRadius;
  y = Math.sin(rad(long)) * Math.cos(rad(lat)) * moonRadius;
  z = Math.sin(rad(lat)) * moonRadius;
  return [x,y,z];
};
//main functions:
rocket = function(){
  var ispcheck = document.getElementById("ispcheckboxRE").checked;
  var just = 1;
  if(ispcheck){just = g};
  var exhaust = Number(document.getElementById("exhaustvelocityRE").value);
  var massratio = Number(document.getElementById("massratioRE").value);
  var result = Math.log(massratio) * exhaust * just;
  result = Math.round(result*100)/100;
  document.getElementById("resultRE").innerHTML = "Delta-v: <b>" + result + " m/s</b>";
};
