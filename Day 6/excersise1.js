//----------------------------------------------------->
//1 Iterate 0 to 10 using for loop, 
//do the same using while and do while loop
console.log('----------------')
for(let i = 0; i < 11; i++){
    console.log(i)
} // for loop
console.log('----------------')
let x = 0
    while(x <= 10){
        console.log(x)
        x++
    } // while loop
console.log('----------------')
let z = 0
    do {
       console.log(z)
        z++
    } while (z <= 10) //do while loop
//----------------------------------------------------->
//2
console.log('----------------')
for (let i = 10; i >= 0; i--){
    console.log(i)
}// for loop in decrement
console.log('----------------')
let xx = 10
    while(xx >= 0){
        console.log(xx)
        xx--
    }//while loop decrement
console.log('----------------')
let xxx = 10
do {
    console.log(xxx)
    xxx--
}while (xxx >= 0) //do while decrement loop
//----------------------------------------------------->
//3 Iterate 0 to n using for loop
console.log('----------------')
function looper(n){
    for ( let i = 0; i <= n; i++){
        console.log(i)
    }
}
looper(8)
//----------------------------------------------------->
//4
/*
Write a loop that makes the following 
pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
console.log('----------------')
let str = ""
for(let i = 0; i < 7; i++){
    console.log(str+= '#')
}
//----------------------------------------------------->
//5
/*Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/
let a = 0
let b = 0

console.log('----------------')

for (let i = 0; i < 11; i++){
    b = a * a
    console.log(`${a} * ${a} = ${b}`)
    a++
}
//----------------------------------------------------->
//6
/*
using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
 */
console.log('----------------')
let powerTwo = 0
let powerThree = 0
console.log(`i\ti^2\ti^3`)
for (let i = 0; i < 11; i++){
    console.log(`${i}\t${i**2}\t${i**3}`)
}

//----------------------------------------------------->
//7 Use for loop to iterate from 
//0 to 100 and print only even numbers
console.log('----------------')
for (let i = 0; i < 101; i = i+2){
    console.log(i)
}
//----------------------------------------------------->
//8 Use for loop to iterate from 0 to 100
// and print only odd numbers
console.log('----------------')
for (let i = 1; i < 100; i = i+2){

    console.log(i)
}
//----------------------------------------------------->
//9 Use for loop to iterate 
//from 0 to 100 and print only prime numbers
console.log('----------------')


for ( let i = 0; i < 100; i++ ) {
    let bool = false
    for ( let x = 2; x < i; x++){
        if (i % x == 0){
            bool = true
            break
        }
    }
    if(i > 1 && bool == false){
        console.log(i)
    }
}
//----------------------------------------------------->
//10 Use for loop to iterate 
//from 0 to 100 and print the sum of all numbers.
let sum = 0
console.log('----------------')
for (let i = 0; i < 101;i++){
    sum = sum + i
    console.log(sum)
}
//----------------------------------------------------->
//11 Use for loop to iterate from 0 to 100 and print
// the sum of all evens and the sum of all odds.
let sum2 = 0
console.log('----------------')
for (let i = 0; i < 101;i = i+2){
    sum2 = sum2 + i
    console.log(sum2)
}

//----------------------------------------------------->
//12 Use for loop to iterate from 0 to 100 and print the
// sum of all evens and the sum of all odds. 
//Print sum of evens and sum of odds as array
console.log('----------------')
sum = 0
sum2 = 0
for (let i = 1; i < 101;i = i+2){
    sum = sum + i
    console.log(sum)
}
for (let i = 0; i < 101;i = i+2){
    sum2 = sum2 + i
    console.log(sum2)
}
const arry = []
arry.push(sum2)
arry.push(sum)
console.log(arry)
//----------------------------------------------------->
//13 Develop a small script which generate 
//array of 5 random numbers
console.log('----------------')
let arrX = []
for (let i = 0; i < 5; i++){
    let x = Math.floor(Math.random() * 20)
    arrX.push(x)

}
console.log(arrX)

//----------------------------------------------------->
//14 Develop a small script which generate array of 5 
//random numbers and the numbers must be unique
console.log('----------------')
arrX = []
for (let i = 0; i < 5; i++){
    let x = Math.floor(Math.random() * 20)
    if (arrX.includes(x)){
        arrX.push(x - (Math.floor(Math.random() * 20)) )
    }else{
        arrX.push(x)
    }


}
console.log(arrX)
//----------------------------------------------------->
//15 Develop a small script which generate 
//a six characters random id:
console.log('----------------')
let passStr = '1234567890qwertyuiopasdfghjklzxcvbnm!@#$%^&*'
let passLen = passStr.length
let password = ''
for (let i = 0; i < 6; i++ ){
   let num = Math.floor(Math.random() * passLen) 
   password+= passStr.charAt(num)
}
console.log(password)