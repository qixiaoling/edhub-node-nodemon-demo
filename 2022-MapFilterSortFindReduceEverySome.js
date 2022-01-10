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