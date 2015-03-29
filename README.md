# Lemonade Kit

This is my gulp-ready-compass-free-website-starter-kit based on html5Boilerplate and experience ;)

<!-- MarkdownTOC depth=2 -->

- HumansTxT file
- New folder structure
- Gulp dependencies
- JS/CSS files
- EU cookie law

<!-- /MarkdownTOC -->
## HumansTxT file
Didn't anyboby tell you about the Humantxt project?
> It's an initiative for knowing the people behind a website. It's a TXT file that contains information about the different people who have contributed to building the website.
>
> **Why a TXT?**
>
> Because it's something simple and fast to create. Because it's not intrusive with the code. More often than not, the owners of the site don't like the authors signing it; they claim that doing so may make the site less efficient. By adding a txt file, you can prove your authorship (not your property) in an external, fast, easy and accessible way.

## New folder structure
Whith this new project structure the "deploy" task is no longer needed :) Yay!

	lemonade-kit
	 |- _root
	 |   |- assets
	 |   |   |- css
	 |   |   |   `- layout
	 |   |   |       `- 2015
	 |   |   `- js
	 |   |       `- vendor
	 |   `-incl
	 `- _source
	     |- js
	     |   `- plugins
	     `- scss


## Gulp dependencies
* **del**: ~1.1.0
* **gulp**: ~3.8.10
* **gulp-autoprefixer**: ~2.1.0
* **gulp-concat**: ~2.4.3
* **gulp-livereload**: ~3.5.0
* **gulp-minify-css**: ~0.4.2
* **gulp-notify**: ~2.1.0
* **gulp-plumber**: ~0.6.6
* **gulp-rename**: ~1.2.0
* **gulp-replace**: ~0.5.2
* **gulp-ruby-sass**: ~1.0.1
* **gulp-uglify**: ~1.1.0
* **gulp-util**: ~3.0.2
* **gulp-combine-mq**: ~0.3.1

## JS/CSS files
* Main javascript is minified into `_root/js/main.min.js`. The not-minimized file is included too (you know, just in case).
* All jQuery plugins inside the plugins folder are concatenated (not minified) into `_root/js/plugins.js`.

| Item | Version | Downloaded from |
| ------ | ------- | --- |
| Normalize | v3.0.1 | http://www.initializr.com/
| JQUERY | v1.11.1 | http://www.initializr.com/
| Modernizr | v2.8.3 | http://www.initializr.com/
| Respond | v1.4.0 | http://www.initializr.com/
| Width_snitch | v1 | https://github.com/oneeyedman/Width-Snitch/
| Placeholder.js | v2.0.8 | http://mths.be/placeholder
| jQuery Cookie Plugin | v1.4.0 | https://github.com/carhartl/jquery-cookie

## EU cookie law
This starter kit is now ready to comply with the European cookie law
* Tracking system: Google Analytics