//Hide the Details and implement only the essentials

function Circle(radius) {

    this.radius = radius;
    // this.defaultLocation = {
    //     x: 0,
    //     y: 0
    // };
    let defaultLocation = {
        x: 0,
        y: 0
    }
    this.getDefaultLocation = function () {
        return defaultLocation
    }
    this.computeOptiumLocation = function () {
        console.log(defaultLocation.x)

    }
    this.draw = function () {
        console.log('draw')
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation
        }
    })
}

const circle = new Circle(1);
circle.computeOptiumLocation()
console.log(circle.getDefaultLocation())
console.log(circle.defaultLocation)