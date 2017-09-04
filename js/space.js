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

THIS SCRIPT IS OBSOLUTE!
The only ting of value in it are some orbital calculations to be re-implemented later

*/
var space = {
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
	delta:{//refactored, api works different
		nodeTransfer:function(place1,place2,aeroFlagg){//somewhat distracted when I wrote this, it is a little WTF. ESC-nodes only
			if(place1 === place2)return 0;
			var hirk1 = [place1];
			var hirk2 = [place2];
			for(var flagg = false;;){
				for(var i=0;i<hirk2.length;i++){
					if(hirk1[hirk1.length-1] === hirk2[i]){
						hirk2 = hirk2.slice(0,++i);
						flagg = true;
						break
					}
				};
				if(flagg)break;
				hirk2.push(space[hirk2[hirk2.length-1]].orbit.parent);
				for(var i=0;i<hirk1.length;i++){
					if(hirk2[hirk2.length-1] === hirk1[i]){
						hirk1 = hirk1.slice(0,++i);
						flagg = true;
						break
					}
				};
				if(flagg)break;
				hirk1.push(space[hirk1[hirk1.length-1]].orbit.parent);
			};
			var hirSearch = function(node){
				if(space[node].atmosphere === undefined){
					var nodeEsc = space.vEsc(
						space[node].gm,
						space[node].radius
					)
				}
				else{
					var nodeEsc = space.vEsc(
						space[node].gm,
						space[node].radius + space[node].atmosphere.heigth
					)
				};
				return Math.sqrt(
					Math.pow(
						space.vEsc(
							space[space[node].orbit.parent].gm,
							space[node].orbit.radius
						),2
					)/8
					+ nodeEsc*nodeEsc
				) - nodeEsc
			};
			var deltav = 0;
			for(var i=hirk1.length-1;--i;){
				deltav += hirSearch(hirk1.shift())
			};
			for(var i=hirk2.length-1;--i;){
				if(!aeroFlagg || space[hirk2[0]].atmosphere === undefined)deltav += hirSearch(hirk2.shift())
			};
			if(hirk2.length === 1){
				deltav += hirSearch(hirk1.shift())
			}
			else if(hirk1.length === 1 && hirk2.length === 2){//yes, this can acutally happen, consider an Earth c3=0 to deimos c3=0 transfer
				if(!aeroFlagg || space[hirk2[0]].atmosphere === undefined)deltav += hirSearch(hirk2.shift())
			}
			else{
				var maxRadius = Math.max(space[hirk2[0]].orbit.radius,space[hirk1[0]].orbit.radius);
				var minRadius = Math.min(space[hirk2[0]].orbit.radius,space[hirk1[0]].orbit.radius);
				if(!aeroFlagg || space[hirk2[0]].atmosphere === undefined){
					var nodeEsc1 = space.vEsc(
						space[hirk1[0]].gm,
						space[hirk1[0]].radius
					);
					var nodeEsc2 = space.vEsc(
						space[hirk2[0]].gm,
						space[hirk2[0]].radius
					);
					deltav += Math.min(
						hirSearch(hirk1[0]) + hirSearch(hirk2[0]),
						Math.sqrt(
							space.vElli(
								space[hirk1[1]].gm,
								space[hirk1[0]].orbit.radius,
								maxRadius,
								minRadius
							) + nodeEsc1*nodeEsc1
						)-nodeEsc1
						+ Math.sqrt(
							space.vElli(
								space[hirk1[1]].gm,
								space[hirk2[0]].orbit.radius,
								maxRadius,
								minRadius
							) + nodeEsc2*nodeEsc2
						)-nodeEsc2
					)
				}
				else{
					var nodeEsc1 = space.vEsc(
						space[hirk1[0]].gm,
						space[hirk1[0]].radius
					);
					deltav += Math.min(
						hirSearch(hirk1[0]),
						Math.sqrt(
							Math.pow(
								space.vElli(
									space[hirk1[1]].gm,space[hirk1[0]].orbit.radius,
									maxRadius,
									minRadius
								),2
							) + nodeEsc1*nodeEsc1
						) - nodeEsc1
					)
				}
			};
			return deltav
		},
		sysTransfer:function(system,location1,location2,aeroFlagg){//location can be "low","escape","surface",or the name of a satellite
			if(location1 === location2){
				return 0
			};
			if(aeroFlagg && space[system].atmosphere != undefined){
				if((location2 === "surface" || location2 === "low") && (location1 === "low" || location1 === "escape")){
					return 0;
				};
			}
			else{
				if((location1 === "surface" && location2 === "low") || (location2 === "surface" && location1 === "low")){
					return space.vCirc(space[system].gm,space[system].radius);
				};
				if((location1 === "surface" && location2 === "escape") || (location2 === "surface" && location1 === "escape")){
					return space.vEsc(space[system].gm,space[system].radius);
				};
				if((location1 === "low" && location2 === "escape") || (location2 === "low" && location1 === "escape")){
					return space.vEsc(space[system].gm,space[system].radius) * (Math.sqrt(2)-1);
				};
			};
		},
		transfer:function(system1,location1,system2,location2,aeroFlagg){//wrapper for sysTransfer and nodeTransfer
			if(system1 === system2){
				return space.delta.sysTransfer(system1,location1,location2,aeroFlagg)
			}
			else{
				space.delta.nodeTransfer(system1,system2,aeroFlagg);//possibly wrong
			};
		}
	},
	math:{
		toXYZ:function(position){//transforms from angular to cartesion coordinates. position is an object holding longitude and latitude.
			return{
				x:Math.cos(position.longitude) * Math.cos(position.latitude),
				y:Math.sin(position.longitude) * Math.cos(position.latitude),
				z:Math.sin(position.latitude)
			}
		}
	},
	orbit:{
		optimalTransfer:function(gm,origin,target){
			/*orbit object:{A:,P:,inc:,asc:,arg:}
			A and P are mandatory, inc, asc and arg are optional*/
			var deltaCost = space.vDesc(gm,origin.P,origin,A) + space.vDesc(gm,target.P,target.A);//you can always do an apoapsis bi-elliptic transfer.
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
		}
	}
}
