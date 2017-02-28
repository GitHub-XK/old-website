import os
import sys
import json

with open("json/planets.json") as data_file:
	data = json.load(data_file)
for planets in data["planets"]:
	f = open("_data/"+planets,"w")
	try:
		f.write("---")
		f.write("name: "+planets)
		f.write("mass: "+data[planets]["mass"])
		f.write("radius: "+data[planets]["radius"])
		f.write("gm: "+data[planets]["gm"])
		f.write("parent: "+data[planets]["orbit"]["parent"])
		f.write("semiMajor: "+data[planets]["orbit"]["semiMajor"])
		f.write("period: "+data[planets]["orbit"]["period"])
		f.write("---")
	finally:
   		f.close()
