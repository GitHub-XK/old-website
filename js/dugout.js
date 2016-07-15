var length = 50;
var width = 30;
var height = 15;
var beamDensity = 3;
var beamWidth = 0.5;
var beamHeight = 6;
var beamGap = 0.75;
var results = [];
/*
draft:
Case 1: ray hits nothing.
Case 2: ray hits top of beam, going all the way to the bottom.
Case 3: ray hits top of beam, escaping through the side of it, continuing to 1 or 5
Case 4: ray hits side of beam, going all the way to the bottom.
Case 5: ray hits side of beam, escaping through the side of it, continuing to 1 or 5
*/

sideEscape = function(){
	if(offsetZ + beamGap/velX < beamHeight){ //emitted through side
		offsetZ += beamGap/velX;
		sideHit();
	};
};

sideHit = function(){
	if(offsetZ + beamWidth/velX > beamHeight){ //escapes through bottom
	}
	else{
		way += Math.sqrt(beamWidth*beamWidth * (1 + 1/velX));
		offsetZ += beamWidth/velX;
		sideEscape();
	};
};

for(var i = 0; i<100;i++){ //do a bunch of test cases
	way = 0;
//generate random beam
	offsetX = Math.random()*(beamWidth+beamGap);
	tryAgain = true;
	while(tryAgain){
		velX = 0; //? FIXME
		velY = 0; //? FIXME
		if(height * velX < length/2 && height * velY < width/2){
			tryAgain = false;
		};
	};
	offsetZ = 0;
//
	if(offsetX < beamWidth){
		if(beamHeight*velX < beamWidth - offsetX){
			//Case 4 (complete)
			way = Math.sqrt(beamHeight * beamHeight * (velX + 1));
		}
		else{
			//Case 3 (complete)
			way += Math.sqrt((beamWidth - offsetX) * (beamWidth - offsetX) + ((beamWidth - offsetX)/velX) * ((beamWidth - offsetX)/velX));
			offsetZ = (beamWidth - offsetX)/velX;
			sideEscape();
		};
	}
	else{
		if(beamHeight*velX < beamGap - offsetX + beamWidth){
			//Case 1 (complete)
			way = 0;
		}
		else{
			//Case 4 (kinda)
			offsetZ = (beamGap - offsetX + beamWidth)/velX;
			sideHit();
		};
	};
	way = way * (Math.sqrt(1+velY*velY));
	results.push(way);
};
