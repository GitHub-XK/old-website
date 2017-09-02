SHELL := /bin/bash
complete : css/main.nest.sass.css css/learn.nest.sass.css  css/posts.nest.sass.css css/content.nest.sass.css css/404css.nest.sass.css css/nav.nest.sass.css js/planets.js

	./build.sh
	jekyll build
	./cleanup.sh

css/%.nest.sass.css : sass/%.sass
	sass $< $@ --sourcemap=none

_data/planets.yml : json/planets.json
	python3 extractor.py

js/planets.js js/engines.js js/stars.js : json/engines.json json/planets.json json/stars.json
	./extractor.sh
