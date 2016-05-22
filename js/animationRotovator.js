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
