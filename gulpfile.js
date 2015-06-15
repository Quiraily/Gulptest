var gulp = require('gulp');
    sass = require('gulp-ruby-sass');
    autoprefixer = require('gulp-autoprefixer');
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del');

var paths = {
    scripts: ['angular/lib/*.js],
    styles: 'angular/style/**/*.css],['angular/style/**/*.scss]
};

gulp.task('styles',function() {
    return sass(path.styles), {style: 'expanded'})
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('angular/compressed/css'))
    .pipe(rename({suffix:'.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('angular/compressed/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts',function(){
    return gulp.src('angular/lib/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('angular/compressed/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('angular/compressed/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
});


gulp.task('clean', function(cb) {
    del(['angular/compressed/css', 'angular/compressed/js'], cb)
    });

gulp.task('default',['clean','styles','scripts']); //calling the above defined gulp tasks to run by default
