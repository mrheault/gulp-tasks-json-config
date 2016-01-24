var gulp = require('gulp'),
  del = require('del');
  
  
//Clean Directories
gulp.task('clean', function () {
  return del(['./content/css/**',
    './content/scripts/**',
    '!./content/scripts',
    '!./content/css',
    './content/css/mobile/**',
    './content/scripts/mobile/**',
    '!./content/scripts/mobile',
    '!./content/css/mobile']);
});