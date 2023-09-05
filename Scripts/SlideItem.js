const previousOffer = document.querySelector('.offer-start-overlay button');
const nextOffer = document.querySelector('.offer-end-overlay button');
let currentOfferItemIndex = 0;

nextOffer.addEventListener('click', () => {
    const itemCount = slideItemsRight('.offers', '.offer-item');
    setButtonVisibility(currentOfferItemIndex, itemCount);
});

previousOffer.addEventListener('click', () => {
    const itemCount = slideItemsLeft('.offers', '.offer-item');
    setButtonVisibility(currentOfferItemIndex, itemCount);
});

const setButtonVisibility = (counter, itemCount) => {
    const previousOfferOverlay = document.querySelector('.offer-start-overlay');
    const nextOfferOverlay = document.querySelector('.offer-end-overlay');

    if (counter <= 0) {
        previousOfferOverlay.classList.add("visually-hidden");
    }
    else {
        previousOfferOverlay.classList.remove("visually-hidden");
    }

    if (counter >= (itemCount - 3)) {
        nextOfferOverlay.classList.add("visually-hidden");
    }
    else {
        nextOfferOverlay.classList.remove("visually-hidden");
    }
}

const slideItemsLeft = (sliderClass, itemClass) => {
    const items = document.querySelectorAll(sliderClass + " " + itemClass);

    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('current')) {
            currentOfferItemIndex = i - 1;
            if (i > 0) {
                items[i - 1].classList.add('current');
                items[1].classList.remove('current');
            }
            break;
        }
    }

    items.forEach(element => {
        //element.classList.add('moving-item-left');
        element.style.transform.translateX = (element.style.transform.translateX - 100) + "%";

        styles = window.getComputedStyle(element)
        //matrix = styles.
    });

    return items.length;
}

const slideItemsRight = (sliderClass, itemClass) => {
    const items = document.querySelectorAll(sliderClass + " " + itemClass);

    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('current')) {
            currentOfferItemIndex = i + 1;
            if (i < items.length) {
                items[i + 1].classList.add('current');
                items[1].classList.remove('current');
            }
            break;
        }
    }

    items.forEach(element => {
        //element.classList.add('moving-item-right');
        element.style.transform.translateX = (element.style.transform.translateX + 100) + "%";
    });

    return items.length;
}