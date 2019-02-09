class Circle {

    constructor(radius) {
        this.radius = radius
        this.x = 4;

    }

    draw() {
        console.log('Draw')
    }
}
const c = new Circle(1)
console.log(c.draw())
console.log(c.x)