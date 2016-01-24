var gulp = require('gulp'),
  less = require('gulp-less'),
  plumber = require('gulp-plumber'),
  gulpUtil = require('gulp-util'),
  rename = require('gulp-rename'),
  minifycss = require('gulp-minify-css'),
  notify = require('gulp-notify'),
  notifier = require('node-notifier'),
  browserSync = require('browser-sync').create(),
  configDesktop = require('../config/config.desktop.json'),
  configMobile = require('../config/config.mobile.json');
    
    
// Compile less and minify.
function styles(cfg) {
  var l = less({});
  l.on('error', function (e) {
    gulpUtil.log(e);
    l.emit('end');
  });
  return gulp.src(cfg.less.src)
    .pipe(plumber())
  //We use .pipe() to pipe the source file(s) to a plugin.
  //compile the less
    .pipe(l)
  //output it in 
    .pipe(gulp.dest(cfg.less.dest))
  //put the min suffix
    .pipe(rename('site.min.css'))
  //do the actual minifying
    .pipe(minifycss())
  //and output that in the same folder
    .pipe(gulp.dest(cfg.less.dest))
    .pipe(browserSync.stream())
    .pipe(notify({title:  cfg.configname + " Styles", message: 'Task complete' }));
}

// Minify Less
// this can run from command line with $ gulp styles.
gulp.task('styles', function () {
  styles(configDesktop);
  styles(configMobile);
});

//Minify Desktop Only
gulp.task('styles:desktop', function () {
  styles(configDesktop);
});

//Minify Mobile Only
gulp.task('styles:mobile', function () {
  styles(configMobile);
});