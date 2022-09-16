//1
const str = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const regEx = /-?\d+/gi
const earningsArr = str.match(regEx)
const monthly = Number(earningsArr[0]) + Number(earningsArr[2])
const yearly = monthly * 12 + Number(earningsArr[1])
console.log(yearly)

//2

//           |
//           |          
//-12---4-3-10---4---8------       
//           |         
//           |
const secStr = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
const xNumArr = secStr.match(regEx)
let distance = 0
const start = Number(xNumArr[0])
const end  = Number(xNumArr[xNumArr.length -1])
for(let i = start; i < end; i++){
distance++
}
console.log(distance)

//3 Write a pattern which identify if a string is a valid JavaScript variable
const pattern = /-?^[a-z]/g
function is_valid_variable(str){
    let result = pattern.test(str)
    return result
} 

console.log(is_valid_variable('first_name')) // True
console.log(is_valid_variable('first-name')) // False
console.log(is_valid_variable('1first_name')) //False
console.log(is_valid_variable('firstname')) //True

