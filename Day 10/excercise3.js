const countries = require('./countries_data')
const languages = countries.map(country => country.languages)
const modLanguages = [].concat.apply([], languages)
//const languageSet = new Set(modLanguages)
// console.log(languageSet)
// const counter = []
// const count = {}

// for(const lang of languageSet) {
//     const filteredLang = modLanguages.filter((lan) => lan === 1 )
//     counter.push({language:lang, count: filteredLang.length})
// }
// console.log(counter)
// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
//   ]


  const langSet = new Set(modLanguages)
  //console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
  //console.log(langSet.size) // 4
  
   const counts = []
   const count = {}
  
   for (const l of langSet) {
     const filteredLang = modLanguages.filter((lng) => lng === l)
     //console.log(filteredLang) // ["English", "English", "English"]
     counts.push({ lang: l, count: filteredLang.length })
   
    }

    const keysSorted = Object.keys(counts).sort(function(a,b){return counts[a]-counts[b]})

    // for (let  i = 0; i <counts.length; i++){
    //     sortable.push([counts[i], counts[i].count]);
    // }
    
    // sortable.sort(function(a, b) {
    //     return a[1] - b[1];
    // })
    
    console.log(keysSorted)