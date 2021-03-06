import gulp from 'gulp';
import runSequence from 'run-sequence';
import gulpLoad from 'gulp-load-plugins';
let plagins = gulpLoad();

process.env.UV_THREADPOOL_SIZE = 100;

let watch = false;

function lazyRequireTask(path) {
  var args = [].slice.call(arguments, 1);
  return function(callback) {
    var task = require(path).apply(this, args);

    return task(callback);
  };
}

// Webpack build
const webpackConfig = {path: '../webpack.config.js', watch: true};
gulp.task('webpack', lazyRequireTask('./tasks/webpack', webpackConfig));

// Nginx config
gulp.task('config:nginx', lazyRequireTask('./tasks/configNginx', {plagins:plagins}));

// Tests
const mochaConfig = {path: ['test/unit/*', 'test/e2e/*']};
gulp.task('test', lazyRequireTask('./tasks/mocha', mochaConfig));

// Build and start watching for modifications
gulp.task('build:watch', cb => {
  watch = true;
  runSequence('webpack', () => {
    cb();
  });
});
