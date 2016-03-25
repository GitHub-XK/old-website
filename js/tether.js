//Global stuff, here be dragons
idIcon = 0;
//A few values that are used a lot:
g = 9.80665; //m/s^2
moonRadius = 1738000; //m
moonGparameter = 4904869590000; //G*M
earthGparameter = 398600441890000; //G*m
EMdistance = 384400000;
eml1DistanceFromTheMoon = 58730214;
integralCallInitializer = function(start,end){
  var SCALEstart = start/EMdistance;
  var SCALEend = end/EMdistance;
  var jStMaSsRaTiO = moonGparameter/(moonGparameter + earthGparameter);
  var firstPoint = integralCall(SCALEstart,jStMaSsRaTiO);
  var secondPoint = integralCall(SCALEend,jStMaSsRaTiO);
  return (secondPoint - firstPoint) * (earthGparameter + moonGparameter)/EMdistance;
};
integralCall = function(dist,jst){
  return - dist*dist/2 + dist * (1 - jst) - jst/Math.abs(dist) + (1 - jst)/(-Math.abs(dist - 1));
};
tether = function(){
  var surfacecheck = document.getElementById("surface").checked;
  var eml1check = document.getElementById("eml1").checked;
  var zyloncheck = document.getElementById("zylon").checked;
  var startaltitude = Number(document.getElementById("start").value);
  var endaltitude = Number(document.getElementById("end").value);
  var strength = Number(document.getElementById("material").value);
  if(surfacecheck){
    startaltitude = moonRadius;
    document.getElementById("start").value = moonRadius/1000;
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
  }
  var SCALEstart = startaltitude/EMdistance;
  var SCALEend = endaltitude/EMdistance;
  var jStMaSsRaTiO = moonGparameter/(moonGparameter + earthGparameter);
  var firstPoint = integralCall(SCALEstart,jStMaSsRaTiO);
  var secondPoint = integralCall(SCALEend,jStMaSsRaTiO);
  var resultLE = integralCallInitializer(startaltitude,endaltitude);
  var resultLE2 = Math.pow(Math.E,resultLE/strength);
  resultLE = Math.round(resultLE*100)/100;
  resultLE2 = Math.round(resultLE2*1000)/1000;
  document.getElementById("resultLE").innerHTML = "Acceleration potential: <b>"+resultLE+"</b> Yuri";
  document.getElementById("resultLE2").innerHTML = "Taper ratio: <b>"+resultLE2+"</b>";
    if(masscheck){
    var iter = 10000 //change to taste
    var step = (endaltitude - startaltitude)/iter;
    var payloadMass = Number(document.getElementById("payloadmass").value);
    var safety = Number(document.getElementById("safety").value);
    var maxLoadCrossSectionDensity = safety*payloadMass*moonGparameter/(startaltitude * startaltitude * strength);
    var resultLE3 = 0;
    for(i = startaltitude; i < endaltitude; i += step){
      resultLE3 += step * maxLoadCrossSectionDensity * Math.pow(Math.E,integralCallInitializer(startaltitude,i)/strength);
    };
    resultLE3 = Math.round(resultLE3*100)/100;
    document.getElementById("resultLE3").innerHTML = "Elevator mass: <b>"+resultLE3+" kg</b>";
  };
};
