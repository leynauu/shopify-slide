const slider = document.getElementById('carousel');
const scrollRightButton = document.getElementById('scrollRight');
let isDown = false;
let startX;
let startY;
let isDragging = false;
let scrollLeft;
const SCROLL_AMOUNT = 500;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    const x = e.clientX - slider.getBoundingClientRect().left;
    const SCROLL_DISTANCE = 20;
    if (x < 100) {
        slider.scrollLeft -= SCROLL_DISTANCE;
    } else if (x > slider.offsetWidth - 100) {
        slider.scrollLeft += SCROLL_DISTANCE;
    }
});

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

scrollRightButton.addEventListener('click', () => {
    slider.scrollLeft += SCROLL_AMOUNT;
});

function changeImage(imageUrl, element, productId) {
    const colorButtons = document.querySelectorAll('.color-button');
    colorButtons.forEach(button => button.classList.remove('selected'));

    element.classList.add('selected');

    const productImage = document.getElementById(`productImage-${productId}`);
    if (productImage) {
        productImage.src = imageUrl;
    }
}
