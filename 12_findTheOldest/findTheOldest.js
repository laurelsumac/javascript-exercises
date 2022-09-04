
let people = [
    {
      name: "Carly",
      yearOfBirth: 2018,

    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]



// Create age value by subtracting yearOfBirth from yearOfDeath
people.map(function(e) {
    e.age = e.yearOfDeath - e.yearOfBirth
    if(people.age = 'NaN') {
        let today = new Date();
        let thisYear = today.getFullYear();
        e.yearOfDeath = thisYear
        e.age['Nan'] = thisYear - e.yearOfBirth
    } else {

    }

})


// Sort by age, youngest to oldest
people.sort((a, b) => parseFloat(a.age)- parseFloat(b.age));
console.log(people)

// Search people to find biggest value of age 

let oldest = people[people.length - 1]
console.log(oldest)

// Return name if age is the biggest
const findTheOldest = function() {
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
