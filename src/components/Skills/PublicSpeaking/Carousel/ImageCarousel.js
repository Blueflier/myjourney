import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselContainer, SlideImage, Caption } from './ImageCarousel.styles';

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <SlideImage src={image.src} alt={image.caption} />
            <Caption>{image.caption}</Caption>
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default ImageCarousel;
