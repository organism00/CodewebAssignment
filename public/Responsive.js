const slides = document.getElementById('slides');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let index = 0;

nextButton.addEventListener('click', () => {
	index++;
	if (index >= slides.children.length) {
		index = 0;
	}
	updateSlider();
});

prevButton.addEventListener('click', () => {
	index--;
	if (index < 0) {
		index = slides.children.length - 1;
	}
	updateSlider();
});

function updateSlider() {
	const offset = -index * 100; // Each slide takes full width
	slides.style.transform = `translateX(${offset}%)`;
}