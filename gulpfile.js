var gulp = require('gulp');
var browserSync = require('browser-sync');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('serve', ['pug'], function() {
    browserSync({
      server: 'dist',
      index: '../dist/html/index.html',
    });

    gulp.watch('dist/html/*.html', ['reload']);
    gulp.watch('src/pug/**/*.pug', ['pug']);
});

gulp.task('pug', function buildHTML() {
  return gulp.src('src/pug/*.pug')
  .pipe(pug({
  }))
  .pipe(gulp.dest('dist/html'))
  .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
