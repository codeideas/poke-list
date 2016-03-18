'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('libs', function () {
  gulp.src([
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/angular/angular.min.js',
    './bower_components/angular-route/angular-route.min.js',
    './bower_components/angular-mocks/angular-mocks.min.js',
    './bower_components/angular-resource/angular-resource.min.js',
    './bower_components/angular-loader/angular-loader.min.js',
    './bower_components/materialize/dist/js/materialize.min.js'])
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest('./dist/js'))

  gulp.src('./bower_components/materialize/font/**/*')
    .pipe(gulp.dest('./dist/font'))
});


gulp.task('javascripts', function () {
  gulp.src(['./app/components/**/*.js', './app/app.js'])
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./dist/js'))
});


gulp.task('stylesheets', function () {
  gulp.src('./app/assets/stylesheets/app.sass')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('./dist/css'))
});


gulp.task('start', ['libs', 'javascripts', 'stylesheets']);


gulp.task('watch', ['javascripts', 'stylesheets'], function () {
  gulp.watch(['./app/components/**/*.js', './app/app.js'], ['javascripts']);
  gulp.watch('./app/assets/stylesheets/*.sass', ['stylesheets']);
});
