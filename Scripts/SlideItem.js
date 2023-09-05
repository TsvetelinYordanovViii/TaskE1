const previousOffer = document.querySelector('.offer-start-overlay button');
const nextOffer = document.querySelector('.offer-end-overlay button');

nextOffer.addEventListener('click', () => {
    slideItems('.offers', '.offer-item', -1);
    setButtonVisibility('.offers', '.offer-item');
});

previousOffer.addEventListener('click', () => {
    slideItems('.offers', '.offer-item', 1);
    setButtonVisibility('.offers', '.offer-item');
});

const cycleLatest = setInterval(() => {
    slideItemsOrReset('.latest', '.latest-item', -1);

}, 2000)

const setButtonVisibility = (sliderClass, itemClass) => {
    const previousOfferOverlay = document.querySelector('.offer-start-overlay');
    const nextOfferOverlay = document.querySelector('.offer-end-overlay');
    const items = document.querySelectorAll(sliderClass + " " + itemClass);

    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('current')) {
            if (i <= 0) {
                previousOfferOverlay.classList.add("visually-hidden");
            }
            else {
                previousOfferOverlay.classList.remove("visually-hidden");
            }

            if (i >= (items.length - 3)) {
                nextOfferOverlay.classList.add("visually-hidden");
            }
            else {
                nextOfferOverlay.classList.remove("visually-hidden");
            }
            break;
        }
    }
}

const applyOffsetIncrementally = (item, multiplier) => {
    const styles = window.getComputedStyle(item)
    const margin = styles.marginRight.replace('px', '');

    const marginPercentage = ((margin / item.offsetWidth) * multiplier) * 100;
    item.style.transform = `translateX(${((100 * multiplier) + marginPercentage)}%)`;
}

const slideItems = (sliderClass, itemClass, sign) => {
    const items = document.querySelectorAll(sliderClass + " " + itemClass);
    let multiplier = 0;

    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('current')) {
            if (i < items.length && sign < 0) {
                items[i + 1].classList.add('current');
                items[i].classList.remove('current');
                multiplier = (i + 1) * -1;
            }
            else if (i > 0 && sign > 0) {
                items[i - 1].classList.add('current');
                items[i].classList.remove('current');
                multiplier = (i - 1) * -1;
            }
            break;
        }
    }

    items.forEach(element => {
        applyOffsetIncrementally(element, multiplier);
    });
}

const resetItems = (sliderClass, itemClass) => {
    const items = document.querySelectorAll(sliderClass + " " + itemClass);

    document.querySelector(itemClass + '.current').classList.remove('current');
    items[0].classList.add('current');
    items.forEach(element => {
        element.style.transform = `translateX(0%)`;
    });
}

const slideItemsOrReset = (sliderClass, itemClass, sign) => {
    const items = document.querySelectorAll(sliderClass + " " + itemClass);

    if (!items[items.length - 3].classList.contains('current')) {
        slideItems(sliderClass, itemClass, sign);
    }
    else {
        resetItems(sliderClass, itemClass);
    }
}