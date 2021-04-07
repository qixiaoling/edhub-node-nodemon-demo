
function makePersonObject (firstname, age){
    return{
        name: firstname,
        age:age,
    }
}



test('The makenPersonObject() funtion ' +
    'makes up a person with the variables that it receives',() =>{
        const personName = 'Micky';
        const personAge = 23;

        const personObject = makePersonObject(personName, personAge);

        expect(personObject).toHaveProperty('name');
        expect(personObject).toHaveProperty('age', personAge);

        expect(personObject).not.toHaveProperty('profession');

    });