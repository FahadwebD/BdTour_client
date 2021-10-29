import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
  
            return (
        <>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg"
      alt="First slide"
     
      id='ban-img'
    />
    <Carousel.Caption>
      <h3>Wait Times</h3>
      <p>We are experiencing high volumes, which has led to increased wait times. Thank you for your patience.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.wego.com/image/upload/v1611848131/country-pages/bd.jpg"
      alt="Second slide"
      
      id='ban-img'
    />

    <Carousel.Caption>
      <h3>Come to Work Where Your Work Matters More</h3>
      <p>When your work makes a difference in others’ lives, it can change your life, too. We are recruiting caring, talented people to join us in our mission to make kids healthier today and better tomorrow.

.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://blog.daraz.com.bd/wp-content/uploads/2019/12/Tours-and-Travel.jpg"
      alt="Third slide"
      
      id='ban-img'
    />

    <Carousel.Caption>
      <h3>Does Your Child Need a COVID-19 Test?</h3>
      <p>If your child has no or mild symptoms, or just needs a test, go to a community testing site..</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.worldtravelguide.net/wp-content/uploads/2017/04/Think-Bangladesh-Bishnupur-538405559-davidevison-Copy.jpg"
      alt="Fourth slide"
      
      id='ban-img'
    />

    <Carousel.Caption>
      <h3 >Come to Work Where Your Work Matters More</h3>
      <p>We have Georgia’s only nationally ranked orthopedics and sports medicine program for kids and teens. See why pediatric care is the best option for your athlete.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};
        

export default Banner;