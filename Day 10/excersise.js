const freeway = new Set()
console.log(freeway)

const storedNumbers = [1,2,3,4,5,6,7,8,9,10]
const numSet = new Set()
for (num of storedNumbers){
    numSet.add(num)
}
console.log(numSet)

numSet.delete(5)
console.log(numSet)

const strArr = ["one",'two',"three",'four',"five"]
const strSet = new Set()
for(str of strArr){
    strSet.add(str)
}
console.log(strSet)


const countries = ['Finland', 'Sweden', 'Norway']
const modCountries = []
for (ele of countries){
    modCountries.push([ele,ele.length])
}

const countriesMap = new Map(modCountries)
console.log(countriesMap)

