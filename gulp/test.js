var gulp = require('gulp'),
    karma = require('karma').server,
    config = require('../config');

gulp.task('test', function(done) {
    karma.start({
        configFile: __dirname + config.karma,
        singleRun: true
    }, done)
});
