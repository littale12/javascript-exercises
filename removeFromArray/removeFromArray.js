const removeFromArray = function(...args) {
    let array = args[0]
    let rem = args.slice(1)
    for (let i = 0; i < args[0].length; i++) {
        if (rem.includes(array[i])) {
            array.splice(i,1)
        };
    };
    return array
};




module.exports = removeFromArray
