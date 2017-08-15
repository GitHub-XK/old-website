complete : css/main.nest.sass.css css/learn.nest.sass.css css/blogMain.nest.sass.css css/posts.nest.sass.css css/content.nest.sass.css css/404css.nest.sass.css css/nav.nest.sass.css js/planets.js
	./build.sh
	jekyll build
	./cleanup.sh

css/main.nest.sass.css : sass/main.sass
	sass sass/main.sass css/main.nest.sass.css --sourcemap=none
css/learn.nest.sass.css : sass/learn.sass
	sass sass/learn.sass css/learn.nest.sass.css --sourcemap=none
css/blogMain.nest.sass.css : sass/blogMain.sass
	sass sass/blogMain.sass css/blogMain.nest.sass.css --sourcemap=none
css/posts.nest.sass.css : sass/posts.sass
	sass sass/posts.sass css/posts.nest.sass.css --sourcemap=none
css/content.nest.sass.css : sass/content.sass
	sass sass/content.sass css/content.nest.sass.css --sourcemap=none
css/404css.nest.sass.css : sass/404css.sass
	sass sass/404css.sass css/404css.nest.sass.css --sourcemap=none
css/nav.nest.sass.css : sass/nav.sass
	sass sass/nav.sass css/nav.nest.sass.css --sourcemap=none

_data/planets.yml : json/planets.json
	python3 extractor.py

js/planets.js js/engines.js js/stars.js : json/engines.json json/planets.json json/stars.json
	./extractor.sh
