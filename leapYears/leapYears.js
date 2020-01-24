const leapYears = function(leapYear) {
    if (leapYear % 400 % 4) {
        return true
    }
    return false
}

module.exports = leapYears
