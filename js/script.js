const cards = document.querySelectorAll('.food-card');
const modal = document.getElementById('foodModal');

const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

const closeBtn = document.querySelector('.close');

let currentImages = [];
let currentIndex = 0;

const modalPrice = document.getElementById('modalPrice');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

cards.forEach(card => {

    card.addEventListener('click', () => {

        currentImages = card.dataset.images.split(',');

        currentIndex = 0;

        modalImage.src = currentImages[currentIndex];

        modalTitle.textContent = card.dataset.title;
        modalDescription.textContent = card.dataset.description;
        modalPrice.textContent = card.dataset.price;

        prevBtn.style.display =
            currentImages.length > 1 ? 'block' : 'none';

        nextBtn.style.display =
            currentImages.length > 1 ? 'block' : 'none';

        modal.style.display = 'flex';
    });

});
prevBtn.addEventListener('click', () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    }

    modalImage.src = currentImages[currentIndex];

});

nextBtn.addEventListener('click', () => {

    currentIndex++;

    if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }

    modalImage.src = currentImages[currentIndex];

});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});