const controller = new ScrollMagic.Controller();
//---------------------------------------------------------------------------------------
// Pinning
//---------------------------------------------------------------------------------------

const navbarPin = new ScrollMagic.Scene(
    {
        triggerElement: '.nav-row',
        triggerHook: 0.02,
    })
    .setPin('nav', { pushFollowers: false })
    .addTo(controller);

const navbarRelativePosition = new ScrollMagic.Scene(
    {
        triggerElement: '.nav-row',
        triggerHook: 0.01,
    })
    .setTween(TweenMax.from('.nav-row', {
        onStart: () => {
            document.querySelector('.header-bottom-bg').classList.remove('position-absolute');
            document.querySelector('.header-bottom-bg').style.zIndex = 5;
        },
        onReverseComplete: () => {
            document.querySelector('.header-bottom-bg').classList.add('position-absolute');
            document.querySelector('.header-bottom-bg').style.zIndex = -1;
        }
    }))
    .addTo(controller);

const navbarBgPin = new ScrollMagic.Scene(
    {
        triggerElement: '.nav-row',
        triggerHook: 0.02,
    })
    .setPin('.header-bottom-bg', { pushFollowers: false })
    .addTo(controller);

//---------------------------------------------------------------------------------------
// Offers and latest.
//---------------------------------------------------------------------------------------

const slideOfferSlider = new ScrollMagic.Scene(
    {
        triggerElement: '.offers',
        triggerHook: .7,
        offset: -150,
        reverse: false
    })
    .setTween(TweenMax.from('.offer-slider', 0.4, {
        x: '225%',
        ease: Power0.ease
    }))
    .addTo(controller);


const slideOfferCard = new ScrollMagic.Scene(
    {
        triggerElement: '.offers',
        triggerHook: .7,
        offset: -150,
        reverse: false
    })
    .setTween(TweenMax.from('.offer-card', 0.4, {
        x: '-225%',
        ease: Power0.ease
    }))
    .addTo(controller);



const slideLatestSlider = new ScrollMagic.Scene(
    {
        triggerElement: '.latest',
        triggerHook: .7,
        offset: -150,
        reverse: false
    })
    .setTween(TweenMax.from('.latest-slider', 0.4, {
        x: '-225%',
        ease: Power0.ease
    }))
    .addTo(controller);


const slideAuctionCard = new ScrollMagic.Scene(
    {
        triggerElement: '.latest',
        triggerHook: .7,
        offset: -150,
        reverse: false
    })
    .setTween(TweenMax.from('.auction-card', 0.4, {
        x: '225%',
        ease: Power0.ease
    }))
    .addTo(controller);


//---------------------------------------------------------------------------------------
// Cards
//---------------------------------------------------------------------------------------

const cards = ['.car-auction-card', '.car-card', '.parts-card', '.games-card', '.insurance-card', '.credit-card', '.diary-card', '.news-card'];
const rows = ['.other-row', '.miscelaneous-row'];
for (let i = 0; i < cards.length; i++) {
    const rowIndex = i >= 4 ? 1 : 0;
    let secondOffsetIndex = 0;
    if (i == 0 || i == 3 || i == 4 || i == 7) {
        secondOffsetIndex = 1;
    }

    const secondOffsetLeft = ['-20%', '-8%'];
    const secondOffsetRight = ['20%', '8%'];

    //I tried to use a two-dimensional array for the offsets, but it didn't work.
    if (i == 2 || i == 3 || i == 6 || i == 7) {
        new ScrollMagic.Scene(
            {
                triggerElement: rows[rowIndex],
                triggerHook: .7,
                offset: -150,
                reverse: false
            })
            .setTween(new TimelineMax()
                .from(cards[i], 0.15, {
                    x: '275%',
                    ease: Power0.ease
                })
                .to(cards[i], 0.1, {
                    x: secondOffsetLeft[secondOffsetIndex],
                    ease: Power0.ease
                })
                .to(cards[i], 0.1, {
                    x: '0%',
                    ease: Power0.ease
                }))
            .addTo(controller);
    }
    else {
        new ScrollMagic.Scene(
            {
                triggerElement: rows[rowIndex],
                triggerHook: .7,
                offset: -150,
                reverse: false
            })
            .setTween(new TimelineMax()
                .from(cards[i], 0.15, {
                    x: '-275%',
                    ease: Power0.ease
                })
                .to(cards[i], 0.1, {
                    x: secondOffsetRight[secondOffsetIndex],
                    ease: Power0.ease
                })
                .to(cards[i], 0.1, {
                    x: '0%',
                    ease: Power0.ease
                }))
            .addTo(controller);
    }
}