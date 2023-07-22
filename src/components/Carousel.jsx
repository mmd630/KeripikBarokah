import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Manis from '../assets/Manis.png'
import PedasManis from '../assets/PedasManis.png'
import OriginalBawang from '../assets/OriginalBawang.png'
import Balado from '../assets/Balado.png'

function CarouselProduk(){
  return (

      <Carousel id="home">

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Manis}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='carousel-caption'>Manis</h3>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={PedasManis}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className='carousel-caption'>Pedas Manis</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={OriginalBawang}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className='carousel-caption'>Original Bawang</h3>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Balado}
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