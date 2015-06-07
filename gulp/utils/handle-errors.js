var notify = require('gulp-notify');

module.exports = function() {
    // End the task
    this.emit('end');

    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, Array.prototype.slice.call(arguments));
};
