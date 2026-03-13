const slider = document.getElementById('slider');

function activateSlider() {
    const scrollWidth = slider.scrollWidth; // Poore slider ki width
    const clientWidth = slider.clientWidth; // Ek slide ki width (screen width)

    setInterval(() => {
        if (slider.scrollLeft + clientWidth >= scrollWidth) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
    }, 4000);
}
activateSlider();