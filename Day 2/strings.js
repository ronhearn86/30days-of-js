// let space = ' '           // an empty space string
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'
// let quote = "The saying,'Seeing is Believing' is not correct in 2020."
// let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

// let fullName = firstName + space + lastName; // concatenation, merging two string together.
// console.log(fullName);

// // Declaring different variables of different data types
// let space = ' '
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'
// let age = 250


// let fullName =firstName + space + lastName
// let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

// console.log(personInfoOne)

// const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
// I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
// Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
// In the end of 2019, I was thinking to expand my teaching and to reach \
// to global audience and I started a Python challenge from November 20 - December 19.\
// It was one of the most rewarding and inspiring experience.\
// Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
// I hope you are enjoying too."

// console.log(paragraph)

// Escape Sequences in Strings
// In JavaScript and other programming languages \ followed by some characters is an escape sequence. 
//Let's see the most common escape characters:

// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")
// console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
// console.log('Days\tTopics\tExercises')
// console.log('Day 1\t3\t5')
// console.log('Day 2\t3\t5')
// console.log('Day 3\t3\t5')
// console.log('Day 4\t3\t5')
// console.log('This is a backslash  symbol (\\)') // To write a backslash
// console.log('In every programming language it starts with \"Hello, World!\"')
// console.log("In every programming language it starts with \'Hello, World!\'")
// console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
// console.log("The saying 'Seeing is Believing' isn't correct in 2020")
//     Template Literals (Template Strings)
// To create a template strings, we use two back-ticks. 
//We can inject data as expressions inside a template string. 
//To inject data, we enclose the expression with a curly bracket({})
// preceded by a $ sign. See the syntax below.

// //Syntax
// `String literal text`
// `String literal text ${expression}`

// console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
// let a = 2
// let b = 3
// console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'
// let age = 250
// let fullName = firstName + ' ' + lastName

// let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
// let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
// console.log(personInfoTwo)
// console.log(personInfoThree)

// let a = 2
// let b = 3
// console.log(`${a} is greater than ${b}: ${a > b}`)
//2 is greater than 3: false
//------------------------------------------------------------------
//Let us access different characters in 'JavaScript' string.

// let string = 'JavaScript'
// let firstLetter = string[0]

// console.log(firstLetter)           // J

// let secondLetter = string[1]       // a
// let thirdLetter = string[2]
// let lastLetter = string[9]

// console.log(lastLetter)            // t

// let lastIndex = string.length - 1

// console.log(lastIndex)  // 9
// console.log(string[lastIndex])    // t
//--------------------------------------------------------------
//toUpperCase(): this method changes the string to uppercase letters.
// let string = 'JavaScript'

// console.log(string.toUpperCase())     // JAVASCRIPT

// let firstName = 'Asabeneh'

// console.log(firstName.toUpperCase())  // ASABENEH

// let country = 'Finland'

// console.log(country.toUpperCase())    // FINLAND

//toLowerCase(): this method changes the string to lowercase letters.
// let string = 'JavasCript'

// console.log(string.toLowerCase())     // javascript

// let firstName = 'Asabeneh'

// console.log(firstName.toLowerCase())  // asabeneh

// let country = 'Finland'

// console.log(country.toLowerCase())   // finland
//-----------------------------------------------------------
//substr(): It takes two arguments, the starting 
//index and number of characters to slice.
// let string = 'JavaScript'
// console.log(string.substr(4,7))    // Script

// let country = 'Finland'
// console.log(country.substr(3, 4))   // land
//------------------------------------------------------
// substring(): It takes two arguments, the 
// starting index and the stopping index but it 
// doesn't include the character at the stopping index.
// let string = 'JavaScript'

// console.log(string.substring(0,4))     // Java
// console.log(string.substring(4,10))    // Script
// console.log(string.substring(4))       // Script

// let country = 'Finland'

// console.log(country.substring(0, 3))   // Fin
// console.log(country.substring(3, 7))   // land
// console.log(country.substring(3))      // land
//-----------------------------------------------------

//split(): The split method splits a string at a specified place.
// let string = '30 Days Of JavaScript'

// console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
// console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

// let firstName = 'Asabeneh'

// console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
// console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

// let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

// console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
// console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

//trim(): Removes trailing space in the beginning or the end of a string.
// let string = '   30 Days Of JavaScript   '

// console.log(string)
// console.log(string.trim(' '))

// let firstName = ' Asabeneh '

// console.log(firstName)
// console.log(firstName.trim()) 
 // still removes spaces at the beginning and the end of the string
 //-------------------------------------------------------------------
//  includes(): It takes a substring argument 
//  and it checks if substring argument exists 
//  in the string. includes() returns a boolean. 
//  If a substring exist in a string, it returns true,
//   otherwise it returns false.

// let string = '30 Days Of JavaScript'

// console.log(string.includes('Days'))     // true
// console.log(string.includes('days'))     // false - it is case sensitive!
// console.log(string.includes('Script'))   // true
// console.log(string.includes('script'))   // false
// console.log(string.includes('java'))     // false
// console.log(string.includes('Java'))     // true

// let country = 'Finland'

// console.log(country.includes('fin'))     // false
// console.log(country.includes('Fin'))     // true
// console.log(country.includes('land'))    // true
// console.log(country.includes('Land'))    // false

//--------------------------------------------------------

//replace(): takes as a parameter the old substring and a new substring.

//string.replace(oldsubstring, newsubstring)

// let string = '30 Days Of JavaScript'
// console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

// let country = 'Finland'
// console.log(country.replace('Fin', 'Noman'))       // Nomanland

//--------------------------------------------------------------

//charAt(): Takes index and it returns the value at that index

//string.charAt(index)

// let string = '30 Days Of JavaScript'
// console.log(string.charAt(0))        // 3

