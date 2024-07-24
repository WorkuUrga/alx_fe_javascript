document.addEventListener('DOMContentLoaded', function() {

        const quotes = [
        {text: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
            category: "Motivational"},
        {text:"Keep your face always toward the sunshine - and shadows will fall behind you.",
            category:"Inspirational"
        },
        {text: "Life isn't about finding yourself. Life is about creating yourself.",
            category: "Life"
        },
        {text: "Yesterday is not ours to recover, but tomorrow is ours to win or lose.",
            category: "Positive"
        },
        {text: "I refuse to join any club that would have me as a member.",
            category: "Funny"
        }
    ];

        const quoteDisplay = document.getElementById('quoteDisplay'); 
        const newQuoteText = document.getElementById('newQuoteText');
        const newQuoteCategory = document.getElementById('newQuoteCategory');
        const newQuotes = document.getElementById('newQuotes');

        const addQuoteBtn = document.getElementById('addQuote');
        const newQuoteBtn = document.getElementById('newQuote');


        function showRandomQuote () {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[randomIndex];
            quoteDisplay.innerHTML = `<p>Quote: ${quote.text}</p> <p>Category: ${quote.category}</p>`
        }

        newQuoteBtn.addEventListener('click', showRandomQuote)

        function createAddQuoteForm () {
            const quoteNew = newQuoteText.value.trim();
            const quoteCatNew = newQuoteCategory.value.trim();
            
            if (quoteNew !== '' && quoteCatNew !== '') {
                const newQuote = {
                    text: quoteNew,
                    category: quoteCatNew
                };
                quotes.push(newQuote);

                newQuoteText.value = ''; 
                newQuoteCategory.value = '';
                displayQuotes();
                displayQuotes();
            }else {
                alert('Please enter quote and category')
            }
        }
        addQuoteBtn.addEventListener('click', createAddQuoteForm);

        function displayQuotes() {
            newQuotes.innerHTML = '';
            quotes.forEach(function(quote) {
                const addedElement = document.createElement('div');
                addedElement.innerHTML = `<p><strong>Quote:</strong> ${quote.text}</p> <p><strong>Category:</strong> ${quote.category}</p>`
                newQuotes.appendChild(addedElement);
            })
        }
        function saveQuotes() {
            localStorage.setItem("quotes", JSON.stringify(quotes));
        }

    displayQuotes();
});