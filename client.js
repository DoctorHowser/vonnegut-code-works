//let myAnniversary = 'August 11, 2012';

let myAnniversary; //undefined

myAnniversary = 'August 11, 2012'; //string

let isCool = true;
let age = 36;

// arrays
let myList = [1,2,3];

// object
let myDog = {
    name : 'Dane jr!',
    age: 4
}

// Expressions

let sum = 2 + 2; //4

let month = '8';
let day = '11';
let year = '2012';

myAnniversary = Number(month) + parseInt(day) + parseFloat(year);

//`${month} ${day} ${year}`
console.log(myAnniversary);





let mph = 60;
let distanceToMoon = 230940;

let hoursToDriveToMoon = distanceToMoon / mph;

if(hoursToDriveToMoon > 3) {
    console.log('ooooooof far away');
}

let distanceToDuluth = 150;
let hoursToDriveToDuluth = distanceToDuluth / mph;
// 150 / 60
// 2.5
console.log(hoursToDriveToDuluth);

if (hoursToDriveToDuluth < hoursToDriveToMoon) {
    //2.5 < 230940
    // true
    console.log(
        'Maybe lets go up north instead...'
    );
} 

if(hoursToDriveToDuluth == 3) {
    console.log('hmmmm');
} 

if(true){
    console.log('meh');
}


let piggies = ['market', 'home', 'roast beef', 'none', '🤣🤣🤣🏡'];


for(let i = 0; i < piggies.length; i++) {
    //i is 0. piggies[0] is 'market'
    //i is 1. piggies[1] is 'home'
    //i is 2. piggies[2] is 'roast beef'
    //i is 3. piggies[3] is 'none'
    //i is 4. piggies[4] is '🤣🤣🤣🏡'
    //i is 5. Loop stops.

    console.log('this little piggy went to ' + piggies[i] )
}

console.log('all done with the loop!');

for(let piggy of piggies) {
    console.log('this little piggy went to ' + piggy);

    if(piggy === 'roast beef') {
        console.log('yum!')
    }

}

function protectHome(typeOfHome) {
    if(typeOfHome === 'brick') {
        return '🐷 Not by the hair of my chinny chin chin';
    } else {
        return '🐷 🤐';
    }
}

console.log('🐺 Let me in!');

let pigsResponse = protectHome('straw');

console.log(pigsResponse);

let houses = ['straw', 'wood', 'brick'];

for(let house of houses) {
    let result = protectHome(house);
    console.log(result);
}