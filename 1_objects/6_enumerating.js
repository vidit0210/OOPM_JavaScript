//Factory implemetation
function createCircle(radius) {
    return {
        //radius: radius, if Key and Value pair are the same we can use same
        radius,
        draw: function () {
            console.log('draw')
        }
    }
}
const circle = createCircle(1);
//Constructor implementation
function Circle(radius) {
    this.radius = radius,
        this.draw = function () {
            console.log('draw')
        }
}
const another = new Circle(2)

for (let key in circle) {
    console.log(key, circle[key])
}
for (let key in another) {
    console.log(key)
}