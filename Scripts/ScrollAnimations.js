const controller = new ScrollMagic.Controller();
//---------------------------------------------------------------------------------------
// Pinning
//---------------------------------------------------------------------------------------

//I found a bug that if you resize the page, the navbar will be slightly offset. Both the buttons and the background.
const navbarPin = new ScrollMagic.Scene(
    {
        triggerElement: '.nav-row',
        triggerHook: 0.01,
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
        triggerHook: 0.01,
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
const cardScenes = [, , , , , , ,];
const cardTweens = [, , , , , , ,];
const rows = ['.other-row', '.miscelaneous-row'];

const createCardTweens = () => {
    for (let i = 0; i < cards.length; i++) {
        let rowIndex
        if (window.outerWidth > 767.98) {
            rowIndex = i >= 4 ? 1 : 0;
            let secondOffsetIndex = 0;
            if (i == 0 || i == 3 || i == 4 || i == 7) {
                secondOffsetIndex = 1;
            }
            const secondOffsetLeft = ['-20%', '-8%'];
            const secondOffsetRight = ['20%', '8%'];

            //I tried to use a two-dimensional array for the offsets, but it didn't work.
            if (i == 2 || i == 3 || i == 6 || i == 7) {
                cardTweens[i] = new TimelineMax()
                    .from(cards[i], 0.25, {
                        x: '375%',
                        ease: Power0.ease
                    })
                    .to(cards[i], 0.1, {
                        x: secondOffsetLeft[secondOffsetIndex],
                        ease: Power0.ease
                    })
                    .to(cards[i], 0.15, {
                        x: '0%',
                        ease: Power0.ease
                    })
            }
            else {
                cardTweens[i] = new TimelineMax()
                    .from(cards[i], 0.25, {
                        x: '-375%',
                        ease: Power0.ease
                    })
                    .to(cards[i], 0.1, {
                        x: secondOffsetRight[secondOffsetIndex],
                        ease: Power0.ease
                    })
                    .to(cards[i], 0.15, {
                        x: '0%',
                        ease: Power0.ease
                    })
            }
        }
        //Mobile scroll animations.
        else {
            rowIndex = i >= 4 ? 1 : 0;

            if (i % 2 == 0) {
                cardTweens[i] = new TimelineMax()
                    .from(cards[i], 0.4, {
                        x: '200%',
                        ease: Power0.ease
                    })
                    .to(cards[i], 0.2, {
                        x: '-5%',
                        ease: Power0.ease
                    })
                    .to(cards[i], 0.5, {
                        x: '0%',
                        ease: Power0.ease
                    })
            }
            else {
                cardTweens[i] = new TimelineMax()
                    .from(cards[i], 0.4, {
                        x: '-200%',
                        ease: Power0.ease
                    })
                    .to(cards[i], 0.2, {
                        x: '5%',
                        ease: Power0.ease
                    })
                    .to(cards[i], 0.5, {
                        x: '0%',
                        ease: Power0.ease
                    })
            }
        }


        cardScenes[i] = new ScrollMagic.Scene(
            {
                triggerElement: rows[rowIndex],
                triggerHook: .7,
                offset: -150,
                reverse: false
            })
            .setTween(cardTweens[i])
            .addTo(controller);
    }
}


createCardTweens();
//Found another bug. When resizing the page, the animation happens very fast.
//For this reason, I will not use this function.
//window.addEventListener('resize', () => {
//    for (let i = 0; i < cardScenes.length; i++) {
//        cardScenes[i].removeTween(cardTweens[i]);
//    }
//    createCardTweens();
//})

//---------------------------------------------------------------------------------------
// Comment Carousel and Map
//---------------------------------------------------------------------------------------


const fadeInComments = new ScrollMagic.Scene(
    {
        triggerElement: '.comments',
        triggerHook: .25,
        offset: -150,
        reverse: false
    })
    .setTween(TweenMax.from('.comments', 0.4, {
        opacity: '0',
        ease: Power0.ease
    }))
    .addTo(controller);


const fadeInMap = new ScrollMagic.Scene(
    {
        triggerElement: '.map',
        triggerHook: .25,
        offset: -150,
        reverse: false
    })
    .setTween(TweenMax.from('.map', 0.4, {
        opacity: '0',
        ease: Power0.ease
    }))
    .addTo(controller);