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
		}
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
		}
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
		}
	},
	hohmann:function(gm,r,R){
		return Math.abs(vCirc(gm,r) - vElli(gm,r,r,R))
			+ Math.abs(vCirc(gm,R) - vElli(gm,R,r,R))
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
		return vEsc(gm,P) - vElli(gm,P,P,A)
	},
	optimalTransfer:function(gm,origin,target){
		/*orbit object:{A:,P:,inc:,asc:,arg:}
		A and P are mandatory, inc, asc and arg are optional*/
		var deltaCost = vDesc(gm,origin.P,origin,A) + vDesc(gm,target.P,target.A);//you can always do an infinite apoapsis bi-elliptic transfer.
		if(origin === target){//sometimes, we are lucky :P
			return 0;
		};
		if(
			origin.inc === undefined ||
			target.inc == undefined ||
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
						var bitangentialCost = vElli(gm,origin.P,origin.P,target.A) - vCirc(gm,origin.P) + vElli(gm,target.A,target.P,target.A) - vElli(gm,target.A,origin.P,target.A)
					}
					else{
						var bitangentialCost = vCirc(gm,origin.P) - vElli(gm,origin.P,target.A,origin.P) - vElli(gm,target.A,target.P,target.A) + vElli(gm,target.A,target.A,origin.P)
					}
					if(bitangentialCost < deltaCost){//...unless a bi-elliptical transfer is still more efficient
						deltaCost = hohmannCost
					}
				}
			}
		}
		else{
		}
		return deltaCost
	},
	orbit:{
		/*functions for orbits a {gm:,a:,A:,P:,inc:,asc:,arg:r,v:,vP:,vA:,ano:,e:,T:}
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