// let lastIndex = string.length - 1
// console.log(string.charAt(lastIndex)) // t

// ---------------------------------------------------------------

// charCodeAt(): Takes index and it returns char 
// code (ASCII number) of the value at that index

// string.charCodeAt(index)

// let string = '30 Days Of JavaScript'
// console.log(string.charCodeAt(3))        // D ASCII number is 68

// let lastIndex = string.length - 1
// console.log(string.charCodeAt(lastIndex)) // t ASCII is 116

// ------------------------------------------------------------------
// indexOf(): Takes a substring and if the substring exists in a string
//  it returns the first position of the substring if does not exist it
//   returns -1

//   string.indexOf(substring)

// let string = '30 Days Of JavaScript'

// console.log(string.indexOf('D'))          // 3
// console.log(string.indexOf('Days'))       // 3
// console.log(string.indexOf('days'))       // -1
// console.log(string.indexOf('a'))          // 4
// console.log(string.indexOf('JavaScript')) // 11
// console.log(string.indexOf('Script'))     //15
// console.log(string.indexOf('script'))     // -1

//----------------------------------------------------------------------
// lastIndexOf(): Takes a substring and if the substring exists 
// in a string it returns the last position of the substring if 
// it does not exist it returns -1
//syntax
//string.lastIndexOf(substring)

// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

// console.log(string.lastIndexOf('love'))       // 67
// console.log(string.lastIndexOf('you'))        // 63
// console.log(string.lastIndexOf('JavaScript')) // 38

// ------------------------------------------------------------

// concat(): it takes many substrings and joins them.
// string.concat(substring, substring, substring)
// let string = '30'
// console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

// let country = 'Fin'
// console.log(country.concat("land")) // Finland
//-------------------------------------------------------------
// startsWith: it takes a substring as an argument and it checks 
//if the string starts with that specified substring. It returns 
//a boolean(true or false).
// //syntax
// string.startsWith(substring)
// let string = 'Love is the best to in this world'

// console.log(string.startsWith('Love'))   // true
// console.log(string.startsWith('love'))   // false
// console.log(string.startsWith('world'))  // false

// let country = 'Finland'

// console.log(country.startsWith('Fin'))   // true
// console.log(country.startsWith('fin'))   // false
// console.log(country.startsWith('land'))  //  false
//-------------------------------------------------------------------
// endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
// string.endsWith(substring)
// let string = 'Love is the most powerful feeling in the world'

// console.log(string.endsWith('world'))         // true
// console.log(string.endsWith('love'))          // false
// console.log(string.endsWith('in the world')) // true

// let country = 'Finland'

// console.log(country.endsWith('land'))         // true
// console.log(country.endsWith('fin'))          // false
// console.log(country.endsWith('Fin'))          //  false
//----------------------------------------------------------------
// search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
// string.search(substring)
// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// console.log(string.search('love'))          // 2
// console.log(string.search(/javascript/gi))  // 7
//---------------------------------------------------------------------------
// match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
// let string = 'love'
// let patternOne = /love/     // with out any flag
// let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
// Match syntax

// // syntax
// string.match(substring)
// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// console.log(string.match('love'))
// ["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
// let pattern = /love/gi
// console.log(string.match(pattern))   // ["love", "love", "love"]
// Let us extract numbers from text using a regular expression. This is not the regular expression section, do not panic! We will cover regular expressions later on.

// let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
// let regEx = /\d+/

// // d with escape character means d not a normal d instead acts a digit
// // + means one or more digit numbers,
// // if there is g after that it means global, search everywhere.

// console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
// console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
//------------------------------------------------------------------------
// repeat(): it takes a number as argument and it returns the repeated version of the string.

// string.repeat(n)
// let string = 'love'
// console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
//-------------------------------------------------------------------------

// Checking Data Types
// To check the data type of a certain variable we use the typeof method.

// Example:

// // Different javascript data types
// // Let's declare different data types

// let firstName = 'Asabeneh'      // string
// let lastName = 'Yetayeh'        // string
// let country = 'Finland'         // string
// let city = 'Helsinki'           // string
// let age = 250                   // number, it is not my real age, do not worry about it
// let job                         // undefined, because a value was not assigned

// console.log(typeof 'Asabeneh')  // string
// console.log(typeof firstName)   // string
// console.log(typeof 10)          // number
// console.log(typeof 3.14)        // number
// console.log(typeof true)        // boolean
// console.log(typeof false)       // boolean
// console.log(typeof NaN)         // number
// console.log(typeof job)         // undefined
// console.log(typeof undefined)   // undefined
// console.log(typeof null)        // object
// Changing Data Type (Casting)
// Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.
// String to Int
// We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc. We can convert string to number using the following methods:

// parseInt()
// Number()
// Plus sign(+)
// let num = '10'
// let numInt = parseInt(num)
// console.log(numInt) // 10
// let num = '10'
// let numInt = Number(num)

// console.log(numInt) // 10
// let num = '10'
// let numInt = +num

// console.log(numInt) // 10
// String to Float
// We can convert string float number to a float number. Any float number inside a quote is a string float number. An example of a string float number: '9.81', '3.14', '1.44', etc. We can convert string float to number using the following methods:

// parseFloat()
// Number()
// Plus sign(+)
// let num = '9.81'
// let numFloat = parseFloat(num)

// console.log(numFloat) // 9.81
// let num = '9.81'
// let numFloat = Number(num)

// console.log(numFloat) // 9.81
// let num = '9.81'
// let numFloat = +num

// console.log(numFloat) // 9.81
// Float to Int
// We can convert float numbers to integers. We use the following method to convert float to int:

// parseInt()
// let num = 9.81
// let numInt = parseInt(num)

// console.log(numInt) // 9  