const palindromes = function(str) {
    let delmtedStr = str.split(",").join("").split(" ").join("").toLowerCase()
    const pld1 = delmtedStr.split("").reverse().join("")
    const pld2 = delmtedStr.substring(0, delmtedStr.length - 1).split("").reverse().join("")
    return (pld1 == delmtedStr || pld2 == delmtedStr.substring(0, delmtedStr.length - 1)) ? true : false;
}
// this just feels unnecessarily ugly but it works so i'll take it
module.exports = palindromes
