#!/bin/bash

echo "engines =" > tools/engines.js
cat json/engines.json >> tools/engines.js

echo "planets =" > js/planets.js
cat json/planets.json >> js/planets.js
