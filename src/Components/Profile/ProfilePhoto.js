import React from 'react';
import './ProfilePhoto.css';
import Carousel from 'react-bootstrap/Carousel';
function ProfilePhoto() {
  return (
    <div>
      {/* <img className="Ema" src="/PhotoProfile.jpg" alt="PhotoProfile" /> */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="PhotoProfile.jpg"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Photo2.jpg"
            alt="Second slide"
          />


        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Photo3.jpg"
            alt="Third slide"
          />


        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default ProfilePhoto;
