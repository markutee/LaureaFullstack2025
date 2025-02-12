const math = require('./math');
const stringUtils = require('./stringUtils');
const dateUtils = require('./dateUtils');
const today = dateUtils.getCurrentDate();

console.log("Hello, Node.js!")                       //tehtävä 2

console.log(math.add(5,3));                          //tehtävä 3
console.log(math.subtract(10,4));

console.log(stringUtils.toUpperCase('hoi'));
console.log(stringUtils.reverseString('maailma'));

console.log('Current Date:', today);
console.log('Formatted Date:', dateUtils.formatDate(today));
