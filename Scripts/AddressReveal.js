const pins = document.querySelectorAll('.map .location');

pins.forEach(pin => {
    pin.addEventListener('mouseover', () => {
        pin.querySelector('.address').classList.add('reveal');
    })
    pin.addEventListener('mouseout', () => {
        pin.querySelector('.address').classList.remove('reveal');
    })
});