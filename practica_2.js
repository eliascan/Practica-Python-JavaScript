/*
In the equation below, considering that X is an integer between -10**exp and 10**exp, in how many cases Y is an integer?

Y = X / X**0.5
*/
function caseInt(ex) {
    var pwn = -(Math.pow(10, ex));
    var pwp = Math.pow(10, ex);
    var counter = 0;
    var y = 0;

    for (let i = pwn; i < pwp; i++) {
        y = i/Math.sqrt(i);
        if (Number.isInteger(y)) {
            counter++; 
        }
    }

    return counter;
}

console.log("Number of cases in which the result is an integer: ", caseInt(5));