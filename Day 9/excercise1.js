const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Ethiopia']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook', 2]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: 1 },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: 2 },
]

const countriesCounter = countries.forEach(element => console.log(element))
const nameCounter = names.forEach(element => console.log(element))
const numCounter = numbers.forEach(element => console.log(element))

// const countryUp = countries.map(element => element.toUpperCase())
// console.log(countryUp)

const countryArr = countries.map(element => element.length)
console.log(countryArr)
const numSq = numbers.map(element => element * element)
console.log(numSq)
// const nameUp = names.map(element => element.toUpperCase())
// console.log(nameUp)
const price = products.map(element => element.product + " " + element.price)
console.log(price)

const land = countries.filter(element => element.toUpperCase().includes('LAND'))
console.log(land)
const sixChar = countries.filter(element => element.length < 7)
console.log(sixChar)
const moreChar = countries.filter(element => element.length > 5)
console.log(moreChar)
const starWithE = countries.filter(element => element.startsWith('E'))
console.log(starWithE)
const pricez = products.filter(element => element.price > 2)
console.log(pricez)

const getStringLists = function(arr) {
    let val = arr.filter(element => typeof element === 'string')
    return val
}
console.log(getStringLists(names))

const concat = countries.reduce((acc, cur) => acc + ', ' + cur )

console.log(concat + ' are north European countries')

const someMethod = names.some(element => element.length > 7)
console.log(someMethod)
const everyMethod = names.every(element => element.includes('land'))
console.log(everyMethod)

const finder = countries.find(element => element.length == 6)
console.log(finder)
const finderIndex = countries.findIndex(element => element.length == 6)
console.log(finderIndex)
const findNorway = countries.findIndex(element => element =='Norway')
console.log(findNorway)
const findRussia = countries.findIndex(element => element == 'Russia')
console.log(findRussia)

