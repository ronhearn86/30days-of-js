const {constants, countries, rectangle} = require('./data');

//1.Destructure and assign the elements of constants array
const [e, pi, gravity, humanBodyTemp, waterBoilingPoint] = constants
console.log(e,pi,gravity, humanBodyTemp, waterBoilingPoint)

//2 Destructure and assign the elements of countries array
const [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)

//3 Destructure the rectangle object by its properties or keys.
const {width: w, height: h, area: a, perimeter: p} = rectangle
console.log(w, h, a, p)

