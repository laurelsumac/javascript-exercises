const heyo = [];
const total = Math.floor(Math.random() * 10);
for (let i = 0; i < total; i++) {
    heyo.push('hey');
}

const repeatString = function() {
    if (total < 0) {
        return('ERROR')
    }
    else {
    return(heyo.join(''));
    }
};


// Do not edit below this line
module.exports = repeatString;
