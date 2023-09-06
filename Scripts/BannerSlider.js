let bannerIndex = 0;

const bannerNext = document.querySelector('.banner-slide-left');
const bannerPrevious = document.querySelector('.banner-slide-right');

bannerNext.addEventListener('click', () => {
    if (bannerIndex > 0) {
        slideBanner('.banner', 'left', -1);
        highlightBannerDot(bannerIndex);
    }
});

bannerPrevious.addEventListener('click', () => {
    if (bannerIndex < 3) {
        slideBanner('.banner', 'right', 1);
        highlightBannerDot(bannerIndex);
    }
});

const slideBanner = (sliderClass, direction, sign) => {
    bannerIndex = bannerIndex + sign;
    const banner = $(sliderClass);
    const currentBanner = $(sliderClass + " img.current")

    const imagePath = bannerIndex === 0 ? 'Styles/Images/PNG/Rectangle 100.png' : '';
    const nextBanner = $(`<img class="position-absolute" src="${imagePath}" alt="Banner Image">`);

    if (bannerIndex === 1) {
        nextBanner.css('background-color', 'orange');
    }
    else if (bannerIndex === 2) {
        nextBanner.css('background-color', 'green');
    }
    else if (bannerIndex === 3) {
        nextBanner.css('background-color', 'yellow');
    }

    banner.prepend(nextBanner);
    nextBanner.addClass('current');


    nextBanner.css('transform', `translateX(0%)`);
    if (direction === 'left') {
        currentBanner.css('transform', `translateX(300%)`);
    }
    else if (direction === 'right') {
        currentBanner.css('transform', `translateX(-300%)`);
    }

    currentBanner.addClass('sliding');
    currentBanner.removeClass('current');
    setTimeout(() => { currentBanner.remove() }, 1500)
}

const highlightBannerDot = (bannerIndex) => {
    document.querySelector('.image-dots .image-dot.current-image').classList.remove('current-image');
    document.querySelectorAll('.image-dots .image-dot')[bannerIndex].classList.add('current-image');
}