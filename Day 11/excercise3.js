const countries = require('./countries_data')

//1 Destructure the countries object print name, 
//capital, population and languages of all countries
for (const {name, capital, population, languages} of countries){
    console.log(name, capital,population,languages)
}
//2 A junior developer structure student name, skills 
//and score in array of arrays which may not easy to read.
//Destructure the following array name to name, skills 
//array to skills, scores array to scores, JavaScript 
//score to jsScore and React score to reactScore variable
// in one line.
const studentz = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name2, skills, [,,jsScore, reactScore]] = studentz

console.log(name2,`(${skills.length})`, skills,jsScore, reactScore )

//3 Write a function called convertArrayToObject which 
//can convert the array to a structure object.

const studentss = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
function convertArrayToObject(arr){
    let users = {}
        const [[ name, skills, scores],[ name2, skills2, scores2]] = arr
        const user = {...users,name:name, skills:skills, scores:scores,
                             name2:name2, skills2: skills2, scores2:scores2} 
        users = {...user}

return users
}
console.log(convertArrayToObject(studentss))
