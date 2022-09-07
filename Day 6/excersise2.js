//----------------------------------------------------->
//1
console.log('----------------')
let passStr = '1234567890qwertyuiopasdfghjklzxcvbnm!@#$%^&*'
let passLen = passStr.length
let password = ''
let realLen = Math.floor(Math.random() * passLen)
for (let i = 0; i < realLen; i++ ){
   let num = Math.floor(Math.random() * passLen) 
   password+= passStr.charAt(num)
}
console.log(password)

//----------------------------------------------------->
//2 Write a script which generates a 
//random hexadecimal number.
console.log('----------------')
let hex = (Math.random() * 0xfffff * 1000000).toString(16)
let randHex =  '#' + hex.slice(0, 6)
console.log(randHex)
//----------------------------------------------------->
//3 Write a script which generates a random rgb color number.
let r = Math.floor(Math.random() * 255)
let g = Math.floor(Math.random() * 255)
let b = Math.floor(Math.random() * 255)
console.log('----------------')
console.log(`rgb(${r},${g},${b})`)
//----------------------------------------------------->
//4 using the countries array, create the following new array.
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", 
//"ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY",
// "IRELAND", "JAPAN", "KENYA"]
let countries = [
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
  console.log('----------------')
  let strX = countries.toString().toUpperCase()
  let capArr = strX.split(',')
  console.log(capArr)
//----------------------------------------------------->
//5 Using the above countries array, create an array for countries length'.
console.log('----------------')
let arrLen = []
for (var i = 0; i < countries.length; i++){
    arrLen.push(countries[i].length)
}
console.log(arrLen)
//----------------------------------------------------->
//6 Use the countries array to create the following array of arrays:

console.log('----------------')

let finArry2 = []
for (let i = 0; i < countries.length; i++){
    let finArry = []
    finArry.push(countries[i])
    finArry.push(capArr[i].slice(0,3))
    finArry.push(arrLen[i])
    finArry2.push(finArry)
}
console.log(finArry2)
//----------------------------------------------------->
//7 In above countries array, check if there is a 
//country or countries containing the word 'land'. 
//If there are countries containing 'land', print 
//it as array. If there is no country containing 
//the word 'land', print 'All these countries are 
//without land'.
console.log('----------------')
let landArry = []
for (let i = 0; i < countries.length; i++){
    if (countries[i].includes('land')){
        landArry.push(countries[i])
    }
    if ( i == countries.length -1){
        if(landArry == []){
            console.log(countries)
        }else{
            console.log(landArry)
        }   
    }
}
//----------------------------------------------------->
//8 in the above countries array, check if there is a 
//country or countries end with a substring 'ia'. 
console.log('----------------')
let iaArry = []
for (let i = 0; i < countries.length; i++){
    if (countries[i].includes('ia')){
        iaArry.push(countries[i])
    }
    if ( i == countries.length -1){
        if(iaArry == []){
            console.log(countries)
        }else{
            console.log(iaArry)
        }   
    }
}
//----------------------------------------------------->
//9 sing the above countries array, find the country containing the biggest number of characters.
console.log('----------------')
if (iaArry[0].length > iaArry[1].length){
    (iaArry[0].length > iaArry[2].length);{
        console.log(iaArry[0])

    }elseif(iaArry[1].length > iaArry[2].length);{
        console.log(iaArry[1])
    }
}else{
    console.log(iaArry[2])
}
//----------------------------------------------------->
//10 Using the above countries array, find the country containing only 5 characters.
console.log('----------------')
let fiveArry = []
for (let i = 0; i < countries.length; i++){
    if (countries[i].length == 5){
        fiveArry.push(countries[i])
    }
    if ( i == countries.length -1){
        if(fiveArry == []){
            console.log(countries)
        }else{
            console.log(fiveArry)
        }   
    }
}
//----------------------------------------------------->
//11
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
  let longest = 'HTML'
  for (let i =0; i< webTechs.length; i++){
    if(longest.length < webTechs[i].length){
        longest = webTechs[i]
    }
  }
  console.log(longest)
//----------------------------------------------------->
//12 Use the webTechs array to create the following 
//array of arrays:
console.log('----------------')

let arry = []
for (let i = 0; i < webTechs.length; i++){
    let frry = []
    frry.push(webTechs[i])
    frry.push(webTechs[i].length)
    arry.push(frry)
}
console.log(arry)
//----------------------------------------------------->
//13 An application created using MongoDB, Express, 
//React and Node is called a MERN stack app. 
//Create the acronym MERN by using the array mernStack
console.log('----------------')
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let acronym = ''
for (let i = 0; i < mernStack.length; i++){
    acronym += mernStack[i].slice(0,1)
}
console.log(acronym)
//----------------------------------------------------->
//14 Iterate through the array, 
//["HTML", "CSS", "JS", "React", "Redux", "Node",
// "Express", "MongoDB"] using a for loop or for of loop and print out the items.
let looper = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
console.log('----------------')

for(ele of looper){
    console.log(ele)
}
//----------------------------------------------------->
//15 This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse
// the order using loop without using a reverse method.
console.log('----------------')
let nfruit = []
let fruits = ['banana', 'orange', 'mango', 'lemon']
for(fruit of fruits){
    nfruit.unshift(fruit)
}
console.log(nfruit)
//----------------------------------------------------->
//16 Print all the elements of array as shown below.
/*
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
  */
console.log('----------------')
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

for(stack of fullStack){
    for (ele of stack){
        console.log(ele)
    }
}
