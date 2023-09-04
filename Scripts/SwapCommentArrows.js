const previousComment = document.querySelector('.previous-comment img');
const nextComment = document.querySelector('.next-comment img');

if (window.outerWidth < 767.98) {
    previousComment.src = "Styles/Images/SVG/ArrowBlue.svg";
    nextComment.src = "Styles/Images/SVG/ArrowBlue.svg";
}

window.addEventListener('resize', (event) => {
    if (window.outerWidth < 767.98) {
        previousComment.src = "Styles/Images/SVG/ArrowBlue.svg";
        nextComment.src = "Styles/Images/SVG/ArrowBlue.svg";
    }
    else {
        previousComment.src = "Styles/Images/SVG/ArrowBlueShadowed.svg";
        nextComment.src = "Styles/Images/SVG/ArrowBlueShadowed.svg";
    }
})