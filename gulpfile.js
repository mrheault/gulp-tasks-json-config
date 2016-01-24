/// <binding ProjectOpened='default' />
//Load the plugins 
var gulp = require('gulp'),
    notify = require('gulp-notify'),
    notifier = require('node-notifier');
    
require('require-dir')('./gulp/tasks');

//Build Tasks // 
//All
gulp.task('build', ['styles', 'bundlejs'], function () {
  notifier.notify({ title: 'Production Build', message: 'Done' });
});

//Desktop
gulp.task('build:desktop', ['styles:desktop', 'bundle:desktop'], function () {
  notifier.notify({ title: 'Desktop Build', message: 'Done' });
});

//Mobile
gulp.task('build:mobile', ['styles:mobile', 'bundle:mobile'], function () {
  notifier.notify({ title: 'Mobile Build', message: 'Done' });
});


// Default task - Clean then Build All
gulp.task('default', ['clean'], function () {
  gulp.start('watch');
});