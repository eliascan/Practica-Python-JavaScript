var pwn = -(Math.pow(10, 9));
var pwp = Math.pow(10, 9);
var counter = 0;
var y = 0;

for (let i = pwn; i < pwp; i++) {
    y = i/Math.sqrt(i);
    if (Number.isInteger(y)) {
        counter++; 
    }
}
console.log("Number of cases in which the result is an integer: ", counter);