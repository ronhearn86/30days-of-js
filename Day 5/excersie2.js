//---------------------------------------------------->
//1
const {countries} = require('./countries')
const {webTechs} = require('./webTechs')

//---------------------------------------------------->
//2
let text =
`I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.`

let textArry = text.split(" ")
console.log(textArry.length)
//---------------------------------------------------->
//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart.splice(4, 1)
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)
//---------------------------------------------------->
//4
for (let i = 0; i < countries.length; i++){
    if (countries[i].toLowerCase() == 'ethiopia'){
        console.log('ETHIOPIA')
        break;
    }else if(i == countries.length - 1){
        countries.push("Ethiopia")
    }
}

//---------------------------------------------------->
//5
for (let i = 0; i < webTechs.length; i++){
    if (webTechs[i].toUpperCase() == 'SASS'){
        console.log('Sass is a CSS preprocess')
        break;
    }else if(i == webTechs.length -1){
        countries.push("Sass")
        console.log(webTechs)
    }   
}

//---------------------------------------------------->
//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd +"," + backEnd
console.log(fullStack)