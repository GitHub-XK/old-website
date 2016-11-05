/*
The space object, a library for various calculators at moonwards.com
GPL notice:
@licstart
    Copyright 2016 Sigvart Brendberg
    
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
@licend
*/
/*
Info:

DEVELOPMENT VERSION! Things may change or not work

New versions of this library are pushed all the time WITHOUT TESTING. If this version crashes, try an earlie one.

All units are metric and unprefixed, unless otherwise noted.

*/
var space = {
	earth:{
		mass:7.342e22,
		gm:3.986004418e14,
		gravity:9.807,
		radius:6371000,
		polarRadius:6356800,
		equatorRadius:6378100,
		orbit:{
			periapsis:147095000000,
			apoapsis:152100000000,
			radius:149598023000,//semi major axis
			eccentricity:0.0167086,
			period:31558150,
			speed:29780,//average
			inclination:0,//degrees
			parent:"sun"
		},
		satellites:["moon"]
	},
	mars:{
		mass:6.4171e23,
		gm:4.282837e13,
		gravity:3.711,
		radius:3389500,
		polarRadius:3376200,
		equatorRadius:3396200,
		orbit:{
			periapsis:206700000000,
			apoapsis:249200000000,
			radius:227939200000,//semi major axis
			eccentricity:0.0934,
			period:59354294,
			speed:24077,//average
			inclination:1.85,//degrees
			parent:"sun"
		},
		satellites:["phobos","deimos"]
	},
	moon:{
		mass:7.342e22,
		gm:4.9048695e12,
		gravity:1.62,
		radius:1737100,
		polarRadius:1736000,
		equatorRadius:1738100,
		orbit:{
			periapsis:362600000,
			apoapsis:405400000,
			radius:384399000,//semi major axis
			eccentricity:0.0549,
			period:2360591,
			speed:1022,//average
			inclination:5.145,//degrees
			parent:"earth"
		},
	},
	hohmann:function(gm,r,R){
		return Math.abs(space.vCirc(gm,r) - space.vElli(gm,r,r,R))
			+ Math.abs(space.vCirc(gm,R) - space.vElli(gm,R,r,R))
	},
	vCirc:function(gm,r){
		return Math.sqrt(gm/r)
	},
	vElli:function(gm,r,P,A){
		return Math.sqrt(gm*(2/r-2/(A+P)));
	},
	vEsc:function(gm,r){
		return Math.sqrt(2*gm/r)
	},
	vDesc:function(gm,P,A){
		return space.vEsc(gm,P) - space.vElli(gm,P,P,A)
	},
	delta:{//json delta-v map
		nodes:{
			earthSurface:{
				transfer:[
					{
						id:"earthLowOrbit",
						cost:9400,
						type:"high"
					}
				]
			},
			earthLowOrbit:{
				transfer:[
					{
						id:"earth",
						cost:0,
						type:"aero"
					},
					{
						id:"earth",
						cost:7780,
						type:"high"
					},
					{
						id:"earthLowOrbitStationaryOrbitTransfer",
						cost:2440,
						type:"high"
					}	
				]
			},
			earthLowOrbitStationaryOrbitTransfer:{
				transfer:[
					{
						id:"earthLowOrbit",
						cost:0,
						type:"aero"
					},
					{
						id:"earthLowOrbit",
						cost:2440,
						type:"high"
					},
					{
						id:"earthStationaryOrbit",
						cost:1470,
						type:"high"
					}	
				]	
			},
			earthStationaryOrbit:{
				transfer:[
					{
						id:"earthLowOrbitStationaryOrbitTransfer",
						cost:1470,
						type:"high"
					}
				]
			},
			earthLowOrbitMoonTransfer:{
				transfer:[
					{
						id:"earthLowOrbitStationaryOrbitTransfer",
						cost:0,
						type:"aero"
					}
				]
			}
		}
	}
	math:{
		toXYZ:function(position){//transforms from angular to cartesion coordinates. position is an object holding longitude and latitude.
			return{
				x:Math.cos(position.longitude) * Math.cos(position.latitude),
				y:Math.sin(position.longitude) * Math.cos(position.latitude),
				z:Math.sin(position.latitude)
			}
		}
	}
	orbit:{
		optimalTransfer:function(gm,origin,target){
			/*orbit object:{A:,P:,inc:,asc:,arg:}
			A and P are mandatory, inc, asc and arg are optional*/
			var deltaCost = space.vDesc(gm,origin.P,origin,A) + space.vDesc(gm,target.P,target.A);//you can always do an infinite apoapsis bi-elliptic transfer.
			if(origin === target){//sometimes, we are lucky :P
				return 0;
			};
			if(
				origin.inc === undefined ||
				target.inc === undefined ||
				(origin.inc === target.inc && origin.asc === target.asc)
			)//determine if the orbits are coplanar
			{
				if(origin.P === origin.A){//is the first orbit circular?
					if(target.P === target.A){//is the second orbit circular too? Hohmann!
						var hohmannCost = hohmann(gm,origin.P,target.P);
						if(hohmannCost < deltaCost){//...unless a bi-elliptical transfer is still more efficient
							deltaCost = hohmannCost
						}
					}
					else{//The things below may or may not fail horribly
						if(origin.P < target.A){
							var bitangentialCost = space.vElli(gm,origin.P,origin.P,target.A) - space.vCirc(gm,origin.P) + space.vElli(gm,target.A,target.P,target.A) - space.vElli(gm,target.A,origin.P,target.A)
						}
						else{
							var bitangentialCost = space.vCirc(gm,origin.P) - space.vElli(gm,origin.P,target.A,origin.P) - space.vElli(gm,target.A,target.P,target.A) + space.vElli(gm,target.A,target.A,origin.P)
						}
						if(bitangentialCost < deltaCost){//...unless a bi-elliptical transfer is still more efficient
							deltaCost = hohmannCost
						}
					}
				}
				else if(target.P === target.A){//one elliptical, one circular
						if(origin.A < target.P){
							var bitangentialCost = space.vCirc(gm,target.P) - space.vElli(gm,target.P,origin.A,target.P) + space.vElli(gm,origin.A,origin.A,target.P) - space.vElli(gm,origin.A,origin.P,origin.A)
						}
						else{
							var bitangentialCost = - space.vCirc(gm,target.P) + space.vElli(gm,target.P,target.P,origin.P) - space.vElli(gm,origin.P,target.P,origin.P) + space.vElli(gm,origin.P,origin.P,origin.A)
						}
						if(bitangentialCost < deltaCost){//...unless a bi-elliptical transfer is still more efficient
							deltaCost = hohmannCost
						}
				}
				else{
					if(
						(origin.arg === undefined && target.arg === undefined) ||
						(origin.asc != undefined && target.asc != undefined && (target.arg + target.asc === origin.arg + origin.asc))
					){//special case
						if(origin.P === target.P){//guarantied to be better than bi-elliptical
							deltaCost = Math.abs(space.vElli(gm,origin.P,origin.P,target.A) - space.vElli(gm,origin.P,origin.P,origin.A))
						}
						else if(origin.A === target.A){
							deltaCost = Math.abs(space.vElli(gm,origin.A,origin.P,origin.A) - space.vElli(gm,origin.A,target.P,origin.A))
						}
						else{
							//most likely a periapsis-apoapsis or apoapsis-periapsis solution. I have to prove that though
						}
					}
					else{
				/*what is the optimal non-bi-elliptical transfer between two coplanar ellipses?
				Is it bi-tangential? Question pending: http://space.stackexchange.com/q/16931/8693
				*/
					}
				}
			}
			else{//not coplanar
				var relativeInclination = undefined;//FIXME depends on the longitude of the ascending node
				if(origin.P === origin.A){//the first orbit is circular
					if(target.P === target.A){//both orbits are circular
						/*potential for a small delta-v saving by splitting the plane change.
						See http://space.stackexchange.com/q/12997/8693
						Below is a suboptimal strategy doing all of the plane change at periapsis
						it is often better than the bi-elliptic aproach though
						*/
						if(origin.P < target.P){
							var elliLow = space.vElli(gm,origin.P,origin.P,target.P);
							var deltLow = Math.sqrt(
								Math.pow(elliLow*Math.sin(relativeInclination),2) +
								Math.pow(elliLow*Math.cos(relativeInclination)-space.vCirc(gm,origin.P),2)
							);
							var subOptimal = space.vCirc(gm,target.P) - space.vElli(gm,target.P,origin.P,target.P) + deltaLow;
						}
						else{
							var elliLow = space.vElli(gm,target.P,target.P,origin.P);
							var deltLow = Math.sqrt(
								Math.pow(elliLow*Math.sin(relativeInclination),2) +
								Math.pow(elliLow*Math.cos(relativeInclination)-space.vCirc(gm,target.P),2)
							);
							var subOptimal = space.vCirc(gm,origin.P) - space.vElli(gm,origin.P,targer.P,origin.P) + deltaLow;
						}
						if(subOptimal < deltaCost){
							deltaCost = subOptimal
						}
					}
				}
				else if(target.P === target.A){
					//similar to the above subotimal algorithm
				}
				else{
					//attempt apoapsis-apoapsis transfer. It is usually good enogh
				}
			}
			return deltaCost
		},
		/*functions for orbits a {gm:,a:,A:,P:,inc:,asc:,arg:,r:,v:,vP:,vA:,ano:,e:,T:,vV:,vH:}
			,where all properties are optional. The functions do as best they can.
		*/
		autocomplete:function(orbit){//deriving other properties from the existing ones.
			var def = function(test){//shorthand for testing if a property is defined
				if(test === undefined){
					return false
				}
				return true
			}
			var newOrbit = JSON.parse(JSON.stringify(orbit));//object cloning
			if(!def(orbit.a)){
				if(def(orbit.P)){
					if(def(orbit.A)){
						newOrbit.a = (orbit.A + orbit.P)/2
					}
					else if(def(orbit.e)){
						newOrbit.a = orbit.P/(1-orbit.e)
					}
					else if(def(orbit.vP)){
						if(def(orbit.vA)){
							newOrbit.a = orbit.P*(1+orbit.vP/orbit.vA)/2
						}
					}
					else if(def(orbit.v)){
						if(def(orbit.r)){
							if(orbit.r === orbit.P){
								if(def(orbit.vA)){
									newOrbit.a = orbit.P*(1+orbit.v/orbit.vA)/2
								}
							}
						}
					}
				}
				else if(def(orbit.e)){
					if(def(orbit.A)){
						newOrbit.a = orbit.A/(orbit.e+1)
					}
				}
				else if(def(orbit.T)){
					if(def(orbit.gm)){
						newOrbit.a = Math.pow(orbit.gm*Math.pow(orbit.T/(2*Math.PI),2),1/3)
					}
				}
			};
			if(!def(orbit.A)){
				if(def(orbit.a) && def(orbit.P)){
					newOrbit.A = 2*orbit.a - orbit.P
				}
			};
			if(!def(orbit.P)){
				if(def(orbit.a) && def(orbit.A)){
					newOrbit.A = 2*orbit.a - orbit.A
				}
			};
			if(!def(orbit.v)){
				if(def(orbit.gm)){
					if(def(orbit.r)){
						if(def(orbit.a) && def(orbit.A)){
							newOrbit.v = vElli(orbit.gm,orbit.r,orbit.P,orbit.A)
						}
					}
				}
				else if(def(orbit.vV)){
					if(def(orbit.vH)){
						newOrbit.v = Math.sqrt(orbit.vV*orbit.vV + orbit.vH*orbit.vH)
					}
				}
			};
			if(!def(orbit.e)){
				if(def(orbit.a)){
					if(def(orbit.P)){
						newOrbit.e = (orbit.a - orbit.P)/orbit.a
					}
					else if(def(orbit.A)){
						newOrbit.e = (orbit.A - orbit.a)/orbit.a
					}
				}
				else if(def(orbit.A)){
					if(def(orbit.P)){
						newOrbit.e = (orbit.A - orbit.P)/(orbit.A + orbit.P)
					}
				}
			};
			if(!def(orbit.T)){
				if(def(orbit.gm)){
					if(def(orbit.a)){
						newOrbit.T = 2*Math.PI*Math.sqrt(orbit.a*orbit.a*orbit.a/orbit.gm)
					}
				}
			};
			if(!def(orbit.vP)){
				if(def(orbit.gm)){
					if(def(orbit.P)){
						if(def(orbit.A)){
							newOrbit.vP = Math.sqrt(orbit.gm*(2/orbit.P - 2/(orbit.P+orbit.A)))
						}
						else if(def(orbit.a)){
							newOrbit.vP = Math.sqrt(orbit.gm*(2/orbit.P - 1/orbit.a))
						}
					}
				}
				else if(def(orbit.vA)){
					if(def(orbit.P)){
						if(def(orbit.A)){
							newOrbit.vP = orbit.vA*orbit.A/orbit.P
						}
						else if(def(orbit.a)){
							newOrbit.vP = orbit.vA*(2*orbit.a-orbit.P)/orbit.P
						}
					}
				}
				else if(def(orbit.v)){
					if(def(orbit.P)){
						if(def(orbit.r)){
							newOrbit.vP = orbit.v*orbit.r/orbit.P
						}
					}
				}
			};
			if(!def(orbit.vA)){
				if(def(orbit.gm)){
					if(def(orbit.A)){
						if(def(orbit.P)){
							newOrbit.vA = Math.sqrt(orbit.gm*(2/orbit.A - 2/(orbit.P+orbit.A)))
						}
						else if(def(orbit.a)){
							newOrbit.vA = Math.sqrt(orbit.gm*(2/orbit.A - 1/orbit.a))
						}
					}
				}
			}
			return newOrbit
		},
		validate:function(orbit){
		//Check if an orbit object contains errors. Do not let your queries depend on this, but it is useful for validating input
			if(orbit.A != undefined){
				if(typeof(orbit.A) != "number"){//apoapsis must be a number
					return false
				}
				if(orbit.r != undefined){
					if(orbit.r > orbit.A){//orbital radius can not be larger than apoapsis
						return false
					}
				}
			}
			if(orbit.P != undefined){
				if(typeof(orbit.P) != "number"){//periapsis must be a number
					return false
				}
				if(orbit.A != undefined){
					if(orbit.P > orbit.A){//periapsis can not be larger than apoapsis
						return false
					}
				}
			}
			return true
		}
	}
}
