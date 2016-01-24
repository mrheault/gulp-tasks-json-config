var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

// Browser Sync
gulp.task('browser-sync', ['build'], function () {
  browserSync.init({
    proxy: "debug.localhost.local",
    port: 3000,
    reloadDelay: 5000    
  });
});

//Reload Browser
gulp.task('bs-reload', function () {
    browserSync.reload();
});