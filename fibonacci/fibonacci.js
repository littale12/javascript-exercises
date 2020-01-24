const fibonacci = function(num) {
    const fibNum = Number(num);
    if (fibNum < 0) {return "OOPS"};
    return (fibNum > 2) ? fibonacci(fibNum-1) + fibonacci(fibNum-2) : 1;
}

//first recursive function i didn't have to google

module.exports = fibonacci
