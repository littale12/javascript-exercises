const removeFromArray = function() {
    for (let i = 0; i < arguments[0].length; i++) {
        if (arguments[1..arguments.length].includes(arguments[0][i]) == true) {
            arguments[0].splice(i,1)
        };
    };
    return arguments[0]
};

module.exports = removeFromArray
