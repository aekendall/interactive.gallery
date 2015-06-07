var gulp = require('gulp'),
    cache = require('gulp-cache'),
    del = require('del'),
    config = require('../config');

gulp.task('clean', ['clean:dist', 'clean:cache']);

gulp.task('clean:dist', function() {
    del(config.dist);
});

gulp.task('clean:cache', function() {
    cache.clearAll();
});
