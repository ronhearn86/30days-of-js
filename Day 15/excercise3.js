let globalMin = 0
let globalMax = 0
let globalCount = 0
let globalSum = 0
let globalMean = 0
class Statistic {
    constructor(ages){
        this.ages = ages
    }

count(){
    let count = 0
    for(let i = 0; i < this.ages.length; i++){
        count++
    }
    globalCount = count
    return count
}
sum(){
    let sum = 0
    for(let i = 0; i < this.ages.length; i++){
        sum = sum + this.ages[i]
    }
    globalSum = sum
    return sum
}
min(){
    let min = 1000
    for(let i = 0; i < this.ages.length; i++){
        if(this.ages[i] < min){
            min = this.ages[i]
        }

    }
    globalMin = min
    return min
}
max(){
    let max = 0
    for(let i = 0; i < this.ages.length; i++){
        if(this.ages[i] > max){
            max = this.ages[i]
        }

    }
    globalMax = max
    return max
}
range(){
    let range = 0
    range = globalMax - globalMin
    return range
}
mean(){
    let mean = globalSum / globalCount
    globalMean = mean
    return mean
}

variance(){
    let total = 0
    for(let i = 0; i < this.ages.length; i++){
        total = total + (this.ages[i] - 30)**2

}
    total = total/ globalCount
    return total
}

}
const arrNums = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const stat1 = new Statistic(arrNums)
//console.log('Count:', statistics.count())
console.log('Count:', stat1.count())
//console.log('Sum: ', statistics.sum()) // 744
console.log('Sum:', stat1.sum())
//console.log('Min: ', statistics.min()) // 24
console.log('Min: ', stat1.min())
//console.log('Max: ', statistics.max()) // 38
console.log('Max:', stat1.max())
//console.log('Range: ', statistics.range() // 14
console.log('Range:', stat1.range())
//console.log('Range: ', statistics.range() // 14
console.log('Mean:', stat1.mean())
//onsole.log('Variance: ',statistics.var()) // 17.5
console.log('Varriance:', stat1.variance())