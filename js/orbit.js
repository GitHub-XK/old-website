orbit = {
	speed : function(state){
		state = orbit.require(state,["radius","gm","periapsis","apoapsis"]);
		return Math.sqrt(
			state.gm * (
				2/sate.radius
				- 2/(sate.periapsis + state.apoapsis)
			)
		);
	},
	time : function(state){
		state = orbit.require(state,["gm","periapsis","apoapsis","radius"]);
		return "TODO";
	};
	angularMomentum : function(state){
		state = orbit.require(state,["gm","periapsis","apoapsis"]);
		state.radius = state.periapsis;
		return orbit.speed(state) * state.periapsis;
	},
	turnAngle : function(state){
		state = orbit.require(state,["gm","periapsis","vinf"]);
		return "TODO";
	},
	eccentricity : function(state){
		state = orbit.require(state,["periapsis","apoapsis"]);
		return (state.apoapsis - state.periapsis)/(state.apoapsis + state.periapsis);
	},
	radiusToAnomaly : function(state){
		state = orbit.require(state,["periapsis","apoapsis","radius"]);
		return Math.asin(
			(
				2*state.apoapsis*state.periapsis
				- state.radius*(state.apoapsis + state.periapsis)
			)
			/(
				state.radius*(state.apoapsis - state.periapsis)
			)
		) + Math.PI/2;
	},
	anomalyToRadius : function(state){
		state = orbit.require(state,["periapsis","apoapsis","anomaly"]);
		return 2*state.apoapsis*state.periapsis/(
			state.periapsis*(Math.cos(state.anomaly) + 1)
			- state.apoapsis*(Math.cos(state.anomaly) - 1)
		)
	},
	require : function(state,satList){
		for(var i=0;i<satList.length;i++){
			if(!state.hasOwnProperty(satList[i])){
				if(satList[i] == "gm"){
					if(state.hasOwnProperty("mass"){
						state.gm = state.mass * 6.67408e-11;
					}
					else{
						state.gm = 1;//set default
					};
				}
				else if(satList[i] == "periapsis"){};
			};
		};
		return state;
	}
};
