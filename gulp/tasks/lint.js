var gulp = require('gulp'),
    eslint = require('gulp-eslint');
    
// Lint JS - optional and left out of build steps
// this can run from command line with $ gulp lint.
gulp.task('lint', function () {
  return gulp.src(['./content/scripts/*.js', '!./content/scripts/*.min.js'])
    .pipe(eslint({
      quiet: true
    }))
  // eslint.format() outputs the lint results to the console.
  // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
  // To have the process exit with an error code (1) on
  // lint error, return the stream and pipe to failAfterError last.
  //.pipe(eslint.failAfterError());
});