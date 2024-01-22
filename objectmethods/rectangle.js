function rect  (a, b) {
    var rectangle = {
      length: a,
      width: b,
      area: function() {
        return this.length * this.width;
      },
      perimeter: function() {
        return 2 * (this.length + this.width);
      },
    };
      return rectangle;
    }
    console.log(`perimeter of rectangle is ${rect(10, 20) .perimeter()}`);
    console.log(`area of rectangle is ${rect(10, 20) .area()}`);