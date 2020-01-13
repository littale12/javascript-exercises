const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

let element = []

const getTheTitles = function() {
    for (let i = 0; i < books.length; i++) {
        element.push(books[i].title);
    }
    return element
}

module.exports = getTheTitles;
