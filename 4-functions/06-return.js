let hi = () => {
    return 'hi';
}

let newName = hi();
//     1       2

console.log(newName);


//1 the keyword that brings our data out of our function
//2 we need a new variable to hold the value of the return
//3 when called, the function becomes the value of the return

let capitalizedName = (name) => {
    let capName = '';
    for(let letter in name){
        if(letter == 0){
            capName += name[letter].toUpperCase();
        } else {
            capName += name[letter].toLowerCase();
        }
    }
    return capName;
}

// console.log(capName); error

const myName = capitalizedName('aArON');
console.log(myName + ' how are you doing?');


//Challenge

function tipCalc(total){
    return total * 0.2
}
let cost = tipCalc(40)
console.log(cost)

//or

let tipCalc = (total) => {
    return total * 0.2;
}
let cost = tipCalc(40);
console.log(cost);