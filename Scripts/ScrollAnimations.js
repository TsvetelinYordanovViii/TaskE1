const controller = new ScrollMagic.Controller();

const slideOfferSlider = new ScrollMagic.Scene(
    {
        triggerElement: '.offers',
        triggerHook: .7,
        offset: -150
    })
    .setTween(TweenMax.from('.offer-slider', 1, {
        x: '225%',
        ease: Power0.ease
    }))
    .addIndicators()
    .addTo(controller);


const slideOfferCard = new ScrollMagic.Scene(
    {
        triggerElement: '.offers',
        triggerHook: .7,
        offset: -150
    })
    .setTween(TweenMax.from('.offer-card', 1, {
        x: '-225%',
        ease: Power0.ease
    }))
    .addIndicators()
    .addTo(controller);



const slideLatestSlider = new ScrollMagic.Scene(
    {
        triggerElement: '.latest',
        triggerHook: .7,
        offset: -150
    })
    .setTween(TweenMax.from('.latest-slider', 1, {
        x: '-225%',
        ease: Power0.ease
    }))
    .addIndicators()
    .addTo(controller);


const slideAuctionCard = new ScrollMagic.Scene(
    {
        triggerElement: '.latest',
        triggerHook: .7,
        offset: -150
    })
    .setTween(TweenMax.from('.auction-card', 1, {
        x: '225%',
        ease: Power0.ease
    }))
    .addIndicators()
    .addTo(controller);