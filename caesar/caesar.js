const caesar = function(string, num) {
    const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lower = "abcdefghijklmnopqrstuvwxyz"
    let finalString = ""
    for (let i = 0; i < string.length; i++) {
        if (lower.includes(string[i])) {
            finalString += lower[(lower.indexOf(string[i])+num+26)%26]
        } else if (caps.includes(string[i])) {
            finalString += caps[(caps.indexOf(string[i])+num+26)%26]
        } else
            finalString += string[i]
    }
    return finalString
}



module.exports = caesar
