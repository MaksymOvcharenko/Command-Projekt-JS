import { getRequestApi } from "./api-request-reviews";
import { renderReviews, showLoader, hideLoader, showIziToast } from "./markup-reviews";
import { updateNavigationButtons } from "./updateNavBtns";
import Swiper from 'swiper';
import "swiper/swiper-bundle.css"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"
const listEL = document.querySelector('.swiper-wrapper');
const listWrapperEl = document.querySelector('.swiper')
const errorMsgMarkup = `<p class="error-message ">Not Found!</p>`
const reviewSection = document.querySelector('.review-section');
const loaderEl = document.querySelector('.loader');

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
    showLoader(loaderEl)
    try {
        const result = await getRequestApi(listWrapperEl, errorMsgMarkup)
        renderReviews(result, listEL)
        swiper.update()
        document.querySelector('.next').addEventListener('click', () => swiper.slideNext());
        document.querySelector('.prev').addEventListener('click', () => swiper.slidePrev());
    } catch (error) {
        showIziToast()
    } finally {
        hideLoader(loaderEl)
    }
}


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            reviews();
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null, 
    threshold: 0.1 
});

observer.observe(reviewSection);

swiper.on('slideChange', function() {
    updateNavigationButtons(this);
});