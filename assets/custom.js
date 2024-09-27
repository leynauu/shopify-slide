const slider = document.getElementById('carousel');
const scrollRightButton = document.getElementById('scrollRight');
const scrollLeftButton = document.getElementById('scrollLeft');
let isDown = false;
let startX;
let startY;
let isDragging = false;
let scrollLeft;
let rightButtonActive = true;
const SCROLL_AMOUNT = 500;

slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    startY = e.touches[0].pageY;
    scrollLeft = slider.scrollLeft;
    isDragging = false;
}, { passive: true });

slider.addEventListener('touchmove', (e) => {
    const moveX = e.touches[0].pageX - startX;
    const moveY = e.touches[0].pageY - startY;

    if (Math.abs(moveY) > Math.abs(moveX)) {
        return;
    }

    isDragging = true;
    e.preventDefault();
    const SCROLL_SPEED = 1;
    slider.scrollLeft = scrollLeft - (moveX * SCROLL_SPEED);
}, { passive: false });

slider.addEventListener('touchend', () => {
    isDown = false;
}, { passive: false });

function applyFadeEffect() {
    slider.style.opacity = '0.5';
    setTimeout(() => {
        slider.style.opacity = '1';
    }, 300);
}

scrollRightButton.addEventListener('click', () => {
    slider.scrollLeft += SCROLL_AMOUNT;
    applyFadeEffect();
    scrollLeftButton.classList.remove('hidden');
    scrollRightButton.classList.add('hidden');
});

scrollLeftButton.addEventListener('click', () => {
    slider.scrollLeft -= SCROLL_AMOUNT;
    applyFadeEffect();
    if (slider.scrollLeft <= 0) {
        scrollLeftButton.classList.add('hidden');
    } else {
        scrollRightButton.classList.remove('hidden');
    }
});

scrollLeftButton.classList.add('hidden');
scrollRightButton.classList.remove('hidden');

function checkScrollPosition() {
    if (slider.scrollLeft <= 0) {
        scrollLeftButton.classList.add('hidden');
        scrollRightButton.classList.remove('hidden');
    } else if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
        scrollRightButton.classList.add('hidden');
        scrollLeftButton.classList.remove('hidden');
    }
}

slider.addEventListener('scroll', checkScrollPosition);


function changeImage(imageUrl, element, productId) {
    const colorButtons = document.querySelectorAll('.color-button');
    colorButtons.forEach(button => button.classList.remove('selected'));

    element.classList.add('selected');

    const productImage = document.getElementById(`productImage-${productId}`);
    if (productImage) {
        productImage.src = imageUrl;
    }
}
