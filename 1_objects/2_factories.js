//Varibale inside the objects property
//Function inside the object is method
//Varibale inside the objects property
//Function inside the object is method
//In JavaScript Functions are Obejcts


//Line 9 shows factory fuction
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
console.log(circle.radius)