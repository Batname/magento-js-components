import gulp from 'gulp';
import mocha from 'gulp-mocha';

export default function (options) {
  return cb => {
    return gulp.src(options.path, {read: true})
              .pipe(mocha());

  }
}
