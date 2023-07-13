import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselPic from '../assets/Product1.jpg'

function CarouselProduk(){
  return (

      <Carousel id="home">

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselPic}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='carousel-caption'>Manis</h3>
            {/* <p>Ini Produk 1</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselPic}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className='carousel-caption'>Pedas Manis</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselPic}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className='carousel-caption'>Original Bawang</h3>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselPic}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className='carousel-caption'>Suka-Suka (Balado)</h3>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
  
  )
}

export default CarouselProduk