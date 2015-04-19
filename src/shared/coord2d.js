(function(module) {

    var RAD_TO_DEG = 57.2957795131;

    function Coord2d(x, y) {
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
        }
    }

    Coord2d.fromXY = function(x, y) {
        var c = new Coord2d();
        return c.setCartesian(x, y);
    };

    module.Coord2d = Coord2d;

})(typeof module === 'undefined' ? this : module);