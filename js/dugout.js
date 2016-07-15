var length = 50;
var width = 30;
var height = 15;
var x = 0;
var y = 0;
var z = 0;
var beamDensity = 3;
var beamWidth = 0.5;
var beamHeight = 6;
var beamGap = 0.75;
var results = [];
/*
Case 1: ray hits nothing.
Case 2: ray hits top of beam, going all the way to the bottom.
Case 3: ray hits top of beam, escaping through the side of it, continuing to 1 or 5
Case 4: ray hits side of beam, going all the way to the bottom.
Case 5: ray hits side of beam, escaping through the side of it, continuing to 1 or 5
*/

for(var i = 0; i<100;i++){
	var way = 0;
//generate random beam
	var offsetX = Math.random()*(beamWidth+beamGap);
	var velX = 0; //?
	var velY = 0; //?
	var offsetZ = 0;
//
	if(offsetX < beamWidth){
		if(beamHeight*velX < beamWidth){
			way
		};
	};
	results.push(way);
};


