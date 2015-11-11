/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    var sources = ["*.html", "./js/*.js", "./css/**.css"]

    gulp.watch(sources)
      .on("change", browserSync.reload);
});

/**
 *  So cool.
 *  Push everything up to gh-pages
 */
gulp.task('deploy', function() {
  return gulp.src('**/*')
    .pipe(ghPages({push: true}));
});
