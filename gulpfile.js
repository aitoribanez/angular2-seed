'use strict'
 
const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
const concat = require('gulp-concat')
const fs = require('fs')
const emptyFile = require('empty-file')
const tsc = require('gulp-typescript-compiler')
const browserify = require('browserify')
const tsify = require('tsify');

// use gulp-run to start a pipeline 
/* gulp.task('browserify', function() {
  return browserify()
    .add('app/main.ts')
    .plugin(tsify, { noImplicitAny: true })
    .bundle()
    .pipe(process.stdout.toString())
    .pipe(gulp.dest('./dist/bundle.js'));
}) */

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

/* CONCAT - CSS */
gulp.task('concatCss', function () {
  return gulp
    .src('./dist/tmp/*.css')
    .pipe(concat('styles2.css'))
    .pipe(gulp.dest('./dist'));
});

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
    // gulp.watch(['app/*.ts'], ['ts', 'browserify', browserSync.reload]);
});

/* gulp.task('ts', function() {
  return gulp
    .src('app/*.ts', {read: false})
    .pipe(tsc({
      resolve: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream:true}));
}) */
