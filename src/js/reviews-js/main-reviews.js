import { getRequestApi } from "./api-request-reviews";
import { renderReviews } from "./markup-reviews";
import Swiper from 'swiper';
import "swiper/swiper-bundle.css"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"
const listEL = document.querySelector('.swiper-wrapper');
const listWrapperEl = document.querySelector('.swiper')
const errorMsgMarkup = `<p class="error-message ">Not Found!</p>`

const updateNavigationButtons = (swiper) => {
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
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    cssMode: true,
    loop: false,
    spaceBetween:10,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        1280: {
            slidesPerView: 2,
            spaceBetween: 32,
        }
    },
    on: {
        init: function () {
            updateNavigationButtons(this);
        },
        slideChange: function () {
            updateNavigationButtons(this);
        },
        breakpoint: function () {
            updateNavigationButtons(this);
        }
    }        
});

const reviews = async () => {
    try {
        const result = await getRequestApi(listWrapperEl, errorMsgMarkup)
        renderReviews(result, listEL)
        swiper.update()
        document.querySelector('.next').addEventListener('click', () => swiper.slideNext());
        document.querySelector('.prev').addEventListener('click', () => swiper.slidePrev());
    } catch (error) {
        iziToast.error({
            position: 'topRight'
        })
    }
}

reviews()

swiper.on('slideChange', function() {
    updateNavigationButtons(this);
});