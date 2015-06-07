describe('coord2d', function() {
    var PI = 3.14159265359;

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

    it('library has a function for converting radians to degrees', function() {
        expect(Coord2d.radToDeg).toBeDefined();
        expect(Coord2d.radToDeg(3*PI/2)).toBeCloseTo(270);
        expect(Coord2d.radToDeg(PI)).toBeCloseTo(180);
        expect(Coord2d.radToDeg(PI/2)).toBeCloseTo(90);
        expect(Coord2d.radToDeg(PI/3)).toBeCloseTo(60);
        expect(Coord2d.radToDeg(PI/4)).toBeCloseTo(45);
        expect(Coord2d.radToDeg(PI/6)).toBeCloseTo(30);
    });

    it('library has a function for converting from degrees to radians', function() {
        expect(Coord2d.degToRad).toBeDefined();
        expect(Coord2d.degToRad(0)).toBeCloseTo(0);
        expect(Coord2d.degToRad(30)).toBeCloseTo(PI/6);
        expect(Coord2d.degToRad(45)).toBeCloseTo(PI/4);
        expect(Coord2d.degToRad(60)).toBeCloseTo(PI/3);
        expect(Coord2d.degToRad(90)).toBeCloseTo(PI/2);
        expect(Coord2d.degToRad(180)).toBeCloseTo(PI);
        expect(Coord2d.degToRad(270)).toBeCloseTo(3*PI/2);
    });
});
