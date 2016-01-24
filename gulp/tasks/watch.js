var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    notify = require('gulp-notify'),
    notifier = require('node-notifier'),
    reload = browserSync.reload;
    
//watch files and performs tasks when an event happens.
gulp.task('watch', ['browser-sync'], function () {
  function reportChange(event) {
    console.log('Event type: ' + event.type); // added, changed, or deleted
    console.log('Event path: ' + event.path); // The path of the modified file
  }

  // Watch .less .css files
  gulp.watch(['./content/css/*.css', './content/css/*.less', '!./content/css', '!./content/css/mobile'], 
  ['styles', 'bs-reload']).on('change', reportChange);
  // Watch .js files
  gulp.watch(['./content/scripts/*.js', '!./content/scripts', '!./content/scripts/mobile'], 
  ['bundlejs', 'bs-reload']).on('change', reportChange);
  notifier.notify({ message: 'Watching Started' });
});