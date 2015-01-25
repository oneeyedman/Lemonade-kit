var gulp         = require( 'gulp' ),
		sass         = require('gulp-ruby-sass'),
		cssminifiy   = require('gulp-minify-css'),
		autoprefixer = require('gulp-autoprefixer'),
		rename       = require('gulp-rename'),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglify'),
		notify       = require('gulp-notify'),
		plumber      = require('gulp-plumber'),
		gutil        = require('gulp-util'),
		livereload   = require('gulp-livereload'),
		replace      = require('gulp-replace'),
		cachebreaker = require('gulp-cache-break');

var deploy_folder = 'dist';
var onError = function (err) {
	gutil.beep();
	console.log(err);
};

gulp.task( 'scss_styles' , function(cb) {
	return gulp.src('_dev/scss/*.scss')
		.pipe(replace(/!hosita(\s{1}tupa)?/g, '!important'))
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(sass({ sourcemap: 'none', style: 'expanded'}))
		.pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
		.pipe(gulp.dest( 'css/'))
		.pipe(notify({message: 'CSS OK'}))
		.pipe(cssminifiy())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest( 'css/' ) );
});

gulp.task('js_plugins', function(){
	return gulp.src(['_dev/js/plugins.js','_dev/js/plugins/*.js'])
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe( concat('plugins.js') )
		.pipe( gulp.dest('js/') )
		.pipe( notify({message: 'PLUGINS OK'}));
});

gulp.task('js_scripts', function(){
	return gulp.src(['_dev/js/*.js','!_dev/js/plugins.js'])
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe( gulp.dest('js/') )
		.pipe( rename({suffix: '.min'} ) )
		.pipe( uglify() )
		.pipe( gulp.dest('js/') )
		.pipe( notify({message: 'JS OK'}));
});

gulp.task('deploy', function(){
	gulp.src([
		'*.*',
		'*/**',
		'!_dev/**',
		'!_dev',
		'!node_modules/**',
		'!node_modules',
		'!checklist.todo',
		'!gulpfile.js',
		'!package.json',
		'!bower.json',
		'!readme.md',
		'.htaccess',
		'!_' + deploy_folder,
		'!_' + deploy_folder + '/**',

		])
		.pipe( gulp.dest( '_' + deploy_folder + '/') );
});

gulp.task('cache_css', function(callback){
		gulp.src('incl/_head.php')
				.pipe(cachebreaker('css/main.min.css'))
				.pipe(gulp.dest('incl'));
});

gulp.task('cache_js', function(callback){
	 gulp.src('incl/_js.php')
				.pipe(cachebreaker('js/main.min.js'))
				.pipe(cachebreaker('js/plugins.js'))
				.pipe(gulp.dest('incl'));
});

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('_dev/js/plugins/*.js', ['js_plugins','cache_js']).on('change', livereload.changed);
	gulp.watch('_dev/js/*.js', ['js_scripts','cache_js']).on('change', livereload.changed);
	gulp.watch('_dev/scss/*.scss', ['scss_styles','cache_css']);
	gulp.watch('css/*.css').on('change', livereload.changed);
	gulp.watch(['*.php','*.html','incl/*.php']).on('change', livereload.changed);
});

gulp.task('default', ['watch']);
