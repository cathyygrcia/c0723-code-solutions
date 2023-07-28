const books = [
  {
    isbn: '978-1-62779-036-9',
    title: 'Algorithms to live by',
    author: 'Brian Christian and Tom Griffiths',
  },
  {
    isbn: '978-1-63369-342-5',
    title: 'The mind of the leader',
    author: 'Rasmus Hougaard',
  },
  {
    isbn: '978-1-78325-363-0',
    title: 'The power of letting go',
    author: 'John Purkiss',
  },
];

console.log('Array of Books:', books);
console.log('typeof books:', typeof books);

const booksJsonString = JSON.stringify(books);
console.log('JSON String:', booksJsonString);
console.log('typeof booksJsonString', typeof booksJsonString);

const studentJsonString = '{"id":2742013, "name": "Cathy Garcia"}';
console.log('studentJsonString:', studentJsonString);
console.log('typeof studentJsonString:', typeof studentJsonString);

const studentObj = JSON.parse(studentJsonString);

console.log('Student Object:', studentObj);
console.log('Type of Student Object:', typeof studentObj);
