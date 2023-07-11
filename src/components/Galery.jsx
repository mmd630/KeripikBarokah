import React from 'react'
import {Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import CarouselPic from '../assets/BonsaiDummy.jpg'

function Galery(){
  return (
    <Container >
      <Carousel id="galery">

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={CarouselPic}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Preview1</h3>
            {/* <p>Ini Produk 1</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={CarouselPic}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Preview2</h3>
            {/* <p>Ini Produk 2</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={CarouselPic}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Preview3</h3>
            {/* <p>Ini Produk 3</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </Container>
  )
}

export default Galery