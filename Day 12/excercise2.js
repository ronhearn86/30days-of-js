//1
let wordCounts = { };

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`


function frequentWords(words){
     words = paragraph.match(/[a-z]{1,15}/gi); 
    for(let i = 0; i < words.length; i++){
        wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
    }
    return wordCounts

    
}
function tenMostFrequentWords(str, num){
    const words = frequentWords(str)
    let sortted = []
    for (let word in words){
        sortted.push([word,words[word]])
    }
    sortted.sort(function(a,b){
       return b[1] - a[1]
    } )
    return sortted.slice(0,num)
}
console.log(tenMostFrequentWords(paragraph,10))

