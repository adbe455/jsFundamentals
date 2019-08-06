let number = 6;

if(number>0){
    console.log(true);
}else{
    console.log(false);
}

(number > 0) ? console.log(true) : console.log(false);

if (number == 0){
    console.log('number is 0');
}else if(number >= 5){
    console.log('number is bigger than 5')
}else if(number <= 0){
    console.log('number is smaller than 0')
}else{
    console.log('nope')
}




let number = 6;

(number == 0) ? console.log('number is 0') : (number >=5) ? console.log('number is bigger than 5') : (number < 0) ? console.log('number is smaller than 0') : console.log('nope')


let age = 30;

(age >= 25) ? console.log("you can rent a car") 
: (age >= 21) ? console.log("you can drink") 
: (age >= 18) ? console.log("you can vote") 
: console.log("you cant do anything")