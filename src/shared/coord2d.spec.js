describe('coord2d', function() {
    it('is defined', function() {
        expect(Coord2d).not.toBeNull();
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
        expect(Coord2d.fromXY).not.toBeNull();
        var c = Coord2d.fromXY(3, 4);
        expect(c.x).toBe(3);
        expect(c.y).toBe(4);
    });

     it('has constructor to create from x,y args', function() {
         var c = new Coord2d(3, 4);
         expect(c.x).toBe(3);
         expect(c.y).toBe(4);
     });

});
