describe('coord2d', function() {
    it('is defined', function() {
        expect(Coord2d).toBeDefined();
    });

    it('is itself a constructor', function() {
        expect(typeof new Coord2d()).toBe('object');
    });

    it('constructor with no args returns 0,0 point', function() {
        var c = new Coord2d();
        expect(c.x).toBe(0);
        expect(c.y).toBe(0);
    });

    it('has factory method to create from x,y args', function() {
        expect(Coord2d.fromXY).toBeDefined();
        var c = Coord2d.fromXY(3, 4);
        expect(c.x).toBe(3);
        expect(c.y).toBe(4);
    });

     it('has constructor to create from x,y args', function() {
         var c = new Coord2d(3, 4);
         expect(c.x).toBe(3);
         expect(c.y).toBe(4);
     });

    it('has factory method to create from {x,y} object', function() {
        expect(Coord2d.fromObject).toBeDefined();
        var c = Coord2d.fromObject({x: 3, y: 4});
        expect(c.x).toBe(3);
        expect(c.y).toBe(4);
    });

    it('has constructor to create from {x,y} object', function() {
        var c = new Coord2d({x: 3, y: 4});
        expect(c.x).toBe(3);
        expect(c.y).toBe(4);
    });

    it('has an add method to shift point from x,y args', function() {
        var c = new Coord2d(2, 3);
        c.add(1, -2);
        expect(c.x).toBe(3);
        expect(c.y).toBe(1);
    });

    it('has an add method to shift point from {x,y} object', function() {
        var c = new Coord2d(2, 3);
        c.add({x: 1, y: -2});
        expect(c.x).toBe(3);
        expect(c.y).toBe(1);
    });

    it('has static function for computing radius', function() {
        expect(Coord2d.radiusFromXY).toBeDefined();
        expect(Coord2d.radiusFromXY(3, 4)).toBe(5);
    });

    it('has static function for computing angle in rad from x,y args', function() {
        expect(Coord2d.angleFromXY).toBeDefined();
        expect(Coord2d.angleFromXY(3, 4)).toBeCloseTo(0.92729521, 7);
    });
});
