import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * sweet carousel
 */
export default class Carousel extends Component {
  /**
   * react render method
   * @return {JSX.Element}
   */
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <img src="card.JPG" alt="" />
          </div>
          <div>
            <img src="card.JPG" alt="" />
          </div>
          <div>
            <img src="card.JPG" alt="" />
          </div>
          <div>
            <img src="card.JPG" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
