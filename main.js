import {quotes} from './quote.js'
import { dateSpanElement, currentDate } from './date.js';

const quotation = document.getElementById('quotation');
const blockquoteElement = document.querySelector('blockquote');
const author = document.getElementById('author');
const button = document.querySelector('button');

const randomQuotationValue = localStorage.getItem('quote');
const randomAuthorValue = localStorage.getItem('author');
document.addEventListener('DOMContentLoaded', () => {
   blockquoteElement.textContent = randomQuotationValue;
   author.textContent = randomAuthorValue;
   quotation.append(blockquoteElement, author);
});



/**
 * Generates a new random quote from the `quotes` array, updates the DOM elements
 * to display the selected quote and author, and saves them to localStorage.
 *
 * Assumes the existence of:
 * - `quotes`: an array of objects with `quote` and `author` properties.
 * - `blockquoteElement`: a DOM element to display the quote text.
 * - `author`: a DOM element to display the author's name.
 * - `quotation`: a DOM element to contain the quote and author elements.
 *
 * @function
 * @returns {void}
 */
const generateNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuotation = quotes[randomIndex]["quote"];
    const randomAuthor = quotes[randomIndex]["author"];
    blockquoteElement.textContent = randomQuotation;
    author.textContent = randomAuthor;
    quotation.append(blockquoteElement, author);
    localStorage.setItem('quote', randomQuotation);
    localStorage.setItem('author', randomAuthor);
}

button.addEventListener('click', generateNewQuote);



