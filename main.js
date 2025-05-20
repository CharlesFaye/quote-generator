const quotation = document.getElementById('quotation');
const blockquoteElement = document.querySelector('blockquote');
const button = document.querySelector('button');
const quotes = ['" Rendre un salut n\'a jamais écorché la bouche. " - Contes d\'Amadou Koumba', '" L\'on ne connaît l\'utilité des fesses que quand vient l\'heure de s\'asseoir. " - Contes d\'Amadou Koumba', '" Il y\'a un Dieu qui façonne à son gré nos destinées qu\'elle qu\'en soit l\'ébauche faite par nous. " - Shakespeare', '" Rien n\'est mauvais, rien n\'est bon, c\'est notre pensée qui crée le bonheur ou le malheur. " - Shakespeare', '" Tout homme m\'est supérieur en quelque manière et je m\'instruis auprès de lui. " - Emerson', '" Un homme grand montre sa grandeur dans la manière dont il traite les petits gens. " - Carlyle', '" Il n\'y a pas de spectacle plus désolant que celui d\'un jeune pessimiste. " - Mark Twain', '" Quand je travaille ça me repose, ne rien faire ou recevoir des visites me fatigue. " - Pablo Picasso', '" Le secret du succès, c\'est de faire coincider vocation et vacances. " - Mark Twain', '" Ne cherchez pas la faute, cherchez le remède. " - Henry Ford'];
const getQuoteOnStorage = localStorage.getItem('quote');
document.addEventListener('DOMContentLoaded', () => {
   blockquoteElement.textContent = getQuoteOnStorage;
});

/**
 * Generates a new random quote from the `quotes` array, updates the UI with the selected quote,
 * appends the quote to the quotation element, and saves the quote to localStorage.
 */
const generateNewQuote = () => {
    const getRandomIndex = Math.floor(Math.random() * quotes.length);
    const currentQuote = quotes[getRandomIndex];
    blockquoteElement.textContent = currentQuote;
    quotation.appendChild(blockquoteElement);
    localStorage.setItem('quote', currentQuote);
    
}

button.addEventListener('click', generateNewQuote);

const dateSpanElement = document.querySelector('.date');
const currentDate = new Date();
dateSpanElement.textContent = currentDate.getFullYear();

