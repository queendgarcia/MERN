//Shorthand - is avoids writing redundant variable name, when key of our object and the the value stored in object are same

let cat = "Miaow", // if we put comma we don't need to use let again and it will continue as let till semicolon ;
dog = "Woof",
bird = "Chirp",
lion = "roar";

let AnimalSound = {
    cat : cat,
    dog : dog,
    bird : bird,
    lion : lion
}

console.log("Animal Sounds are " +AnimalSound) //AnimalSound.toString() - [object] object

console.log("Animal Sounds are " + JSON.stringify(AnimalSound))

let AnimalSoundES6 = {cat, dog, bird, lion}
console.log("Animal Sounds are ", AnimalSoundES6) // , in log automatically converts JSON object to string values

module.exports = AnimalSoundES6;