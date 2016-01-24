var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  gulpUtil = require('gulp-util'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  configDesktop = require('../config/config.desktop.json'),
  configMobile = require('../config/config.mobile.json');
    
   
// Bundle/Concat/Uglify Js

function bundles(cfg) {
  var scriptsOut = cfg.scripts.dest;
  var bundle = cfg.bundle;
  var bundleTask = Object.keys(bundle);
  bundleTask.forEach(function (bundleName) {
    return gulp.src(bundle[bundleName].scripts)
      .pipe(plumber())
      .pipe(uglify())
      .on('error', gulpUtil.log)
      .pipe(concat(bundleName + '.min.js'))
      .pipe(gulp.dest(scriptsOut));
  });
  return bundleTask;
}

//Bundle All
gulp.task('bundlejs', function () {
  bundles(configDesktop);
  bundles(configMobile);
});

//Bundle Desktop Only
gulp.task('bundle:desktop', function () {
  bundles(configDesktop);
});

//Bundle Mobile Only
gulp.task('bundle:mobile', function () {
  bundles(configMobile);
});