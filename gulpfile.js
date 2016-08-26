'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat')

var _js = [  
  './node_modules/zone.js/dist/zone.js',
  './node_modules/reflect-metadata/Reflect.js',
  './dist/bundle.js'
]

/* SASS */
gulp
  .task('sass', function () {
    return gulp
      .src(['./app/*.scss', './app/**/*.scss'])
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dist'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

/* CONCAT - CSS */
gulp.task('concatCss', function () {
  return gulp
    .src(['./dist/*.css'])
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist/'));
});

/* CONCAT - JS */
gulp.task('concatJs', function () {
  return gulp
    .src(_js)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist/'))
});

/* CONCAT */
gulp.task('concat', ['concatCss', 'concatJs'])
