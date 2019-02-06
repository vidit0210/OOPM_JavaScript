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

//Constructor implementation
function Circle(radius) {
    this.radius -= radius,
        this.draw = function () {
            console.log('draw')
        }
}
const another = new Circle(2) //Creates new object{}-- so no need return
//this with new  --> Constructor function
console.log(another.radius)