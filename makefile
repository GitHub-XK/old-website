complete : main.nest.sass.css learn.nest.sass.css blogMain.nest.sass.css posts.nest.sass.css content.nest.sass.css 404css.nets.sass.css
	python3 extractor.py && jekyll build

main.nest.sass.css : sass/main.sass
	sass sass/main.sass css/main.nest.sass.css --sourcemap=none
learn.nest.sass.css : sass/learn.sass
	sass sass/learn.sass css/learn.nest.sass.css --sourcemap=none
blogMain.nest.sass.css : sass/blogMain.sass
	sass sass/blogMain.sass css/blogMain.nest.sass.css --sourcemap=none
posts.nest.sass.css : sass/posts.sass
	sass sass/posts.sass css/posts.nest.sass.css --sourcemap=none
content.nest.sass.css : sass/content.sass
	sass sass/content.sass css/content.nest.sass.css --sourcemap=none
404css.nets.sass.css : sass/404css.sass
	sass sass/404css.sass css/404css.nest.sass.css --sourcemap=none
