function Circle(radius) {
    this.radius = radius;
}
Circle.prototype.draw = function () {
    console.log('DRAW')
}
const c1 = new Circle(1)

Circle.prototype.toString = function () {
    return 'Circle with Radius ' + this.radius;
}

console.log(c1.toString())