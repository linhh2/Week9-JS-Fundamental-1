const age = 23;

const drink = age >= 18 ? 'wine π·' : 'water π§';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine π·';
} else {
    drink2 = 'waterπ§'
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine π·' : 'water π§'}`)

