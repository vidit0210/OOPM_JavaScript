function createCircle(radius) {
    return {
        //radius: radius, if Key and Value pair are the same we can use same
        radius,
        draw: function () {
            console.log('draw')
        }
    }
}
// Can additions Properties on the fly
const circle = createCircle(10)
circle.location = {
    x: 1
}
// circle['location]={x:1}-- same Mathod
console.log(circle.location)
console.log(circle)

//delete circle.location
delete circle['location']
console.log(circle)