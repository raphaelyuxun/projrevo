var gulp = require('gulp')
var gutil = require('gulp-util')
var bower = require('bower')
var sh = require('shelljs')
var watch = require('gulp-watch')
var webpack = require('webpack-stream')
var webpackConfig = require('./webpack.config.js')

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message)
    })
})

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1)
  }
  done()
})

/*
########################################################################################################
########################################################################################################
########################################################################################################
    下面都是我写的
*/
gulp.task('build', function() {
  return gulp.src('www/app/app.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('www/build/'))
})

gulp.task('watch', function() {
  return gulp.watch(['www/app/**/*.*'], ['build'])
})

gulp.task('ionic-serve', function(done) {
  if (!sh.which('ionic')) {
    console.log(
      '  ' + gutil.colors.red('ionic is not installed.'),
      '\n  run \'npm install -g ionic\' to install it.'
    );
    process.exit(1)
  } else {
    sh.exec('ionic serve', {async: true})
  }

  done()
})

gulp.task('default', ['watch', 'ionic-serve'])
