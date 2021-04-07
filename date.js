const today = new Date()
console.log(today)

const rightNow1 = new Date('April 07, 2021 00:00:00')
console.log(rightNow1)
const rightNow2 = new Date(2021, 4, 7, 12, 34, 55)
console.log(rightNow2)
const rightNow3 = new Date(2021, 4, 7)
console.log(rightNow3)

const nu = rightNow3.getTime()
console.log(nu)
console.log(rightNow3.getDay())

console.log("english vs dutch")
console.log(rightNow3.toDateString())
console.log(rightNow3.toLocaleString())
console.log(rightNow3.toLocaleDateString())
console.log(rightNow3.toLocaleTimeString())

const dateOfBirth = new Date (1983, 6,6)

const englishDate = dateOfBirth.toDateString()
console.log("In english: "+ englishDate)

const longOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}

const shortOptions = {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
}

const DutchLongDate = dateOfBirth.toLocaleDateString('nl-NL', longOptions);
console.log("In Dutch Long : "+ DutchLongDate)

const DutchShortDate = dateOfBirth.toLocaleDateString('nl-NL', shortOptions);
console.log("In Dutch Short : " + DutchShortDate)