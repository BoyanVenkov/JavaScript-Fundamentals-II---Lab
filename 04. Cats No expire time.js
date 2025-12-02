

function cats(array) {
class Cat {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`)
    }
}

    for (let text of array) {
        let [catName, catAge] = text.split(" ")
        const cat = new Cat(catName, Number(catAge))
        cat.meow()
    }
}