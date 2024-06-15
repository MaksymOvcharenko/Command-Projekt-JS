import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let visibleCards = 3;
const totalCards = 10;
const loadMoreButton = document.getElementById('loadMore');

loadMoreButton.addEventListener('click', function() {
    const cards = document.querySelectorAll('.projects-li.hidden');
    const nextBatch = Array.from(cards).slice(0, 3);
    nextBatch.forEach(card => card.classList.remove('hidden'));
    visibleCards += nextBatch.length;
    
    if (visibleCards >= totalCards) {
        loadMoreButton.style.display = 'none';
        iziToast.info({
            title: 'Info',
            message: 'No more projects to show.',
            position: 'topCenter'
        });
    }
});
