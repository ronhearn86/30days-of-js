let dog = {
    name: 'sparky',
    color: 'white',
    legs: 4,
    age: 5,
    bark: true,
    arry: [1,2,3,4,5,6]
}
console.log(dog.name)
console.log(dog.color)
console.log(dog.legs)
console.log(dog.age)
console.log(dog.bark)
dog.arry.push(false)
console.log(dog)
dog.breed = 'husky'
console.log(dog)
dog.getDogInfo = "Elderly Dog"
//---------------------------------------------->

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
      Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
      }
    }
    let most = 0
    let person = ''
for (key in users){

    if (users[key].skills.length >= most){
        most = users[key].skills.length
        person = key
    }


}
console.log(most)
//---------------------------------------------->
console.log('person with most skills is ' + person)
// greater than 50 points
let count = 0
for (key in users){
    if(users[key].points >= 50){
        count++
    }
}
console.log(count)
//---------------------------------------------->
for (key in users){
    if (users[key].skills.includes('MongoDB' && 'Express' && 'React' && 'Node')){
        console.log(key)
    }
}
//---------------------------------------------->
users['Ron'] = {    
    email: 'ron@ron.com',
    skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'MongoDB',
    'Express',
    'React',
    'Node'
    ],
    age: 36,
    isLoggedIn: false,
    points: 69
    }

console.log(users)
//---------------------------------------------->
for (key in users){
    console.log(key)
}

//---------------------------------------------->
for (key in users){
    console.log(users[key])
}

//---------------------------------------------->
const countires = {
    USA: {
    name: 'United States of America',
    capitol: 'Washington D.C.',
    population: '340 million',
    languages: 'English'
           },

    Panama: {
        name: 'Panama',
        capitol: 'Panama City',
        population: '20 million',
        languages: 'Spanish'}
}
for (key in countires){
    console.log(key)
    console.log(countires[key].name +' ' +countires[key].capitol)
}
