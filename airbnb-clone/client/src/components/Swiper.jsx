import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';

const SwiperCarousel = () => {
  const imageUrls = [
    {
      url: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
      name: 'Slide 1',
    },
    {
      url: 'https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg',
      name: 'Slide 1',
    },
    {
      url: 'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg',
      name: 'Slide 1',
    },
    {
      url: 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
      name: 'Slide 1',
    },
    {
      url: 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg',
      name: 'Slide 1',
    },
    {
      url: 'https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg',
      // 
      name: 'Slide 1',
    },
    {
      url: 'https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg',
      // 
      name: 'Slide 1',
    },
    {
      url: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg',
      name: 'Slide 1',
    },
    {
      url: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg',
      name: 'Slide 1',
    },
    {
      url: 'https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg',
      name: 'Slide 1',
    },
    {
      url: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
      name: 'Slide 1',
    },
    {
      url: 'https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg',
      name: 'Slide 1',
    },
    {
      url: 'https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg',
      name: 'Slide 1',
    },
    {
      url: 'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg',
      name: 'Slide 1',
    }
  ];

  const swiperContainerRef = useRef(null);

  const onImageError = (e) => {
    e.target.src = imageUrls
  }

  useEffect(() => {
    const swiperOptions = {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      speed: 0,
    };

    const swiper = new Swiper(swiperContainerRef.current, swiperOptions);

    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={swiperContainerRef}
      className="swiper-container bg-white py-4 px-6 rounded-lg max-w-full mx-auto h-16 flex-wrap mb-4 mt-0"
    >
      <div className="swiper-wrapper flex">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="swiper-slide p-2 flex items-center">
            <div className="slide-content">
              <img src={imageUrl} 
                   alt={`Slide ${index + 1}`} 
                   onError={onImageError} 
                   className="w-1/4 h-auto" />
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default SwiperCarousel;
