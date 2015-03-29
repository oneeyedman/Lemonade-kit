var
		autoprefixer = require('gulp-autoprefixer'),
		combineMq    = require('gulp-combine-mq'),
		concat       = require('gulp-concat'),
		cssminifiy   = require('gulp-minify-css'),
		gulp         = require( 'gulp' ),
		gutil        = require('gulp-util'),
		livereload   = require('gulp-livereload'),
		notify       = require('gulp-notify'),
		plumber      = require('gulp-plumber'),
		rename       = require('gulp-rename'),
		replace      = require('gulp-replace'),
		sass         = require('gulp-ruby-sass'),
		uglify       = require('gulp-uglify');

var onError = function (err) {
	gutil.beep();
	console.log(err);
};

gulp.task( 'scss_styles' , function(cb) {
	return sass('_source/scss')
		.pipe(replace(/!hosita(\s{1}tupa)?/g, '!important'))
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
		.pipe(combineMq())
		.pipe(gulp.dest( '_root/assets/css'))
		.pipe(notify({message: 'CSS OK'}))
		.pipe(cssminifiy())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest( '_root/assets/css' ) );
});

gulp.task('js_plugins', function(){
	return gulp.src(['_source/js/plugins/*.js'])
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe( concat('plugins.js') )
		.pipe( gulp.dest('_root/assets/js/') )
		.pipe( notify({message: 'PLUGINS OK'}));
});

gulp.task('js_scripts', function(){
	return gulp.src(['_source/js/*.js'])
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe( gulp.dest('_root/assets/js/') )
		.pipe( rename({suffix: '.min'} ) )
		.pipe( uglify() )
		.pipe( gulp.dest('_root/assets/js/') )
		.pipe( notify({message: 'JS OK'}));
});


gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('_source/js/plugins/*.js', ['js_plugins']).on('change', livereload.changed);
	gulp.watch('_source/js/*.js', ['js_scripts']).on('change', livereload.changed);
	gulp.watch('_source/scss/*.scss', ['scss_styles']);
	gulp.watch('_root/assets/css/*.css').on('change', livereload.changed);
	gulp.watch(['_root/*.php','_root/*.html','_root/incl/*.inc']).on('change', livereload.changed);
});

gulp.task('default', ['watch']);
