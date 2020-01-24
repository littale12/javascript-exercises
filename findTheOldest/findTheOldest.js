let findTheOldest = function() {
    return people.reduce((oldest, current) => {
        const oldestAge = age(oldest.yearOfDeath, oldest.yearOfBirth)
        const currentAge = age(current.yearOfDeath, current.yearOfBirth)
        return oldestAge < currentAge ? current : oldest
        //important to keep in mind that this return just overwrites the current value of the oldest var
    })
}

const age = function(death, birth) {
    if (!death) {
       death = new Date().getFullYear()
    }
    return death - birth
}
module.exports = findTheOldest
