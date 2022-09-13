const {countriesb} = require('./coumt')
console.log(countriesb.map(country => country
    .name)
    .sort())

console.log(countriesb
    .map(country => country.capital)
    .sort())

console.log(countriesb.map(country => country
    .population)
    .sort(function (a,b){ return a-b}))

const language = countriesb.map(country => country.languages)

const objd = {}
const mostSpoken = (arr,num)=> {
    
    for(let i =0; i< arr.length; i++){
     for(key of arr[i]){
            objd[key] = objd[key] +1 || 1  
        
     }
     
    }
    
    let entries = Object.entries(objd);
    let sorted = entries.sort((a, b) =>  b[1] - a[1] );
    return sorted.splice(0,num)
}
console.log(mostSpoken(language,10))
