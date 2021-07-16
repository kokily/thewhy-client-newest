import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { media } from '../../libs/styles/utils';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const ImageBox = styled.div`
  display: block;
  width: 100%;
  height: auto;
  max-width: 1110px;

  ${media.large} {
    max-width: 760px;
  }

  ${media.medium} {
    max-width: 95%;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

interface Props {
  data: string[];
}

const HomeImage: React.FC<Props> = ({ data }) => {
  const slideSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: 'linear',
  };

  return (
    <Container>
      <ImageBox>
        <Slider {...slideSetting}>
          {data.map((item, i) => (
            <div key={i}>
              <img src={item} alt="Main Image" />
            </div>
          ))}
        </Slider>
      </ImageBox>
    </Container>
  );
};

export default HomeImage;
