import json
from datetime import datetime

data = {
    "stars":[],
    "units":{
        "name":"name of object",
        "rightAscension":"degrees",
        "declination":"degrees",
        "visualMagnitude":"apparent visual magnitude",
        "distance":"light years",
        "error":"percentage",
        "coordinates":"x,y,z list of space coordinates in light years: +X = towards galactic center, +Y = in direction of galactic rotation, +Z = towards galactic north",
        "type":"type of object: S = main sequence star, WD = white dwarf, BD = brown dwarf, JP = jovian planet, NP = neptunian planet, TP = terrestrial planet",
        "spectral":"spectral type",
        "absoluteMagnitude":"absolute visible magnitude",
        "visualLuminosity":"relative to the Sun",
        "bolometricLuminosity":"relative to the Sun",
        "mass":"see massUnit",
        "massUnit":"in terms of the mass of either the Sun (Ms), Jupiter (Mj), or the Earth (Me)",
        "radius":"see radiusUnit",
        "radiusUnit":"in terms of the radius of either the Sun (Rs) or Jupiter (Rj)",
        "temperature":"effective temperature in Kelvin (for extrasolar planets, estimated average assuming an albedo of 0.5)",
        "parent":"parent body in system with multiple objects",
        "semiMajorAxis":"AU",
        "period":"years",
        "eccentricity":""
    },
    "source":"http://www.johnstonsarchive.net/astro/nearstar.html"
}

data["time"] = str(datetime.now())

with open('forParsing','r') as source:
    for line in source:
        star = {}
        star["name"] = line[:28].rstrip()
        try:
            star["rightAscension"] = float(line[28:34].strip())
        except Exception:
            pass
        try:
            star["declination"] = float(line[36:42].strip())
        except Exception:
            pass
        try:
            star["visualMagnitude"] = float(line[44:50].strip())
        except Exception:
            pass
        star["distance"] = float(line[52:57].strip())
        star["error"] = float(line[58:63].strip())
        star["coordinates"] = [float(line[65:71].strip()),float(line[73:79].strip()),float(line[81:87].strip())]
        star["type"] = line[89:91].strip()
        try:
            star["spectral"] = line[94:101].strip()
            if(star["spectral"] == ""):
                del(star["spectral"])
        except Exception:
            pass
        try:
            star["absoluteMagnitude"] = float(line[103:108].strip())
        except Exception:
            pass
        try:
            star["visualLuminosity"] = float(line[110:122].strip())
        except Exception:
            pass
        try:
            star["bolometricLuminosity"] = float(line[123:133].strip())
        except Exception:
            pass
        try:
            star["mass"] = float(line[133:140].strip())
        except Exception:
            pass
        try:
            star["massUnit"] = line[141:143].strip()
            if(star["massUnit"] == ""):
                del(star["massUnit"])
        except Exception:
            pass
        try:
            star["radius"] = float(line[144:151].strip())
        except Exception:
            pass
        try:
            star["radiusUnit"] = line[152:154].strip()
            if(star["radiusUnit"] == ""):
                del(star["radiusUnit"])
        except Exception:
            pass
        try:
            star["temperature"] = float(line[155:160].strip())
        except Exception:
            pass
        try:
            star["parent"] = line[162:165].strip()
            if(star["parent"] == ""):
                del(star["parent"])
        except Exception:
            pass
        try:
            star["semiMajorAxis"] = float(line[165:171].strip())
        except Exception:
            pass
        try:
            star["period"] = float(line[173:179].strip())
        except Exception:
            pass
        try:
            star["eccentricity"] = float(line[181:186].strip())
        except Exception:
            pass

        data["stars"].append(star)
"""
We need to read a custom table.
It is not consistent in the number of values for each line, the only thing that is constant is the offset.
each line is up to 186 characters long
"""
        
with open('stars.json', 'w') as destination:
    data["stars"] = sorted(data["stars"], key=lambda k: k['distance']) 
    json.dump(data, destination, indent=4)
