document.addEventListener('DOMContentLoaded', function() {


    const newQuoteBtn = document.getElementById('newQuote');
    const displayArea = document.getElementById('quoteDisplay');

    quotes = [
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

    function showRandomQuote() {
        const randomQ = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomQ];

        displayArea.innerHTML = `<p>Quote: ${quote.text}<p>
                                <p>Category: ${quote.category}`;
    }

    function createAddQuoteForm() {
        const quoteForm = document.createElement('form');

        const quoteLabel = document.createElement('label');
        quoteLabel.textContent = 'Quote';
        const quoteInput = document.createElement('textarea');
        quoteInput.placeholder = "Enter Your Quote";

        const quoteCategotylabel = document.createElement('label');
        quoteCategotylabel.textContent = 'Category';
        const quoteCategoryInput = document.createElement('input');
        quoteCategoryInput.type = 'text';
        quoteCategoryInput.placeholder = 'Enter Quote Category';

        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Add Quote'
        submitBtn.type = 'button';

        submitBtn.addEventListener('click', function() {
            const newQuote = quoteInput.value.trim();
            const newCategory = quoteCategoryInput.value.trim();

            if(quoteInpute !== '' && quoteCategoryInput !== '') {
                newQuotes = {
                    text: newQuote,
                    category: newCategory
                }
                quotes.push(newQuotes);
                newQuote.value = '';
                newCategory.value = '';
            }else {
                alert('Enter Quote with Category');
            }
        })



        form.appendChild(quoteLabel);
        form.appendChild(quoteInput);
        form.appendChild(quoteCategotylabel);
        form.appendChild(quoteCategoryInput);
        form.appendChild(submitBtn);







    }




    newQuoteBtn.addEventListener('click', showRandomQuote)












});