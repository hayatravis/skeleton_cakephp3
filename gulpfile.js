var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var nano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-ruby-sass');
var paths = {
	base: "./webroot/js/app.js",
	scripts: "./webroot/js/**/*.js",
	css: "./webroot/css/**/*.css"
};

gulp.task('clean', function() {
	return del([
		'./webroot/dist/css/*.css*'
	]);
});

gulp.task('css', function() {
	return gulp.src(paths.css)
		.pipe(sourcemaps.init( { loadMaps: true }))
		.pipe(nano())
		.pipe(concat('app.css'))
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest('webroot/dist/css'));
});

gulp.task('sass', function () {
	return sass('./webroot/sass/**/*.scss', { style : 'expanded'} )
		.pipe(sourcemaps.init( { loadMaps: true } ))
		.pipe(concat('app.css'))
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest('webroot/dist/css'));
});

gulp.task('watch', function() {
	gulp.watch(paths.css, ['css']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['clean', 'css']);