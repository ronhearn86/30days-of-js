localStorage.setItem('firstname','Ron')
localStorage.setItem('lastname','Hearn')
localStorage.setItem('city','Berlin')
localStorage.setItem('country','USA')

const user = {
    firstName: 'Ron',
    lastName: 'Hearn',
    age: 25,
    skills: ['HTML', 'CSS', 'JS', 'React'],
    country: 'USA'
  }

  const userText = JSON.stringify(user, undefined,5)
  localStorage.setItem('user', userText)

  const personAccount = {
    firsname: 'Bon',
    lastname: 'Jar',
    income: 120000,
    expenses: 89000,
    expenseProperties: 1200,
    totalIncome: 120000,
    totalExpense: 89000,
    acountInfo: 999
   
  }

  const accountText = JSON.stringify(personAccount, undefined, 6)
  localStorage.setItem('personAccount', accountText)
  