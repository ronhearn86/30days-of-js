const games = ['megaman', 'mario', 'kickmaster', 'fable', 'little nemo']

console.time('reg loop')
for (let i=0; i< games.length; i++){
    console.log(games[i])

}
console.timeEnd('reg loop')

console.time('for of loop')
for(el of games){
    console.log(el)

}
console.timeEnd('for of loop')

console.time('for each')
games.forEach((game)=>{
    console.log(game)
})
console.timeEnd('for each')
