let slogan = '30 Days Of JavaScript'
let x = slogan.toLowerCase()
let slo = slogan.toUpperCase()

document.write(`<h2>${slogan}</h2>`)
document.write(`<h3>${slogan.length}</h3>`)
document.write(`<h2>${slo}</h2>`)
document.write(`<h2>${x}</h2>`)
document.write(`<h2>${x.substr(0,2)}</h2>`)
document.write(`<h2>${x.substring(3,21)}</h2>`)
document.write(`<h2>${slogan.includes('Script')}</h2>`)
let arry = slogan.split()
let arry2 = slogan.split(" ")
document.write(`<h2>${arry}</h2>`)
document.write(`<h2>${arry2}</h2>`)
let arry3 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(" , ")
document.write(`<h2>${arry3}</h2>`)
let fuudge = slogan.replace('JavaScript','Python')
document.write(`<h2>${fuudge}</h2>`)
let character = '30 Days Of JavaScript'
document.write(`<h2>${character.charAt(15)}</h2>`)
document.write(`<h2>${character.charCodeAt(15)}</h2>`)
document.write(`<h2>${character.indexOf('a')}</h2>`)
document.write(`<h2>${character.lastIndexOf('a')}</h2>`)

let cc = 'You cannot end a sentence with because because because is a conjunction'
document.write(`<h2>${cc.indexOf('because')}</h2>`)
document.write(`<h2>${cc.lastIndexOf('because')}</h2>`)
document.write(`<h2>${cc.search('because')}</h2>`)
let white = ' 30 Days Of JavaScript '
document.write(`<h2>${white.trim()}</h2>`)

let character2 = /a/gi
document.write(`<h2>${character.startsWith('3')}</h2>`)
document.write(`<h2>${character.endsWith('t')}</h2>`)
document.write(`<h2>${character.match(character2)}</h2>`)
let wh = ' 30 Days Of '
let ite = 'JavaScript'
document.write(`<h2>${wh.concat(ite)}</h2>`)
document.write(`<h2>${character.repeat(2)}</h2>`)
let de = "'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
document.write(`<h2>${de}</h2>`)
let xx = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
document.write(`<h2>${xx}</h2>`)
let xxx= (parseInt('10') )
let xxxx = Math.ceil(parseFloat('9.8'))
document.write(`<h2>${xxx}</h2>`)
document.write(`<h2>${xxxx}</h2>`)
let xxxxx = /on/gi
let ccc = 'python and jargon'
document.write(`<h2>${ccc.match(xxxxx)}</h2>`)
let cccc = 'python and jargon'
document.write(`<h2>${cccc.includes('jargon')}</h2>`)

let num1 = Math.floor(Math.random() * 101)
let num2 = Math.floor(Math.random() * 51) + 50
let num3 = Math.floor(Math.random() * 256)
document.write(`<h2>${num1}</h2>`)
document.write(`<h2>${num2}</h2>`)
document.write(`<h2>${num3}</h2>`)

let gh = `1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125`
document.write(`<textarea>${gh}</textarea>`)
let hg = 'You cannot end a sentence with because because because is a conjunction'
document.write(`<h2>${hg.substr(30,24)}</h2>`)
let fc = 'You cannot end a sentence with because because because is a conjunction'
let cf = /because/gi
let sc = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let cs = /love/gi
document.write(`<h2>${sc.match(cs)}</h2>`)
document.write(`<h2>${fc.match(cf)}</h2>`)

let shit = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'.replace('@',"")
let shit2 = shit.replace(/[^\w\s]/gi, "")


document.write(`<h2>${shit2}</h2>`)

let numdata = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let data = numdata.match(/\d+/g)
document.write(`<h2>${data}</h2>`)
let monthly = data[0]
let bonus = data[1]
let online = data[2]
let yearly = parseInt((monthly *12) + bonus + (online * 12))
document.write(`<h2>He earns $${yearly} eruos a year</h2>`)