var gulp = require('gulp'),
    config = require('../config'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserSync = require('browser-sync'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    handleErrors = require('./utils/handle-errors');

gulp.task('scripts', function(done) {
    var b = browserify({
        fullPaths: true,
        entries: [config.mainPath],
        debug: global.isWatching
    }),
        bundler = global.isWatching ? watchify(b) : b,
        bundle = function() {
            return bundler
                .bundle()
                .on('error', handleErrors)
                .pipe(source(config.main))
                .pipe(buffer())
                .pipe(global.isWatching ? gutil.noop() : uglify())
                .on('error', handleErrors)
                .pipe(global.isWatching ? gutil.noop() : rename({ suffix: '.min' }))
                .pipe(gulp.dest(config.outScripts))
                .on('end', function() {
                    if (global.isWatching) {
                        browserSync.reload();
                    }
                })
        };

    if (global.isWatching) {
        bundler.on('update', bundle);
    }

    return bundle();
});
