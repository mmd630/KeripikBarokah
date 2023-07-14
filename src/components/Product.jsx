import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Process1 from '../assets/Process1.jpg'
import Process2 from '../assets/Process2.jpg'
import Process3 from '../assets/Process3.png'
import Process4 from '../assets/Process4.png'
import Process5 from '../assets/Process5.png'
import Process6 from '../assets/Process6.png'
import '../styles/custom.css'

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
                  src={Process1}
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 process-photo"
                  src={Process2}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 process-photo"
                  src={Process3}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 process-photo"
                  src={Process4}
                  alt="Fourth slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 process-photo"
                  src={Process5}
                  alt="Fifth slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 process-photo"
                  src={Process6}
                  alt="Sixth slide"
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