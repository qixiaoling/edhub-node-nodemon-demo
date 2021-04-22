
const divided = require('./codeTEST').divided;
const makePersonObject = require('./codeTEST').makePersonObject;


test('The makenPersonObject() funtion ' +
    'makes up a person with the variables that it receives',() =>{
        const personName = 'Micky';
        const personAge = 25;

        const personObject = makePersonObject(personName, personAge);

        expect(personObject).toHaveProperty('name');
        expect(personObject).toHaveProperty('age', personAge);

        expect(personObject).not.toHaveProperty('profession');

    });

test('The divided function should return the result of num1 dividing num2', ()=>{
        const num1 = 10;
        const num2 = 5;

        const resultDiv = divided(num1, num2)

        expect(resultDiv). toBe(2);
})