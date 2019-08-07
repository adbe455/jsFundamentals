//FAT ARROW FUNCTIONS

let hi = () => {
//     1    2
    console.log('hello!');
}

// -> IS NOT THE SAME AS =>
//1 we need to set the fat arrow function to a variable
//2 we use the fat arrow to signify it is a function

//Block body
let hi = () => {
    //     1    2
        console.log('hello!');
    }

//Concise body
let hi = () => console.log('hi');
let apples = x => console.log(`There are ${x} apples in the basket`)
apples(10);

//More than one parameter will require parenthesis
//Do not use linebreaks

let apples = x => {
    console.log(`There are ${x} apples in the basket`)
}
apples(10);
