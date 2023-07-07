const cards = document.querySelectorAll('.card');
const firstCard = cards[0];
const secondCard = cards[1];

const submitBtn = document.querySelector('.btn');

submitBtn.addEventListener('click', function () {

    firstCard.classList.remove('show');
    firstCard.classList.add('hidden');

    secondCard.classList.remove('hidden');
    firstCard.classList.add('show');
});

const ratings = document.querySelectorAll('.ratings li')

ratings.forEach(li => {
    li.addEventListener('click', () => {

        const ratingValue = li.textContent;

        const ratingHere = document.getElementById('ratinghere')

        ratingHere.innerHTML = ratingValue

        li.style.backgroundColor = 'hsl(25, 97%, 53%)';

        li.style.color = '#fff';
    })
});