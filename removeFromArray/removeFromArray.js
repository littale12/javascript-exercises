const removeFromArray = function() {
    const args = [].slice.call(arguments)
    let array = args[0].sort()
    const rem = args.slice(1).sort()
    for (let i = 0; i < array.length; i++) {
        if (rem.includes(array[i])) {
            array.splice(i, 1)
            i--
        }
    }
    return array
}




module.exports = removeFromArray
