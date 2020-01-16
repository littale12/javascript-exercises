const repeatString = function(string, num) {
    let element = ""
    if (num < 0) {
        return "ERROR"
    } else if (num == 0) {
        return ""
    }
    for (let i = 0; i < num; i++) {
        element += `${string}`;
    }
    return element
}
module.exports = repeatString
