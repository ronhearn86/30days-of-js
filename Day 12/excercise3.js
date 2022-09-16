sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
  
function cleanText(text){
    let regExp = /[%,$,@,#,&]/gi
    text = text.replace(regExp,'' )
    return text
}
console.log(cleanText(sentence))

let countWords = {}

function frequentWords(words){
    words = cleanText(sentence).match(/[a-z]{1,15}/gi); 
   for(let i = 0; i < words.length; i++){
    countWords[words[i]] = (countWords[words[i]] || 0) + 1;
   }
   return countWords

   
}
function mostFrequentWords(words,num){
    let wordss = frequentWords(words)
    let sortted = []
    for (let word in wordss){
        sortted.push([word,wordss[word]])
    }
    sortted.sort(function(a,b){
       return b[1] - a[1]
    } )
    return sortted.slice(0,num)
    
}
console.log(mostFrequentWords(sentence,3))


