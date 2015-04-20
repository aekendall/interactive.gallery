describe('coord2d', function() {
    it('is defined', function() {
        expect(Coord2d).toBeDefined();
    });

    it('is a constructor', function() {
        expect(typeof new Coord2d()).toBe('object');
    });

    it('constructor with no args returns 0,0 point', function() {
        var c = new Coord2d();
        expect(c.x).toBe(0);
        expect(c.y).toBe(0);
    });

    it('library has factory to create from x,y args', function() {
        expect(Coord2d.fromXY).toBeDefined();
        var c = Coord2d.fromXY(3, 4);
        expect(c.x).toBe(3);
        expect(c.y).toBe(4);
    });

     it('constructor can create from x,y args', function() {
         var c = new Coord2d(3, 4);
         expect(c.x).toBe(3);
         expect(c.y).toBe(4);
     });

    it('library has factory to create from {x,y} object', function() {
        expect(Coord2d.fromObject).toBeDefined();
        var c = Coord2d.fromObject({x: 3, y: 4});
        expect(c.x).toBe(3);
        expect(c.y).toBe(4);
    });

    it('constructor can create from {x,y} object', function() {
        var c = new Coord2d({x: 3, y: 4});
        expect(c.x).toBe(3);
        expect(c.y).toBe(4);
    });

    it('class has an add method to shift point from x,y args', function() {
        var c = new Coord2d(2, 3);
        c.add(1, -2);
        expect(c.x).toBe(3);
        expect(c.y).toBe(1);
    });

    it('class has an add method to shift point from {x,y} object', function() {
        var c = new Coord2d(2, 3);
        c.add({x: 1, y: -2});
        expect(c.x).toBe(3);
        expect(c.y).toBe(1);
    });

    it('library has functions for computing radius', function() {
        expect(Coord2d.radiusFromXY).toBeDefined();
        expect(Coord2d.radiusFromXY(3, 4)).toBe(5);

        var c = new Coord2d(3, 4);
        expect(c.getRadius).toBeDefined();
        expect(c.getRadius()).toBe(5);
    });

    it('library has function for computing angle in rad from x,y args', function() {
        expect(Coord2d.angleFromXY).toBeDefined();
        expect(Coord2d.angleFromXY(3, 4)).toBeCloseTo(0.92729521, 7);
    });

    it('library has function to measure the distance between two x,y points', function() {
        expect(Coord2d.distBetween).toBeDefined();
        expect(Coord2d.distBetween(17, 21, 14, 17)).toBe(5);
    });

    it('class has method to normalize a coord to a radius of 1', function() {
        var c = new Coord2d(3, 4);
        expect(c.normalize).toBeDefined();
        c = c.normalize();
        expect(c.x).toBe(0.6);
        expect(c.y).toBe(0.8);
        expect(c.getRadius()).toBe(1);
    });
});
