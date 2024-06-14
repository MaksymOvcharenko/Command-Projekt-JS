import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

export const renderReviews = (values, element) => {
    if (!values) {
        return
    }
    const markup = values
        .map(value => {
            return `<li class="swiper-slide review-item" id="item">
                        <div>
                            <p>${value.review}</p>
                            <div class="review-container">
                                <img src="${value.avatar_url}"/>
                                <h3>${value.author}</h3>
                            </div>
                        </div>
                        
                    </li>`
        })
        .join("");
    element.insertAdjacentHTML('beforeend', markup)
}

export const showLoader = (element) => {
    element.style.display = "inline-block";
}
export const hideLoader = (element) => {
    element.style.display = "none";
}

export const showIziToast = () => {
    iziToast.error({
        position: 'bottomRight',
        id: 'toast',
        message:'Reviews are not found. Try again!',
    })
}