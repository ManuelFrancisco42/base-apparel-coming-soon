import gulp from 'gulp';
import gulpsass from 'gulp-sass';
import * as sass from 'sass';
import prettier from 'gulp-prettier';
// import dartSass from 'sass';
import imagemin from 'gulp-imagemin';

const { src, dest, watch, series } = gulp;
// const sassCompiler = sass(dartSass);
const sassCompiler = gulpsass(sass);

export function buildStyles() {
  return src('./sass/**/*.scss')
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(dest('./dist/css'));
}

export function formatScripts() {
  return src('./js/**/*.js')
    .pipe(prettier({ singleQuote: true }))
    .pipe(dest('./dist/js'));
}

export function compressImages() {
  return src('./assets/images/**/*')
    .pipe(imagemin())
    .pipe(dest('./dist/images'));
}

export function watchTask() {
  watch('./sass/**/*.scss', series(buildStyles));
  watch('./js/**/*.js', series(formatScripts));
  watch('./assets/images/**/*');
}

export default gulp.series(
  buildStyles,
  formatScripts,
  compressImages,
  watchTask
);
