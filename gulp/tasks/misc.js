var gulp = require('gulp');
var config = require('../config');
var browserSync  = require('browser-sync');

/*
gulp.task('markup', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
*/

var tasks = ['root'];

tasks.forEach(function(task) {
  gulp.task(task, function() {
    return gulp.src(config[task].src)
        .pipe(gulp.dest(config[task].dest))
        .pipe(browserSync.reload({stream: true}));
  });
});
