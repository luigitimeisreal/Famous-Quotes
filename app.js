const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const button = document.querySelector('#button');

let quotes = ['The greatest glory in living lies not in never falling, but in rising every time we fall.','The way to get started is to quit talking and begin doing.', 'Your time is limited, so don`t waste it living someone else`s life.', 'If life were predictable it would cease to be life, and be without flavor. ', "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."]
let authors = ['Nelson Mandela', 'Walt Disney', 'Steve Jobs', 'Eleanor Roosevelt', 'Oprah Winfrey']


function changeQuote() {
    let randomNum = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[randomNum];
    author.innerText = authors[randomNum];
}

button.addEventListener('click', changeQuote);
