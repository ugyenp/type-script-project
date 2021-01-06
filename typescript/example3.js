var Rectangle = /** @class */ (function () {
    function Rectangle(shapeName, width, height) {
        this.name = shapeName;
        this.length = width;
        this.breadth = height;
    }
    Rectangle.prototype.shapeName = function () {
        // this.name = "rectangle";
        console.log("Shape name is:" + this.name);
    };
    Rectangle.prototype.shapeArea = function () {
        // this.length = 4;
        // this.breadth = 2;
        var area = this.length * this.breadth;
        console.log("area:" + area);
    };
    return Rectangle;
}());
var rect = new Rectangle('Rectangle', 4, 2);
rect.shapeName();
rect.shapeArea();
