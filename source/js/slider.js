import './vendor/swiper.js';

const sliderList = document.getElementById('slider');

const sliderReview = () => {
  if (sliderList) {
    // eslint-disable-next-line no-unused-vars, no-undef
    const swiper = new Swiper(sliderList, {
      navigation: {
        nextEl: '.review__button--right',
        prevEl: '.review__button--left',
      },
      spaceBetween: 120,
      slidesPerView: 1,
      speed: 600,
    });
  }
};

export {sliderReview};
