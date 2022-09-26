function outerMost(){
    let count = 0
    function innerMost(){
        count++
        return count
    }
    return innerMost()
}
const ans = outerMost()
console.log(ans)

function getName(){
    let fname = ''
    let lname = ''
    let age = 0
    function first(){
        fname = 'Ron'
        return fname
    }
    function getLastName(){
        lname = 'Hearn'
        return lname
    }

    function getAge(){
        age = 36
        return age
    }

    return {
        name:first(),
        last:getLastName(),
        age:getAge()
    }
}

const full = getName();
console.log(full)