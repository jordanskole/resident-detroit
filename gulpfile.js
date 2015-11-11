/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

/**
 *  So cool.
 *  Push everything up to gh-pages
 */
gulp.task('deploy', function() {
  return gulp.src('**/*')
    .pipe(ghPages({push: true}));
});
