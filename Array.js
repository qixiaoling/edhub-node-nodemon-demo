// ==========================================
// 1. Declareer een variabele en sla daar een array met vier jaartallen (zoals 2021) in op. Log dit in de terminal.
// ==========================================
const jaren = [2018, 2019, 2020, 2021]
console.log(jaren)

// ==========================================
// 2. Declareer een variabele en sla daar een array met drie van jouw hobbies (zoals muziek luisteren en koekjes eten) in op. Log dit in de terminal.
// ==========================================
const hobbies = ['gardening', 'music', 'reading']
console.log(hobbies)

// ==========================================
// 3a. Declareer een variabele met daarin een array met de waardes 3, 4, 5, 7 en 2
const numbers = [3, 4, 5, 7, 2]
// 3b. Zorg er nu voor dat je de eerste waarde uit die array in de terminal logt             // geeft 3
// ==========================================
console.log(numbers[0])

// ==========================================
// 4a. Declareer een variabele met daarin een array met de waardes groen, geel, rood, paars, blauw en oranje.
const colors = ['groen', 'geel', 'rood', 'paars', 'blauw', 'oranje']
// Nu gaan we de waardes weer aanspreken!
console.log(colors)
// 4b. Zorg ervoor dat je de vijfde waarde uit bovenstaande array in de terminal logt       // geeft blauw
console.log(colors[colors.length-2])
// 4c. Zorg ervoor dat je de tweede waarde uit bovenstaande array in de terminal logt       // geeft geel
console.log(colors[1])
// ==========================================


// ==========================================
// 5a. Declareer een variabele met daarin een array met de waardes 21, 22, 23, 25, 25 en log dit in de terminal
const num = [21, 22, 23, 25, 25]
console.log(num)
// 5b. Overschrijf één van de items in de array dusdanig dat de cijferreeks netjes doorloopt (je mag de declaratie op de vorige regel niet aanpassen).
num[3] = 24
// 5c. Log de array in de terminal                                                          // geeft [ 21, 22, 23, 24, 25 ]
// ==========================================
console.log(num)

// ==========================================
// 6a. Declareer een variabele met daarin een array met de waardes bladerdeeg, knoflook, spinazie
const recipe = ['bladerdeeg', 'knoflook' , 'spinazie']
// 6b. Overschrijf daarna de waarde bladerdeeg met lasagne bladen (je mag de declaratie op de vorige regel niet aanpassen).
recipe[0] = 'lasagne bladen'
// 6c. Log de de array in de terminal                                                       // geeft [ 'lasagne bladen', 'knoflook', 'spinazie' ]
console.log(recipe)
// 6d. Log de lengte van de array in de terminal                                            // geeft 3
console.log(recipe.length)
// ==========================================