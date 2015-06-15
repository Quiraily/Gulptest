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


gulp.task('default',['watch','scripts','data']); //calling the above defined gulp tasks to run by default
