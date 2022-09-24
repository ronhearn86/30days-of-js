let catNames = []
let catWeight = []
async function fetchCat (){
    const res = await fetch('https://api.thecatapi.com/v1/breeds')
    const data = await res.json()
    data.forEach(data =>{
        catNames.push(data.name)
        catWeight.push(data.weight.metric)
    })
    for (let i = 0; i< 67; i++){
        console.log(`Name: ${catNames[i]}, Weight in metric: ${catWeight[i]} `)
    }
    
}
fetchCat()



