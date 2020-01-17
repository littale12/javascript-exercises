const reverseString = function(string) {
    let switchArray = []
    let outputString = ""
    for (let i = 0; i < string.length; i++) {
        switchArray.push(string[i]);
    }
    switchArray = switchArray.reverse()
    for (let i = 0; i < string.length; i++) {
        outputString += switchArray[i];
    }
    return outputString
}   

module.exports = reverseString
