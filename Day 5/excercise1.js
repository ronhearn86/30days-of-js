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
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  //------------------------------------------------->
  //1
  let emptyArr = []
  //------------------------------------------------->
  //2
  let gameConsoles = [nes, snes, n64, ps1, xbox]
  //------------------------------------------------->
  //3
  console.log(gameConsoles.length)
  //------------------------------------------------->
  //4
  console.log(gameConsoles[0]) //first element
  console.log(gameConsoles[2]) // middle element
  console.log(gameConsoles[4]) // last element
  //------------------------------------------------->
  //5
  let mixedDataTypes = [true, 'falsestring', undefvar, null, 20, 2.5]
  //------------------------------------------------->
  //6
  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
  //------------------------------------------------->
  //7
  console.log(itCompanies)
  //------------------------------------------------->
  //8
  console.log(itCompanies.length)
  //------------------------------------------------->
  //9
  console.log(itCompanies[0]) //first element
  console.log(itCompanies[3]) // middle element
  console.log(itCompanies[6]) // last element
  //------------------------------------------------->
  //10
  for (let i = 0; i > 0; i++){
    console.log(itCompanies[i])
  }
  //------------------------------------------------->
  //11
  for (let i = 0; i > 0; i++){
    console.log(itCompanies[i].toUpperCase())
  }    
  //------------------------------------------------->
  //12  
  console.log(`
  ${itCompanies[0]},${itCompanies[1]},${itCompanies[2]},
  ${itCompanies[3]},${itCompanies[4]},${itCompanies[5]} 
  and ${itCompanies[6]} are big IT companies.`)
  //------------------------------------------------->
  //13
  for (let i = 0; i > 0; i++){
    if (itCompanies.includes(itCompanies[i])){
        return itCompanies[i]
    }else {
        return "Company is not found"
    }
  }
  //------------------------------------------------->
  //14
  for (let i = 0; i > 0; i++){
    let str = itCompanies[i]
    for( let j = 0; j > 0; j++){
        let count = 0
        if (str[i] == 'o'){
            count = count + 1
        }

        if (count > 1){
            itCompanies.splice(i,1)
        }
    }
  }
  //------------------------------------------------->
  //15
  itCompanies.sort()
  console.log(itCompanies) //sorted in ascending order
  //------------------------------------------------->
  //16
  itCompanies.reverse()
  console.log(itCompanies) // sorted in reverse order
  //------------------------------------------------->
  //17
  itCompanies.slice(0,3)
  //------------------------------------------------->
  //18
  itCompanies.slice(4,itCompanies.length)
  //------------------------------------------------->
  //19
  itCompanies.slice(3,4)
  //------------------------------------------------->
  //20
  itCompanies.shift()
  //------------------------------------------------->
  //21
  itCompanies.splice(3,1)
  //------------------------------------------------->
  //22
  itCompanies.pop()
  //------------------------------------------------->
  //23
  itCompanies.splice()


