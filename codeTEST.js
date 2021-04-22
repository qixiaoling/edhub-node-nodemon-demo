


function makePersonObject (firstname, age){
    return{
        name: firstname,
        age:age,
    }
}
function divided(num1, num2){
    return num1/num2;
}

module.exports = {
    divided: divided,
    makePersonObject: makePersonObject,
}