let dog = {
    name: "doggie",
    legCount: 4,
    speaks: "Bow-Bow"
}
let cat = {
    name: "Kittie",
    legCount: 4,
    speaks: "Meow"
}

console.log("Animal "+dog['name']+" speaks "+dog['speaks']);
console.log("Animal "+cat['name']+" speaks "+cat['speaks']);

//  But A lot of code repitition in printing, Solution ==> 


function printStr(animal){
    return "Animal "+animal['name']+" speaks "+animal['speaks'];
}

console.log(printStr(dog));
console.log(printStr(cat));

// But there is repition is defining the dog or cat.
// What if there are 100 animals, then we have to write same code for all of them
// A better solution can be => defining a structure or blueprint and call that for each animal
// same is done using class and objects. 



class Animal{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks
    }

    describe(){
        return `${this.name} has ${this.legCount} legs and speaks ${this.speaks}.`;
    }

    static mytype(){
        console.log("I am an Animal")
    }
    // static belongs to class itself 
    // e.g. :- map of house on paper, Now house can be of red, black, blue color. But the map is white in paper.
    // Map is static and telling something about the class.
}

class Human extends Animal{
    constructor(name, legCount, speaks, senses, gender){
        super(name, legCount, speaks);
        this.senses = senses;
        this.gender = gender;
    }
    describe(){
        return `${this.name} has ${this.legCount} legs, speaks ${this.speaks}, have ${this.senses} senses and is a ${this.gender}.`;
    }
}

let cow = new Animal("Cow", 4, "Moo-Moo");
console.log(cow.describe())

Animal.mytype();

let baby = new Human("Keshav", 2, "Hindi", 5, "Male");
console.log(baby.describe());