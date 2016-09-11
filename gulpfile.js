'use strict'
 
const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
const concat = require('gulp-concat')
const fs = require('fs')
const emptyFile = require('empty-file')
const typescript = require('gulp-typescript')
const tscConfig = require('./tsconfig.json')
const browserify = require('browserify')
const tsify = require('tsify')
const tslint = require('gulp-tslint')
const source = require('vinyl-source-stream')
const runSequence = require('run-sequence').use(gulp)

var _js = [  
  "./node_modules/zone.js/dist/zone.js",
  "./node_modules/reflect-metadata/Reflect.js",
  "./dist/src.js"
]

gulp.task("serve", function() {
    browserSync.init({
        server: "./"
    })

    gulp.watch(["app/*.scss", "app/**/*.scss"], ["sass", browserSync.reload])
    gulp.watch(["*.html", "app/*.html"]).on("change", browserSync.reload)
    gulp.watch(["app/*.ts"], ['peer', browserSync.reload])
})

gulp.task("sass", function () {
  gulp
    .src(["./app/*.scss", "./app/**/*.scss"])
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.stream())
})

gulp.task('peer', function(cb) {
  return runSequence("tslint", "ts", 'browserify', 'concatJs', cb)
})

/* LINTER */
gulp.task("tslint", function () {
  gulp.src(["app/*.ts"])
    .pipe(tslint({
      formatter: "verbose",
      configuration: "tslint.json"
    }))
    .pipe(tslint.report())
})

gulp.task("ts", function() {
  return gulp
    .src('./app/*.ts')
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('./dist'))
})

gulp.task("browserify", function() {
  var bundler = browserify({basedir: './'})
    .add('./dist/app/main.js')
    .plugin(tsify)

  return bundler.bundle()
    .pipe(source('src.js'))
    .pipe(gulp.dest('./dist'))
})

/* CONCAT */
gulp.task("concat", ["concatJs", "concatCss"])

gulp.task("concatCss", function () {
  return gulp
    .src("./dist/tmp/*.css")
    .pipe(concat("styles.css"))
    .pipe(gulp.dest("./dist"))
})

gulp.task("concatJs", function () {
  return gulp
    .src(_js)
    .pipe(concat("bundle.js"))
    .pipe(gulp.dest("./dist/"))
})
