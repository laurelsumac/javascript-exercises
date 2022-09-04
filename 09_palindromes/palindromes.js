let phrase = 'ZZZZ car, a man, a maracaz.';
let phrase1 = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase()
let half = phrase1.length / 2
let firstHalf1 = phrase1.substring(0, half)
let arr = firstHalf1.split('')
let firstHalf = arr.reverse('').join('')
console.log(firstHalf)


const palindromes = function () {
    if (phrase1.length % 2 == 0){
        let secondHalf = phrase1.substring(phrase1.length - half)
        console.log(secondHalf)
            if(firstHalf === secondHalf) {
                return true;
            } else {
                return false;
            }
    }
    else {
        let secondHalf = phrase1.substring((phrase1.length - half) + 1);
        console.log(secondHalf)
        if (firstHalf === secondHalf) {
            return true;
        } else {
            return false;
        }
    }
};

// Do not edit below this line
module.exports = palindromes;
