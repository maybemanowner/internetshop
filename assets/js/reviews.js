const reviewsContainer = document.getElementById('reviews-container');
const reviewForm = document.getElementById('review-form');

function renderReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviewsContainer.innerHTML = ''; // очищаем список отзывов

    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review', `review-${review.rating}`);
        reviewElement.innerHTML = `
            <p><strong>${review.name}</strong> - ${review.rating} звезд</p>
            <p>${review.text}</p>
        `;
        reviewsContainer.appendChild(reviewElement);
    });
}

reviewForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const text = document.getElementById('review-text').value;
    const rating = document.getElementById('rating').value;

    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push({ name, text, rating });
    localStorage.setItem('reviews', JSON.stringify(reviews));

    reviewForm.reset();
    renderReviews();
});

renderReviews();
