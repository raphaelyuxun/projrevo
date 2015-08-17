var gulp = require('gulp')
var gutil = require('gulp-util')
var bower = require('bower')
var sh = require('shelljs')
var watch = require('gulp-watch')
var webpack = require('webpack-stream')
var webpackConfig = require('./webpack.config.js')

/*
########################################################################################################
########################################################################################################
########################################################################################################
    下面都是我写的
*/
gulp.task('build', function() {
  return gulp
          .src('www/app/app.js')
          .pipe(webpack(webpackConfig))
          .pipe(gulp.dest('www/build/'))
})

gulp.task('watch', function() {
  return gulp.watch(['www/app/**/*.*'], ['build'])
})

gulp.task('upload', function() {
  sh.exec('phonegap upload')
})

gulp.task('phonegap-serve', function(done) {
  if (!sh.which('phonegap')) {
    console.log(
      '  ' + gutil.colors.red('phonegap is not installed.'),
      '\n  run \'npm install -g phonegap\' to install it.'
    );
    process.exit(1)
  } else {
    sh.exec('phonegap serve', {async: true})
  }

  done()
})

gulp.task('default', ['build', 'watch', 'phonegap-serve'])
