let arr = [];
let var1 = 10;
let var2 = [90, 1];
for (let i = var1; i <= var2; i++) {
    arr.push(i)
}




const sumAll = function() {
    let count = 0;
    for(let i = 0, n = arr.length; i < n; i++) {
        count += arr[i];
    }
    if (count <=0 ){
        return ("ERROR")
    } else {
    return count;
    }
};

// Do not edit below this line
module.exports = sumAll;
