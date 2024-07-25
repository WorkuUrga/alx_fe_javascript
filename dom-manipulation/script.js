document.addEventListener('DOMContentLoaded', function() {

        const defaultQuotes = [
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

        let quotes = JSON.parse(localStorage.getItem("quotes")) || defaultQuotes;

        const quoteDisplay = document.getElementById('quoteDisplay'); 
        const newQuoteText = document.getElementById('newQuoteText');
        const newQuoteCategory = document.getElementById('newQuoteCategory');
        const newQuotes = document.getElementById('newQuotes');

        const addQuoteBtn = document.getElementById('addQuote');
        const newQuoteBtn = document.getElementById('newQuote');
        const exportBtn = document.getElementById('exportQuotes');


        function showRandomQuote () {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[randomIndex];
            quoteDisplay.innerHTML = `<div id="lastDisplayedQuote>"<p>Quote: ${quote.text}</p> <p>Category: ${quote.category}</p></div>`
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
                saveQuotes();
            }else {
                alert('Please enter quote and category')
            }
        }
        addQuoteBtn.addEventListener('click', createAddQuoteForm);

        function displayQuotes() {
            newQuotes.innerHTML = '';
            quotes.forEach(function(quote) {
                const addedElement = document.createElement('div');
                addedElement.innerHTML = `<div><p class="quote-text"><strong>Quote:</strong> ${quote.text}</p> <p class="quote-category"><strong>Category:</strong> ${quote.category}</p></div>`
                newQuotes.appendChild(addedElement);
            })
        }
        function saveQuotes() {
            localStorage.setItem("quotes", JSON.stringify(quotes));
        }

        function loadQuotes() {
            const storedQuotes = JSON.parse(localStorage.getItem('quotes')) || quotes;
            displayQuotes();
        }

        function lastDisplayedQuote() {
            const lastQuote = document.getElementById('lastDisplayedQuote');
            if(lastQuote) {
                const text = lastQuote.querySelector('.quote-text').textContent.trim();
                const category = lastQuote.querySelector('.quote-category').textContent.trim();

                const quoteLast = {
                    text: text,
                    category: category
                }
                sessionStorage.setItem('lastQuote', JSON.stringify(quoteLast));
            }
        }

        exportBtn.addEventListener('click', function() {
            const blob =new Blob([JSON.stringify(quotes, null, 2)],{
            type: "application/json",
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'quotes.json';
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();

            document.body.removeElement('a');
            URL.revokeObjectURL(url);
        })
});


