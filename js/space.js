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
		}
		else{
		}
	},
	orbit:{
		/*functions for orbits a {gm:,a:,A:,P:,inc:,asc:,arg:r,v:,vP:,vA:,ano:}
			,where all properties are optional. The functions do as best they can.
		*/
		autocomplete:function(orbit){//deriving other properties from the existing ones.
			var def = function(test){//shorthand for testing if a property is defined
				if(test === udefined){
					return false
				}
				return true
			}
			var newOrbit = orbit;//FIXME, proper object cloning
			if(!def(orbit.a)){
				if(def(orbit.P) && def(orbit.A){
					newOrbit.a = (orbit.A + orbit.P)/2
				}
			};
			if(!def(orbit.A)){
				if(def(orbit.a) && def(orbit.P){
					newOrbit.A = 2*orbit.a - orbit.P
				}
			};
			if(!def(orbit.P)){
				if(def(orbit.a) && def(orbit.A){
					newOrbit.A = 2*orbit.a - orbit.A
				}
			};
			if(!def(orbit.v)){
				if(def(orbit.gm)){
					if(def(orbit.r)){
						if(def(orbit.a) && def(orbit.A){
							newOrbit.v = vElli(orbit.gm,orbit.r,orbit.P,orbit.A)
						}
					}
				}
			};
			return newOrbit
		}
	}
}
