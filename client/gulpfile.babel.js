import gulp from 'gulp';
import webpack from 'webpack';
import minimist from 'minimist';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';

process.env.UV_THREADPOOL_SIZE = 100;

let watch = false;
const $ = gulpLoadPlugins();
const argv = minimist(process.argv.slice(2));

// Webpack build
gulp.task('webpack', cb => {
  const config = require('./webpack.config.js');
  const bundler = webpack(config);
  const verbose = !!argv.verbose;
  let bundlerRunCount = 0;

  function bundle(err, stats) {
    if (err) {
      throw new $.util.PluginError('webpack', err);
    }

    console.log(stats.toString({
      colors: $.util.colors.supportsColor,
      hash: verbose,
      version: verbose,
      timings: verbose,
      chunks: verbose,
      chunkModules: verbose,
      cached: verbose,
      cachedAssets: verbose
    }));

    if (++bundlerRunCount === (watch ? config.length : 1)) {
      return cb();
    }
  }

  if (watch) {
    bundler.watch(200, bundle);
  } else {
    bundler.run(bundle);
  }
});


// Build and start watching for modifications
gulp.task('build:watch', cb => {
  watch = true;
  runSequence('webpack', () => {
    cb();
  });
});
