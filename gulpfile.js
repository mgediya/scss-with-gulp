/**
*   Gulp  - SCSS framework                                
*   Author : ZWT                                    
**/

/*
  Usage:
  1. npm install //To install all dev dependencies of package
  2. npm run dev //To start development and server for live preview
  3. npm run prod //To generate minifed files for live server
*/

const { src, dest, task, watch, series, parallel } = require('gulp');
const del = require('del'); //For Cleaning build/dest for fresh export
const options = require("./config"); //paths and other options from config.js
const browserSync = require('browser-sync').create();

const sass = require('gulp-sass'); //For Compiling SASS files
const concat = require('gulp-concat'); //For Concatinating js,css files
const uglify = require('gulp-terser');//To Minify JS files
const imagemin = require('gulp-imagemin'); //To Optimize Images
const cleanCSS = require('gulp-clean-css');//To Minify CSS files
const sourcemaps = require('gulp-sourcemaps'); // To show sourcemap

const logSymbols = require('log-symbols'); //For Symbolic Console logs :) :P  

//Load Previews on Browser on dev
function livePreview(done) {
  browserSync.init({
    server: {
      baseDir: options.paths.root
    },
    port: options.config.port || 8080
  });
  done();
}

// Triggers Browser reload
function previewReload(done) {
  console.log("\n\t" + logSymbols.info, "Reloading Browser Preview.\n");
  browserSync.reload();
  done();
}

// ===== Dev tasks =====
function devStyles() {
  return src(`${options.paths.src.scss}/**/*.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat({ path: 'style.min.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(options.paths.dest.css));
}

function devScripts() {
  return src([
    `${options.paths.src.js}/libs/**/*.js`,
    `${options.paths.src.js}/**/*.js`,
    `!${options.paths.src.js}/**/external/*`
  ]).pipe(concat({ path: 'scripts.min.js' })).pipe(dest(options.paths.dest.js));
}

function devImages() {
  return src(`${options.paths.src.img}/**/*`).pipe(dest(options.paths.dest.img));
}

function devFonts() {
  return src(`${options.paths.src.fonts}/**/*`).pipe(dest(options.paths.dest.fonts));
}

function watchFiles() {
  watch(`${options.paths.root}/**/*.html`, series(previewReload));
  watch(`${options.paths.src.scss}/**/*.scss`, series(devStyles, previewReload));
  watch(`${options.paths.src.js}/**/*.js`, series(devScripts, previewReload));
  watch(`${options.paths.src.fonts}/**/*`, series(devFonts, previewReload));
  watch(`${options.paths.src.img}/**/*`, series(devImages, previewReload));
  console.log("\n\t" + logSymbols.info, "Watching for Changes..\n");
}

function devClean() {
  console.log("\n\t" + logSymbols.info, "Cleaning dest folder for fresh start.\n");
  return del([options.paths.dest.base]);
}

// ==== BUILD tasks =====
function prodStyles() {
  return src(`${options.paths.src.scss}/**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat({ path: 'style.min.css' }))
    .pipe(cleanCSS())
    .pipe(dest(options.paths.dest.css));
}

function prodScripts() {
  return src([
    `${options.paths.src.js}/libs/**/*.js`,
    `${options.paths.src.js}/**/*.js`
  ])
    .pipe(concat({ path: 'scripts.min.js' }))
    .pipe(uglify())
    .pipe(dest(options.paths.dest.js));
}

function prodImages() {
  return src(options.paths.src.img + '/**/*').pipe(imagemin()).pipe(dest(options.paths.dest.img));
}

function prodFonts() {
  return src(`${options.paths.src.fonts}/**/*`).pipe(dest(options.paths.dest.fonts));
}

function prodClean() {
  console.log("\n\t" + logSymbols.info, "Cleaning build folder for fresh start.\n");
  return del([options.paths.dest.base]);
}

function buildFinish(done) {
  console.log("\n\t" + logSymbols.info, `Production build is complete. Files are located at ${options.paths.dest.base}\n`);
  done();
}

exports.default = series(
  devClean, // Clean dest Folder
  parallel(devStyles, devScripts, devImages, devFonts), //Run All tasks in parallel
  livePreview, // Live Preview Build
  watchFiles // Watch for Live Changes
);

exports.prod = series(
  prodClean, // Clean Build Folder
  parallel(prodStyles, prodScripts, prodImages , prodFonts), //Run All tasks in parallel
  buildFinish
);