import axios from "axios";

export const getRequestApi = async (el, markup) => {
    axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';
    try {
        const response = await axios.get('/reviews')
        const reviews = response.data;
        return reviews;
    } catch (error) {
        el.innerHTML = markup;
    }
}
