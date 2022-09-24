let nameArr = []
let capArr = []
let langArr = []
let popArr = []
let areaArr = []

async function fetchuser(){
    const res = await fetch('https://restcountries.com/v2/all')
    const data = await res.json()
    data.forEach((data) =>{
         nameArr.push(data.name)
         capArr.push(data.capital)
        for (let i = 0; i< data.languages.length; i++ ){
            langArr.push(data.languages[i].name)
        }
        popArr.push(data.population) 
        areaArr.push(data.area)
    })
    for (let i = 0; i < 250; i++){
        console.log(nameArr[i] + ' ' + capArr[i] + ' ' + langArr[i] + ' ' + popArr[i] + ' ' + areaArr[i])
    }
    //console.log(data)
    //console.log(nameArr)
    // console.log(capArr)
    // console.log(langArr)
     //console.log(popArr)
     //console.log(areaArr)
    }
    fetchuser()
    