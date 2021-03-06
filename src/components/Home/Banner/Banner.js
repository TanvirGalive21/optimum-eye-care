import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner3 from '../../../images/banner/banner3.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner4 from '../../../images/banner/banner4.jpg'

const Banner = () => {
    return (     
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={banner3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-primay">Eye Care Specialist Services That You Can Trust</h3>
            <p>We Are Caring For Your Eye Health Hospital</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
          <h3 className="text-primay">Eye Care Specialist Services That You Can Trust</h3>
            <p>We Are Caring For Your Eye Health Hospital</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner4}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
    );
};

export default Banner;