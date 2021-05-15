import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';


/**
 * sweet carousel
 */

export default function Carousel() {
  return (
    <>
      <Splide
        options={{
          rewind: false,
          width: 800,
          gap: 'rem',
          perPage: 3,
        }}
      >
        <SplideSlide>
          <img src="card1.JPG" alt=""  />
        </SplideSlide>
        <SplideSlide>
          <img src="card44.JPG" alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src="card44.JPG" alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src="card44.JPG" alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src="card44.JPG" alt="" />
        </SplideSlide>
      </Splide>
    </>
  );
}
