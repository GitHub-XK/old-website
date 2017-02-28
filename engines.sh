#!/bin/bash

echo "var engines =" > tools/engines.js
cat json/planets.json >> tools/engines.js
