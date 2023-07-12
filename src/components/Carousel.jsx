import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselPic from '../assets/Product1.jpg'

function CarouselProduk(){
  return (

      <Carousel id="galery">

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselPic}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Manis</h3>
            <p>Ini Produk 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselPic}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Pedas Manis</h3>
            <p>Ini Produk 2</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselPic}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Original Bawang</h3>
            <p>Ini Produk 3</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Suka-Suka</h3>
            <p>Ini Produk 4</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
  
  )
}

export default CarouselProduk