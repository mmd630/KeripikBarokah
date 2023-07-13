import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductPhoto from '../assets/Product.jpg'
import '../styles/custom.css'
import Carousel from 'react-bootstrap/Carousel';

function Product() {
  return (
    <div id='product'>
      <Container>
        <Row>

          <Col className="align-self-center p-5" lg={6}>
            <Container className='d-flex justify-content-start'>
              <h3 className='content-header'>Tentang Produk</h3>
            </Container>
            {/* U can use justify-content */}
            <Container className=''>
              <p>Keripik Barokah adalah keripik singkong rumahan yang dibuat dengan menggunakan bahan utama singkong pilihan yang diolah secara tradisional tanpa menggunakan bahan pengawet.</p>
              <p>Keripik ini hadir dengan 4 varian rasa yang beragam, yaitu manis, pedas manis, original bawang, dan suka-suka (Balado).</p>
            </Container>
          </Col>

          <Col className="d-flex justify-content-center align-self-center" lg={6}>
            <Carousel className='w-75'>

              <Carousel.Item>
                <img
                  className="d-block w-100 process-photo"
                  src={ProductPhoto}
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 process-photo"
                  src={ProductPhoto}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 process-photo"
                  src={ProductPhoto}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 process-photo"
                  src={ProductPhoto}
                  alt="Third slide"
                />
              </Carousel.Item>

            </Carousel>
          </Col>
            
        </Row>
      </Container>
    </div>
  )
}

export default Product