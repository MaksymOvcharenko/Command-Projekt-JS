const marqueeInner = document.querySelector('.skills-marquee-inner');
const clone = marquee.cloneNode(true);
marquee.parentNode.appendChild(clone);

let scrollPos = 0; const marqueeWidth = document.querySelector('.skills-marquee-inner').offsetWidth;

function scrollMarquee() {
    scrollPos++;
    if (scrollPos >= marqueeWidth) { scrollPos = -marqueeWidth; } marquee.style.transform = translateX(${-scrollPos}px);
requestAnimationFrame(scrollMarquee); 
}

scrollMarquee();