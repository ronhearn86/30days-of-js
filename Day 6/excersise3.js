const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
//----------------------------------------------------->
//1 Copy countries array(Avoid mutation)
let copy = countries.slice()
copy.sort()
console.log(copy)
//----------------------------------------------------->
//2 Arrays are mutable. Create a copy of array which does
//not modify the original. Sort the copied array and 
//store in a variable sortedCountries
console.log('----------------')
const sortedCountries = copy.sort()
console.log(sortedCountries)
//----------------------------------------------------->
//3 Sort the webTechs array and mernStack array
console.log('----------------')
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  let copy2 = webTechs.slice()
  let webCopy = copy2.sort()

  let copy3 = mernStack.slice()
  let mernCopy = copy3.sort()
console.log(webCopy)
console.log(mernCopy)
//----------------------------------------------------->
//4
console.log('----------------')
let landed = []
for(count of countries){
    if (count.includes('land')){
        landed.push(count)
    }
}
console.log(landed)
//----------------------------------------------------->
//5
console.log('----------------')
let countriesLen = 'Al'
for (let i = 0; i< countries.length; i++){
    if (countries[i].length > countriesLen.length){
        countriesLen = countries[i]
    }
}

console.log(countriesLen)
