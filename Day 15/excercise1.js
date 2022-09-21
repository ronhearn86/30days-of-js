class Game {
    constructor(gameTitle, gameGenre,releaseYear,multiplayer,gameConsole){
        
        this.gameTitle = gameTitle
        this.gameGenre = gameGenre
        this.releaseYear = releaseYear
        this.multiplayer = multiplayer
        this.gameConsole = gameConsole
    }
    getGameInfo(){
        const gameInfo = this.gameTitle + " " + this.gameGenre
        return gameInfo
    }
}


const game = new Game()


const game1 = new Game('Fortnite', 'Battle Royale',2017,'Yes','PC/XBOX/PS4/SWITCH')
const game2 = new Game('Halo', 'First Person Shooter',2001,'Yes','XBOX')
const game3 = new Game('Megaman', 'Platformer',1987,'No','NES')

console.log(game1.getGameInfo())
console.log('----------------------')
console.log(game2)
console.log(game3)

//1
class Animal {
    constructor(name,age,color,legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    
}

class Dog extends Animal{
    //super(name,age,color,legs)
}

class Cat extends Animal{
    super(name,age,color,legs){

    }
}
const dog1 = new Dog('Rufio', 2, 'Brown', 4)
console.log(dog1)

const cat1 = new Cat('FatCat', 5, 'Black/White', 4)
console.log(cat1)