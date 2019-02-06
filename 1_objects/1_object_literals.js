//Varibale inside the objects property
//Function inside the object is method
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw')
    }
}
console.log(circle.draw())