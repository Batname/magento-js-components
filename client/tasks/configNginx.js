import args from 'yargs';
import path from 'path';
import ejs from 'ejs';
import gulp from 'gulp';
import through from 'through2';

export default function (options) {
    let $ = options.plagins;
    let argv = args.argv;
    const config = {
      root: argv.root || '/var/www/magento-js-components.dev',
      nginxPrefix: argv.prefix || '/etc/nginx/sites-available'
    }
    return cb => {
      return gulp.src('configs/nginx/*.ejs')
                  .pipe(through.obj(function(file, enc, cb) {
                    try {
                      file.contents = new Buffer(ejs.render(file.contents.toString(), config));
                    } catch (err) {
                      this.emit('error', new gp.util.PluginError('configNginx', err));
                    }
                    this.push(file);
                    cb();
                  }))
                 .pipe($.rename(path => {path.extname = '.conf'}))
                 .pipe(gulp.dest(config.nginxPrefix));
    }
};