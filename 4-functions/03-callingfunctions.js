function hi(){
    console.log('HI');
}

hi();
//This is how we call our function



//Challenge

function count(){
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}

count();

//Challenge 2

let arr = ['This', 'is', 'really', 'cool'];

function listArray(array){
    for(let i in array){
        console.log(array[i]);
    }
}

listArray(arr);