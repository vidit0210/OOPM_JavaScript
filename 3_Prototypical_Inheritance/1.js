function Shape() {

}
Shape.prototype.duplicate = function () {
    console.log('duplicate')
}

function extend(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function Circle(radius) {
    this.radius = radius
}


Circle.prototype.constructor = Circle // Shape is Parent --Circle Inherits from Shape
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.draw = function () {
    console.log('draw')
}

function Square(size) {
    this.size = size;
}
// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square;
extend(Square, Shape)
extend(Circle, Shape)
//Method Overiding
Circle.prototype.duplicate = function () {
    console.log('Overiding Duplicate')
}

const s = new Shape()
const c = new Circle()
console.log(c.duplicate())
console.log(s.duplicate())