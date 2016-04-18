//stuffprops
//engines:
engines = [
//["name","mass","exhaust","thrust"]
[],
[],
[]
];

//locations:

places = [
//["id","display",[["con1","time","instant","time","spiral"],["con2","time","instant","time","spiral"]],"time","new"]
["LEO","LEO",[["LTOlow",0,3120],[]]],
["LTOlow","LTO",[["LEO",0,3120]],100,"LTOmiddle"],
["LTOmiddle","LTO",[],400,"LTOhigh"],
["LTOhigh","LTO",[["Lescape",0,140]],200,"LTOreturn"],
["LTOreturn","Ops!",[],1400,"LTOlow"]
];
