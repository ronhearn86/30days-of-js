  //------------------------------------------------->
  //1
  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
  console.log(ages.sort())

  console.log(ages[0]) //min age

  let lastIndex = ages.length - 1
  console.log(ages[lastIndex]) // max age

  let median = (ages[4] + ages[5]) / 2 //median age
  console.log(median)

  let range = ages[lastIndex] - ages[0] //range
  console.log(range)

  let minAverage = Math.abs(ages[0] - median)
  console.log(minAverage)

  let maxAverage = Math.abs(ages[lastIndex] - median)
  console.log(maxAverage)   // min > max
  //------------------------------------------------->
  //2
  const {countries} = require('./countries')

  let modCountries = countries.slice(0,10)
  console.log(modCountries) //first 10 countries
  //------------------------------------------------->
  //3
  console.log(modCountries[4])
  console.log(modCountries[5]) //middle countires
  //------------------------------------------------->
  //4
  //split countires array into  2 arrays, add a country
  //if not even
  let countriesOne = []
  let countriesTwo = []

  if (modCountries.length % 2 == 0){
    for (let i  = 0; i < modCountries.length; i++){
        
        if (i < modCountries.length /2){
            countriesOne += modCountries[i] + " "
            
        }else{
            countriesTwo += modCountries[i] + " "
            
        }
    }
  }else{
   modCountries.unshift('U.S.A')
    for (let i  = 0; i < modCountries.length; i++){
        
        if (i < modCountries.length /2){
            countriesOne += modCountries[i] + " "
            
        }else{
            countriesTwo += modCountries[i] + " "
            
        }
    }
  }



console.log(countriesOne)
console.log(countriesTwo)


