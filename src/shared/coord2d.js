(function(module) {

    var RAD_TO_DEG = 57.2957795131;

    function Coord2d(x, y) {
        if (isObjectArg(x)) {
            y = x.y;
            x = x.x;
        }
        x = x || 0;
        y = y || 0;
        this.x = x;
        this.y = y;
    }

    Coord2d.prototype = {
        constructor: Coord2d,
        setCartesian: function(x, y) {
            this.x = x;
            this.y = y;
            return this;
        },
        add: function(x, y) {
            if (isObjectArg(x)) {
                y = x.y;
                x = x.x;
            }
            this.x += x;
            this.y += y;
            return this;
        }
    }

    Coord2d.radiusFromXY = function(x, y) {
        return Math.sqrt(x * x + y * y);
    };

    Coord2d.angleFromXY = function(x, y) {
        return Math.atan2(y, x);
    };

    Coord2d.fromXY = function(x, y) {
        var c = new Coord2d();
        return c.setCartesian(x, y);
    };

    Coord2d.fromObject = function(o) {
        return Coord2d.fromXY(o.x, o.y);
    };

    function isObjectArg(arg) {
        return typeof arg === 'object';
    }

    module.Coord2d = Coord2d;

})(typeof module === 'undefined' ? this : module);