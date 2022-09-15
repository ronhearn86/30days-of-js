const {users} = require('./data')

const lessThanTwo = []
for (const {name, scores, skills, age} of users ){
    console.log(name, scores, skills, age)
    if(skills.length < 2){
        lessThanTwo.push(name)
    }
    }
    
console.log(lessThanTwo + ' has less than 2 skills')

