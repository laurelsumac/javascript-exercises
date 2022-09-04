
let books = [
    { title: 'Book', author: 'Name' },
    { title: 'Book2', author: 'Name2' }
    ];



const getTheTitles = function() {
    return (books.map(value => value.title))
};

// Do not edit below this line
module.exports = getTheTitles;
