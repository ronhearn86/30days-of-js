const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const unionOne = [...a,...b]
console.log(unionOne)

const A = new Set(a)
const B = new Set(b)

const c = a.filter((num) => B.has(num))
const C = new Set(c)
console.log(C)

let d = a.filter((num) => !B.has(num))
let D = new Set(d)

console.log(D)