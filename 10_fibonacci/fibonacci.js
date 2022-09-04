// start with 1 as [0]
let fiboArr = [1, 1, 2]

// arrive at desired index
let index = ("8") - 1


// iterate through, adding the position before to [i] until 
for(let i = 3; i <= index; i++) {
    let newNum = (fiboArr[fiboArr.length - 1] + fiboArr[fiboArr.length - 2])
    fiboArr.push(newNum);
}


// fibo is the SUM of the two preceeding numbers
const fibonacci = function() {
    if (index < 0) {
        return 'OOPS'
    } else {
    return fiboArr[index]
    }
};

// Do not edit below this line
module.exports = fibonacci;
