let weather = 65;

if(weather < 70){
    console.log('Wear a jacket!');
} else{
    console.log('No jacket needed!');
}


let name = 'Aaron'

if(name == 'Aaron'){
    console.log('Hello, my name is ' + name)
} else {
    console.log('Hello, is your name ' + name + '?')
}


// challege 2

//bronze

let name = 'aUTuMN';

if (name.charAt(0) == name.charAt(0).toUpperCase()){
    console.log(name);
} else {
    console.log('hey its not written correctly')
}

//silver

let name = 'aUTuMN';

if (name[0] == name[0].toUpperCase()){
    console.log(name[0]);
} else {
    console.log(name.substr(1).toLowerCase());
}

//gold

let name = 'aUTuMN';

if (name[0] == name[0].toUpperCase()){
    console.log(name[0] + name[0].toLowerCase());
} else {
    console.log(name[0].toUpperCase() + name.substr(1).toLowerCase());
}