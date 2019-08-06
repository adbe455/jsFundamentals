//Hoisting

//code does not get moved around


b();
console.log(a);

function b(){
    console.log('this is all hoisted');
}

var a = 'this is not hoisted';