const tripContainer = document.querySelector('.trip-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollAmount = 0;

prevBtn.addEventListener('click', () => {
    scrollAmount -= 220; // Width of one trip card plus margin
    tripContainer.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    scrollAmount += 220; // Width of one trip card plus margin
    tripContainer.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
});
