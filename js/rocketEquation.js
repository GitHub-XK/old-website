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
