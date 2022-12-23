import './vendor/swiper.js';

const carouselList = document.getElementById('carousel');
const sliderlList = document.getElementById('slider');

const carouselReview = () => {
  if (carouselList) {
    // eslint-disable-next-line no-unused-vars, no-undef
    const swiper = new Swiper(carouselList, {
      navigation: {
        nextEl: '.review__button--right',
        prevEl: '.review__button--left',
      },
      spaceBetween: 560,
      slidesPerView: 1,
      speed: 600,
    });
  }
};

const sliderTrainers = () => {
  if (sliderlList) {
    // eslint-disable-next-line no-unused-vars, no-undef
    const swiper = new Swiper(sliderlList, {
      navigation: {
        nextEl: '.trainers__button--right',
        prevEl: '.trainers__button--left',
      },
      speed: 600,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
      loop: true,
    });
  }
};

export {carouselReview, sliderTrainers};
