#!/bin/bash
#importing json dynamically sucks slightly, so just pretending it is javascript is the most comfortable way

echo "engines =" > tools/engines.js
cat json/engines.json >> tools/engines.js

echo "planets =" > js/planets.js
cat json/planets.json >> js/planets.js

echo "stars =" > js/stars.js
cat json/stars.json >> js/stars.js
