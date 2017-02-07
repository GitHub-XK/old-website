spacecraft = {
	dock:function(core,craft){
		//how to specify connection port???? <path>
	}
}
/*
==The spacecraft format==

WARNING! THIS FORMA IS HIGHLY EXPERIMENTAL

{
	type:"",		//"craft" "module" or "list"
	id:"",		//display name
	mass:,		//total mass, including nested components
	parts:{
		type:"" //if "craft" or "module", continue the nesting
	}
ELSE
	parts:{
		type:"list",
		inline:[
		],
		ejectable:[
		],
		conenctions:[
		]
	}
}
*/
