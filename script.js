const next = document.getElementsByClassName('next')[0];
const prev = document.getElementsByClassName('prev')[0];
const scroller = document.getElementsByClassName('scroller')[0];

const carouselSingleWidth = 250;

next.addEventListener('click', () => {
  if (scroller.scrollWidth > scroller.scrollLeft + carouselSingleWidth) {
    scroller.scrollLeft += carouselSingleWidth;
  } else {
    scroller.scrollLeft = 0;
  }
});

prev.addEventListener('click', () => {
  if (scroller.scrollLeft > 0) {
    scroller.scrollLeft -= carouselSingleWidth;
  } else {
    scroller.scrollLeft = scroller.scrollWidth;
  }
});
