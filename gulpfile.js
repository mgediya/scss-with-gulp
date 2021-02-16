const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const browserSync = require('browser-sync').create();
const options = require("./config"); //paths and other options from config.js
 
/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del(`${options.paths.dest.base}`);
}
 
/*
 * Define our tasks using plain functions
 */

function styles() {
  return gulp.src(`${options.paths.src.scss}`)
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(cleanCSS())
  // pass in options to the stream
  .pipe(rename({
    basename: 'styles',
    suffix: '.min'
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(browserSync.stream())
  .pipe(gulp.dest(options.paths.dest.css));
}

function scripts() {
  return gulp.src([`${options.paths.src.scripts}/libs/**/*.js`,`${options.paths.src.scripts}/*.js`], { sourcemaps: true })
  .pipe(babel())
  .pipe(uglify())
  .pipe(concat('scripts.min.js'))
  .pipe(gulp.dest(options.paths.dest.scripts));
}

function images(){
  return gulp.src(`${options.paths.src.img}/**/*`).pipe(gulp.dest(options.paths.dest.img));
}
 
function watch() {
  gulp.watch(`${options.paths.src.img}`, images).on('change',browserSync.reload);
  gulp.watch(`${options.paths.src.scripts}`, scripts).on('change',browserSync.reload);
  gulp.watch(`${options.paths.src.scss}`, styles).on('change',browserSync.reload);

  browserSync.init({
    server: {
      baseDir: options.paths.root
    },
    port: options.config.port || 5000
});
}
 
/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
const build = gulp.series(clean, gulp.parallel(styles, scripts, images));
 
/*
 * You can use CommonJS `exports` module notation to declare tasks
 */

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watch;
exports.build = build;
/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build;