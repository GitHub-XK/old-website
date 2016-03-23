subhop = function(){
//inputs
  var longitude1 = (Number(document.getElementById("longitudeSH").value))%360; //connect to input forms or whatever
    if(longitude1 < -180){longitude1 += 360}else if(longitude1 > 180){longitude1 -= 360};
  var latitude1 = (Number(document.getElementById("latitudeSH").value))%360;
  var longitude2 = (Number(document.getElementById("destinationlongitudeSH").value))%360;
    if(longitude2 < -180){longitude2 += 360}else if(longitude2 > 180){longitude2 -= 360};
  var latitude2 = (Number(document.getElementById("destinationlatitudeSH").value))%360;
//main
  var cords1 = toXYZ(longitude1,latitude1);
  var cords2 = toXYZ(longitude2,latitude2);
  var distance = Math.sqrt(Math.pow(cords1[0] - cords2[0],2) + Math.pow(cords1[1] - cords2[1],2) + Math.pow(cords1[2] - cords2[2],2));
  var semimajor = moonRadius/2 + distance/4;
//output
  var totalDeltav = 2*Math.sqrt(moonGparameter * (2/moonRadius - 1/semimajor));
  totalDeltav = Math.round(totalDeltav*100)/100;
  document.getElementById("resultSH").innerHTML = "Delta-v: <b>" + totalDeltav + " m/s</b> ("+Math.round((totalDeltav/3359.84)*100)+"% of an orbital mission)";
//optional:  distance (not implemented)
//graphics:
  var xcoord1 = (longitude1 - 180)*256/360 + 252;
  var ycoord1 = (90 - latitude1)*128/180 - 4;
  var xcoord2 = (longitude2 - 180)*256/360 + 252;
  var ycoord2 = (90 - latitude2)*128/180 - 4;
  document.getElementById("initialicon").style.left = xcoord1+"px";
  document.getElementById("initialicon").style.top = ycoord1+"px";
  document.getElementById("destinationicon").style.left = xcoord2+"px";
  document.getElementById("destinationicon").style.top = ycoord2+"px";
};