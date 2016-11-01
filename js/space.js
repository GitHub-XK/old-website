/*
 * The space object, a library for various calculators at moonwards.com
 * GPL notice:
 * @licstart
 *
 * Copyright (C) 2016  Sigvart Brendberg
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
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
		return Math.abs(vCirc(gm,r) - vElli(gm,r,r,R)) + Math.abs(vCirc(gm,R) - vElli(gm,R,r,R))
	},
	vCirc:function(gm,r){
		return Math.sqrt(gm/r)
	},
	vElli:function(gm,r,P,A){
		return Math.sqrt(gm*(2/r-2/(A+P)));
	},
	vEsc:function(gm,r){
		return Math.sqrt(2*gm/r)
	}
}
