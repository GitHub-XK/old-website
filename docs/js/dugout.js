/*
 *Simulation of the radiation intensity in a beam covered dugout area.
 *
 *Disclaimer: Radiation is complicated.
 *
 *I am only using a simple model for shielding and creation of secondary radiation.
 *In reality, radiation scatters, bends and bounce around. A completely accurate model would be extremely complicated.
 *
 *The results are only giving you a general idea of what shielding helps, and what does not.
 *
 *
 *Details:
 *
 * - The metode used is a simplified form of ray tracing. This has the caveat of only giving a result for a small area instead of for a point. That is not good enough very close to the beam ceiling.
 * - The simulation is performed for the centre of a rectangular hole. This is the location in the base with the most radiation.
 *
 *
 */

//change the following parameters to taste:
//dimensions of the cuboid (in meters)
var length = 50;
var width = 30;
var height = 15;
//you are at the bottom of it, in the centre
//
var beamDensity = 3; //g/cm^3
var beamWidth = 0.5;
var beamHeight = 6;
var beamGap = 0.75;
//Do not edit after this point
var results = [];

sideEscape = function(){
	if(offsetZ + beamGap/velX < beamHeight){ //emitted from the side of a beam
		offsetZ += beamGap/velX;
		sideHit();
	};
};

sideHit = function(){//hits the side of a beam
	if(offsetZ + beamWidth/velX > beamHeight){ //escapes through the bottom of the beam
		way += Math.sqrt(beamHeight*beamHeight * (1 + velX));
	}
	else{
		way += Math.sqrt(beamWidth*beamWidth * (1 + 1/velX));
		offsetZ += beamWidth/velX;
		sideEscape();
	};
};
simnumber = 1000000;
for(var i = 0; i<simnumber;i++){ //track a lot of test rays
	way = 0;
//generate random beam
	offsetX = Math.random()*(beamWidth+beamGap);
	tryAgain = true;
	while(tryAgain){
		RA = Math.random()*Math.PI/2;
		dec = Math.asin(Math.random());
		velX = Math.sin(RA) * 1/Math.cos(dec);
		velY = Math.cos(RA) * 1/Math.cos(dec);
		if(height * velX < length/2 && height * velY < width/2){//only proceed with calculating the ray if it does not hit a wall
			tryAgain = false;
		};
	};
	offsetZ = 0;
//
	if(offsetX < beamWidth){//ray hits the top of a beam
		if(beamHeight*velX < beamWidth - offsetX){//the ray goes through the entire beam before it enters the base
			way = Math.sqrt(beamHeight * beamHeight * (velX + 1));
		}
		else{//the ray goes through the beam for a while, but then escapes out in between the beams
			way += Math.sqrt((beamWidth - offsetX) * (beamWidth - offsetX) + ((beamWidth - offsetX)/velX) * ((beamWidth - offsetX)/velX));
			offsetZ = (beamWidth - offsetX)/velX;
			sideEscape();
		};
	}
	else{
		if(beamHeight*velX < beamGap - offsetX + beamWidth){//the ray does not hit a beam at all
			way = 0;
		}
		else{//the ray goes between the beams initially, but then hits the side of one
			offsetZ = (beamGap - offsetX + beamWidth)/velX;
			sideHit();
		};
	};
	way = way * (Math.sqrt(1+velY*velY));
	results.push(way);
};
average = 0;
missing=0;
for(i=0;i<simnumber;i++){//model for amplification and reduction of radiation intensity as a function of how much materials the rays have passed through
	if(results[i]*100*beamDensity < 150){
		average += 1 + 8*results[i]*100*beamDensity/150;
	}
	else if(results[i]*100*beamDensity < 500){
		average += ((9 - 1.33) * (1 - (results[i]*100*beamDensity - 150)/500)) + 1.33;
	}
	else if(results[i]*100*beamDensity < 1000){
		average += 1.33 * (1 - (results[i]*100*beamDensity - 500)/1000);
	}
	else{
		missing++;
	};
	//alert(average);
};
average = average/simnumber;
alert("Radiation compared to no beams: "+average*100+"%");
