let person = {
    name: 'Vidit'
}
let objectBase = Object.getPrototypeOf(person)
console.log(objectBase)
console.log(Object.keys(person))
Object.defineProperty(person, 'name', {
    enumerable: false, //Can't inter over
    configurable: false, //Can't delete
})
console.log(Object.keys(person))

function Cricle(radius) {
    this.radius = radius;
}