// ===  Opdracht 1 ===
// Maak een object met daarin jouw voornaam (string), achternaam (string), leeftijd (getal) en geboortedatum (date object). De datum hoeft niet geformat te worden.
// Log dit in de terminal.
const me = {
    firstName : 'Xiaoling',
    lastName : 'Qi',
    age : 37,
    birthday : '06-06-1983'

}
console.log(me)

// ===  Opdracht 2 ===
// Zorg ervoor dat de volgende string in de terminal wordt gelogd:
// "Hoi! Ik ben <voornaam>, ik ben <leeftijd> jaar oud."
console.log('Hoi! Ik ben' + me.firstName + ', ik ben '+ me.age + 'jaar oud.')

// === Opdracht 3: bekijk het volgende object ===

const product = {
    productName: "Smeg Waterkoker",
    series: "Smeg jaren 50 retro lijn",
    material: ["roestvrijstaal", "kunststof"],
    color: "creme",
    wireless: false,
    "b-h-d": "17 x 24,6 x 22,3 cm",
};

// 3a. Log de naam van de serie in de terminal.
console.log(product.productName)

// 3b. Overschrijf de oude waarde van de property color ("creme") naar "roze". Log het object in de terminal om te checken of het gelukt is.
product.color = "roze";
console.log(product)
// 3c. Log de tweede materiaalsoort ("kunststof") in de terminal
console.log(product.material[1])
// 1d. Log de afmetingen (b-h-d) in de terminal
console.log(['b-h-d'])

// === Opdracht 4 ===
// Declareer een variabele met daarin een string die het product beschrijft. Gebruik hiervoor de properties productName en material uit het object.
// ---- Verwachte uitkomst:
// "De Smeg Waterkoker is gemaakt van roestvrijstaal en kunststof"

const zin = 'De' + product.productName + ' is gemaakt van '+ product.material[0] + ' en ' + product.material[1]

console.log(zin)