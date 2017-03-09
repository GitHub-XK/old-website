engines = engines.engines;//this may look silly, but there are also stage data in the file, not used at the moment.
var change = function(target,value){
	document.getElementById(target).value = value;
};
var foundIndex = [];
var update = function(){
	foundIndex = [];
	var maxMass = Number(document.getElementById("mass").value);
	var minThrust = Number(document.getElementById("thrust").value)*1000;//kilo newtons
	var minVelocity = Number(document.getElementById("velocity").value);
	var out = "<tr><th>Name</th><th>Mass (kg)</th><th>Isp (s)</th><th>Thrust (kN)</th><th>Isp SL (s)</th><th>Thrust SL (kN)</th><th>Fuel</th><th>Oxidizer</th><th>Length (m)</th><th>Country</th></tr>";
	for(var i=0;i<engines.length;i++){
		if(
			engines[i].mass < maxMass
			&& engines[i].thrustVacuum > minThrust
			&& engines[i].isp > minVelocity
		){
			foundIndex.push(i);
			out += "<tr><td><a href='"+engines[i].source+"'>"+engines[i].name+"</a></td><td>"+engines[i].mass+"</td><td>"+engines[i].isp+"</td><td>"+engines[i].thrustVacuum/1000+"</td><td>";
			if(engines[i].ispGround){out += engines[i].ispGround};
			out += "</td><td>";
			if(engines[i].thrustGround){out += engines[i].thrustGround/1000};
			out += "</td><td>";
			if(engines[i].fuel){out += engines[i].fuel};
			out += "</td><td>";
			if(engines[i].oxidizer){out += engines[i].oxidizer};
			out += "</td><td>";
			if(engines[i].height){out += engines[i].height};
			out += "</td><td>";
			if(engines[i].country){out += engines[i].country};
			out += "</td></tr>";
		};
	};
	var warnings = "";
	if(!foundIndex.length){
		warnings = "No engines found matching the parameters";
	};
	document.getElementById("warnings").innerHTML = warnings;
	document.getElementById("list").innerHTML = out;
};
var draw = function(){
	var plotInfo = document.getElementById("plotInfo").elements;
	var plotSize = Number(plotInfo.plotSize.value);
	var plotType = Number(plotInfo.plotType.value);
	var plot = document.getElementById("plot");
	plot.width = plot.height = plotSize;
	var xaxis = [];
	var yaxis = [];
	var smallestX;
	var smallestY;
	var largestX;
	var largestY;
	var xunit;
	var yunit;
	var xlabel;
	var ylabel;
	if(plotType === 0){
		xunit = "kg";
		yunit = "N";
		xlabel = "Mass";
		ylabel = "Thrust";
		smallestX = largestX = engines[foundIndex[0]].mass;
		smallestY = largestY = engines[foundIndex[0]].thrustVacuum;
		for(var i=0;i<foundIndex.length;i++){
			xaxis.push(engines[foundIndex[i]].mass);
			yaxis.push(engines[foundIndex[i]].thrustVacuum);
		};
	}
	else if(plotType === 1){
		xunit = "kg";
		yunit = "s";
		xlabel = "Mass";
		ylabel = "Isp";
		smallestX = largestX = engines[foundIndex[0]].mass;
		smallestY = largestY = engines[foundIndex[0]].isp;
		for(var i=0;i<foundIndex.length;i++){
			xaxis.push(engines[foundIndex[i]].mass);
			yaxis.push(engines[foundIndex[i]].isp);
		};
	}
	else{
		xunit = "s";
		yunit = "N";
		xlabel = "Isp";
		ylabel = "Thrust";
		smallestX = largestX = engines[foundIndex[0]].isp;
		smallestY = largestY = engines[foundIndex[0]].thrustVacuum;
		for(var i=0;i<foundIndex.length;i++){
			xaxis.push(engines[foundIndex[i]].isp);
			yaxis.push(engines[foundIndex[i]].thrustVacuum);
		};
	};
	for(var i=1;i<xaxis.length;i++){
		if(xaxis[i] < smallestX){
			smallestX = xaxis[i];
		}
		else if(xaxis[i] > largestX){
			largestX = xaxis[i];
		};
		if(yaxis[i] < smallestY){
			smallestY = yaxis[i];
		}
		else if(yaxis[i] > largestY){
			largestY = yaxis[i];
		};
	};
	if(plotInfo.normalize.checked){
		smallestX = 0;
		smallestY = 0;
	};
	ctx = plot.getContext("2d");
	ctx.fillStyle = "#D0D0D0";
	ctx.rect(0,0,plotSize,plotSize);
	ctx.fill();
	ctx.fillStyle = "blue";
	ctx.strokeStyle = "black";
	ctx.font="10px Monospace";
	var axisMargin = 50;
	var edgeMargin = 40;
	ctx.beginPath();
	ctx.moveTo(axisMargin-5,plotSize-axisMargin);
	ctx.lineTo(plotSize-edgeMargin,plotSize-axisMargin);

	ctx.moveTo(axisMargin,plotSize-axisMargin+5);
	ctx.lineTo(axisMargin,edgeMargin);

	ctx.moveTo(axisMargin-5,edgeMargin);
	ctx.lineTo(axisMargin+5,edgeMargin);

	ctx.moveTo(plotSize-edgeMargin,plotSize-axisMargin+5);
	ctx.lineTo(plotSize-edgeMargin,plotSize-axisMargin-5);
	ctx.stroke();
	for(var i=0;i<xaxis.length;i++){
		ctx.beginPath();
		var xpos = axisMargin + (plotSize - axisMargin - edgeMargin) * (xaxis[i] - smallestX)/(largestX - smallestX);
		var ypos = plotSize-axisMargin - (plotSize - axisMargin -edgeMargin) * (yaxis[i] - smallestY)/( largestY - smallestY);
		ctx.arc(
			xpos,
			ypos,
			5,0,2*Math.PI);
		ctx.fill();
		ctx.fillText(engines[foundIndex[i]].name,xpos+10,ypos);
	};
	ctx.fillStyle = "black";
	if(largestY > 10000 && yunit === "N"){
		smallestY /= 1000;
		largestY /= 1000;
		yunit = "kN";
	}
	ctx.fillText(largestY + " " + yunit,10,35);
	ctx.fillText(smallestY + " " + yunit,10,plotSize-axisMargin-5);
	ctx.fillText(smallestX + " " + xunit,30,plotSize-axisMargin+15);
	ctx.fillText(largestX + " " + xunit,plotSize-50,plotSize-axisMargin+15);
	ctx.font="20px Monospace";
	ctx.fillText(xlabel,plotSize/2,plotSize-axisMargin+25);
	ctx.rotate(-Math.PI/2);
	ctx.fillText(ylabel,-plotSize/2,axisMargin-10);
	
};
