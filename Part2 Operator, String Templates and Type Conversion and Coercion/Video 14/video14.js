
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah); 

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 //

const firstName = 'Jonas';
const lastName = 'Schemdtmann';
console.log(firstName + ' ' + lastName); 

let x = 10 + 5; // 15
x += 10; //x = x+10 = 25
x *= 4; // x = x * 4 = 100 
x ++; //x = x + 1
x--; // x=x-1
x--; 
console.log(x);

// Comparison operators 
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >=18);  


const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018)