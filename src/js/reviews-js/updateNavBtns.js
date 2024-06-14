export const updateNavigationButtons = (swiper) => {
    const prevBtnEl = document.querySelector('.prev');
    const nextBtnEl = document.querySelector('.next');
    const breakpoint = swiper.currentBreakpoint || 'default';
    let maxIndex;

    if (breakpoint === '1280') {
        maxIndex = 4;
    } else {
        maxIndex = 5;
    }
    if (swiper.activeIndex === 0) {
        prevBtnEl.classList.add('swiper-button-disabled');
        prevBtnEl.disabled = true;
    } else {
        prevBtnEl.classList.remove('swiper-button-disabled');
        prevBtnEl.disabled = false;
    }
    if (swiper.activeIndex === maxIndex) {
        nextBtnEl.classList.add('swiper-button-disabled');
        nextBtnEl.disabled = true;
    } else {
        nextBtnEl.classList.remove('swiper-button-disabled');
        nextBtnEl.disabled = false;
    }
};