const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

  const totalPrice = products.map(product => product.price)
  .filter(price => price > 0)
  .reduce((a,b) =>  a + b, 0 )

  console.log(totalPrice)

  const onlyRduce = products.reduce((acc, ojb) => acc + Number(ojb.price),0)
  console.log(onlyRduce)

  const {countries} = require('./countires')
  const countriesInc = countries.filter(countries => countries.includes('land') + countries.includes('ia') +
  countries.includes('island') + countries.includes('stan'))
  console.log(countriesInc)

  const getStartingLetters = arr => {
    const occurences = arr
      .reduce((acc, countries) => {
        const startingLetter = countries[0]
        acc[startingLetter] = ( acc[startingLetter] || 0 ) + 1
        return acc
      }, {})
    
    return Object.keys(occurences).map(letter => ({letter, count: occurences[letter]}))
  }
  
  
  console.log(getStartingLetters(countries))

  const arrTen = []
for (let i =0; i< 10; i++){

    arrTen.push(countries[i])
}
  console.log(arrTen)
const arrLastTen = []

  for (let i =countries.length - 10; i< countries.length; i++){

    arrLastTen.push(countries[i])
}
console.log(arrLastTen)