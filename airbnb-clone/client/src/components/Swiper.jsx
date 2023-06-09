import React, { useEffect } from 'react';
import Swiper from 'swiper';

const SwiperCarousel = () => {
  useEffect(() => {
    let swiper = null;

    const initializeSwiper = () => {
      swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 2,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        speed: 0,
      });
    };

    initializeSwiper();

    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  }, []);

  return (
    <div className="swiper-container bg-white py-4 px-6  rounded-lg max-w-full mx-auto h-16">
      <div className="swiper-wrapper flex">
        <div className="swiper-slide p-4 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
              alt="Slide 1"
              className="w-1/4 h-auto"
            />
          </div>
        </div>
        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>
        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>
        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>

        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>
        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>

        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>

        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>

        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>
        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>
        {/* <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>
        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>
        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>
        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>
        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>
        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>
        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>
        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>
        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>
        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>
        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>
        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div>
        <div className="swiper-slide p-2 flex items-center">
          <div className="slide-content">
            <img
              src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
              alt="Slide 2"
              className="w-1/4 h-auto"
            />
          </div>
        </div> */}
        {/* Add more slides as needed */}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default SwiperCarousel;
