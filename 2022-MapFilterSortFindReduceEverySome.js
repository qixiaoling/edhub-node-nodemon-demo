//jamesqquick
// javascript-array-functions-practice

const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const allNames = characters.map((character)=>character.name);
console.log(allNames);
//2. Get array of all heights;
const allHeights = characters.map((character) => character.height);
console.log(allHeights);
//3. Get array of objects with just name and height properties
const nameAndHeight = characters.map((character)=> (
    {
        name: character.name,
        height:character.height,
    }
))
console.log(nameAndHeight);
//4. Get array of all first names
const firstNameArray = characters.map((character)=> {
    return character.name.split(" ")[0];
})
console.log(firstNameArray);
//***FILTER***
//1. Get characters with mass greater than 100
const massGreatThan100 = characters.filter((character) => character.mass > 100);
console.log(massGreatThan100);
//2. Get characters with height less than 200
const heightLessThan200 = characters.filter((character)=> character.height < 200);
console.log(heightLessThan200);
//3. Get all male characters
const maleArray = characters.filter((character)=> character.gender === 'male');
console.log(maleArray);
//4. Get all female characters
const femaleArray = characters.filter((character) => character.gender === 'female');
console.log(femaleArray);

//***SORT***
//1. Sort by mass
const byMass = characters.sort(function(a, b){
    return (a.mass - b.mass);
    //this is from small to large.
})
console.log(byMass);
//below is to take the mass out first and then sort the mass numbers, which is not what the question is about.
// const sortArrayBasic = characters.map((character) => {
//     return character.mass;
// })
// const sortResultMass = sortArrayBasic.sort(function(a, b){
//     return a-b;
// })
// console.log(sortResultMass);
//2. Sort by height
const byHeight = characters.sort((a,b)=>{
    return a.height - b.height;
})
console.log(byHeight);
//3. Sort by name
const byName = characters.sort((a,b)=>{
    if(a.name < b.name) {
        return -1;//-1 will be shown first
    }else{
        return 1;
    }
});

console.log(byName);
//4. Sort by gender
const byGender = characters.sort((a,b)=>{
    if(a.gender === 'female'){
        return -1;//-1 will be shown first
    }else {
        return 1;
    }
})
console.log(byGender);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((accumulator, currentItem)=>{
    return accumulator + currentItem.mass;
}, 0);
//2. Get total height of all characters
const totalHeight = characters.reduce((acc, currentItem)=>{
    return acc + currentItem.height;
}, 0)
//3. Get total number of characters by eye color
const totalNrPerEyeColor = characters.reduce((acc, cur)=>{
   const color = cur.eye_color;
   if(acc[color]) {//in this case, we cannot just simple add a property, as we that property is a variable!!!
       acc[color] ++;
   }else{
       acc[color] = 1;
   }
   return acc;
},{})
console.log(totalNrPerEyeColor);

//there are two ways to add key/value pair to an object:
//////////////3.1 // program to add a key/value pair to an object///////////////////////
//
// const person = {
//     name: 'Monica',
//     age: 22,
//     gender: 'female'
// }
//
// // add a key/value pair
// person.height = 5.4;
//
// console.log(person);
// {
//     name: "Monica",
//         age: 22,
//     gender: "female",
//     height: 5.4
// }

//////////////////////// 3.2 program to add a key/value pair to an object///////////////////////////////

// const person = {
//     name: 'Monica',
//     age: 22,
//     gender: 'female'
// }
//
// // add a key/value pair
// person['height'] = 5.4;
//
// console.log(person);
//
// {
//     name: "Monica",
//         age: 22,
//     gender: "female",
//     height: 5.4
// }



//4. Get total number of characters in all the character names
const totalChar = characters.reduce((acc, cur)=>{
   return acc + cur.name.length;
},0)
console.log(totalChar);

const totalCharAsObj = characters.reduce((acc, cur)=>{
    //this code is not working b/c you cannot just create a property.
    //not like the example above, where the color property is actually defined as a REAL property that
    //comes from the cur.
    return  acc.number + cur.name.length;

},{})
console.log(totalCharAsObj)
//***EVERY***
//1. Does every character have blue eyes?
const allBueEyes = characters.every((character)=> character.eye_color === 'blue');
console.log(allBueEyes);
//2. Does every character have mass more than 40?
const allMassMoreThan40 = characters.every((character)=> character.mass > 40);
console.log(allMassMoreThan40);
//3. Is every character shorter than 200?
const allShorterThan200 = characters.every((character)=> character.height < 200);
console.log(allShorterThan200);
//4. Is every character male?
const allMale = characters.every((character)=> character.gender === 'male');
console.log(allMale);

//***SOME***
//1. Is there at least one male character?
const atLeastOneMale = characters.some((character)=> character.gender === 'male');
console.log(atLeastOneMale);
//2. Is there at least one character with blue eyes?
const atLeastOneBlueEyes = characters.some((character)=> character.eye_color === 'blue');
console.log(atLeastOneBlueEyes);
//3. Is there at least one character taller than 210?
const atLeastOneTallerThan210 = characters.some((character)=> character.height > 210);
console.log(atLeastOneTallerThan210);
//4. Is there at least one character that has mass less than 50?
const atLeastOneMassLessThan50 = characters.some((character)=> character.mass < 50);
console.log(atLeastOneMassLessThan50);


