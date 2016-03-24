payloadX = 0;
payloadY = 0;
tetherX = 0;
tetherY = 0;
time = 0;
animate = setInterval(function(){
  time+=2;
  tetherY = Math.round(28 + Math.sin(Math.PI*time/180) * 128 + Math.cos(Math.PI*time/90) * 15);
  tetherX = Math.round(256 + Math.cos(Math.PI*time/180) * 128 - Math.sin(Math.PI*time/90) * 15);
  if(time===720){time=0};
  if(time > 90 && time < 450){
    payloadY = Math.round(Math.sin(Math.PI*time/180) * 128 + Math.cos(Math.PI*time/90) * 55 - 71);
    payloadX = Math.round(256 + Math.cos(Math.PI*time/180) * 128 - Math.sin(Math.PI*time/90) * 55)
  }
  else{
    payloadX = 256;
    payloadY = 0;
  };
  document.getElementById("tether").style.transform = "rotate("+time*2+"deg)";
  document.getElementById("tether").style.marginTop = tetherY+"px";
  document.getElementById("tether").style.left = tetherX+"px";
  document.getElementById("payload").style.marginTop = payloadY+"px";
  document.getElementById("payload").style.left = payloadX+"px";
},25);
