const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');

function styles(done) {
  gulp.src('styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/css'))
    .on('end', done);
}

exports.styles = styles;
