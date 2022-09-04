// take argument of letter, quantity to shift and direction
let string = 'Hello, World!'
let shiftUp = -29;
let shift = 0;
let input = string.split('')
let mod = (n, m) => (n % m + m) % m
let output = []
    input.forEach(letter => {
        output.push(letter.charCodeAt(0))})

let newArr = output.map(num => {
// Set range of shift based on uppercase (65-90) or lowercase (97-122)
    if ( num < 65 || num > 122 || num > 90 && num < 97){
// return (sum of unicode of each letter + quantity to shift) 
        return (num + shift)
    } else if (num >= 65 && num <= 90 && (num + shiftUp) >= 65 && (num + shiftUp) <= 90 || num >= 97 && num <= 122 && (num + shiftUp) >= 97 && (num + shiftUp) <= 122){
        return (num + shiftUp)
    } else if (num >= 65 && num <= 90 && (num + shiftUp) < 65 || num >= 65 && num <= 90 && (num + shiftUp) > 90) {
        // set range of 65-90, do the math to loop through the range until ready to return new number

        return mod(num + shiftUp -65, 26) + 65
    } else {
        // set range of 97-122, do the math to loop through the range until ready to return new number
        return mod(num + shiftUp - 97, 26) + 97
    }
})


console.log(output)
console.log(newArr)

const caesar = function() {
    // convert each unicode sum back to Char
    // return final string of letters from array  
    return (String.fromCharCode.apply(String, newArr))
};

// Do not edit below this line
module.exports = caesar;
