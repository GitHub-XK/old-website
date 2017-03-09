import os
import sys
import json

with open("json/planets.json") as data_file:
	data = json.load(data_file)
f = open("_data/planets.yml","w")
try:
	for planets in ["sun","earth","moon","mars"]:
		f.write("- name: "+planets+"\n")
		if "mass" in data[planets]:
			f.write("  mass: "+str(data[planets]["mass"])+"\n")
		if "radius" in data[planets]:
			f.write("  radius: "+str(data[planets]["radius"])+"\n")
		if "gm" in data[planets]:
			f.write("  gm: "+str(data[planets]["gm"])+"\n")
		if "orbit" in data[planets]:	
			if "parent" in data[planets]["orbit"]:
				f.write("  parent: "+data[planets]["orbit"]["parent"]+"\n")
			f.write("  semiMajor: "+str(data[planets]["orbit"]["semiMajor"])+"\n")
			f.write("  period: "+str(data[planets]["orbit"]["period"])+"\n")
		else:
			f.write("  parent: NaN\n")
			f.write("  semiMajor: NaN\n")
			f.write("  period: NaN\n")	
finally:
   		f.close()
