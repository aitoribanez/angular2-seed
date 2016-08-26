'use strict'
 
var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create()
var concat = require('gulp-concat')
var clean = require('gulp-clean')
var fs = require('fs')
const emptyFile = require('empty-file')
var typescript = require('gulp-tsc')
 
var _js = [  
  './node_modules/zone.js/dist/zone.js',
  './node_modules/reflect-metadata/Reflect.js',
  './dist/bundle.js'
]
gulp.task('clean', function () {
   // fs.writeFile('dist/styles.css', '', function(){console.log('cleaned')})

   emptyFile('dist/styles.css').then(function() {
        console.log("clenaed")
    fs.readFileSync('file/path', 'utf8');
 });
})

/* SASS */
gulp.task('sass', function () {
  gulp
    .src(['./app/*.scss', './app/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
})

 
// gulp.task('sass:watch', function () {
//  gulp.watch('./sass/**/*.scss', ['sass']);
// });

/* CONCAT - CSS */
/* gulp.task('concatCss', function () {
    console.log("concating")
  return gulp
    .src('./dist/tmp/*.css')
    .pipe(concat('styles2.css'))
    .pipe(gulp.dest('./dist'));
}); */

/* CONCAT - JS */
gulp.task('concatJs', function () {
  return gulp
    .src(_js)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist/'))
});

/* CONCAT */
gulp.task('concat', ['concatJs', 'concatCss'])

/* LIVE RELOAD */
// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: './'
    });

    gulp.watch(['app/*.scss', 'app/**/*.scss'], ['sass', browserSync.reload]);
    gulp.watch(['*.html', 'app/*.html']).on('change', browserSync.reload);
   // gulp.watch(['app/*.ts'], ['ts', browserSync.reload]);
});

gulp.task('ts', function(){
  gulp.src(['app/*.ts'])
    .pipe(typescript())
    .pipe(gulp.dest('./dist/'))
});