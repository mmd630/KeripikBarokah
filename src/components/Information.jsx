import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GoogleMaps from '../assets/GoogleMaps.png'
import WhatsApp from '../assets/WhatsApp.png'
import Shoppe from '../assets/Shoppe.png'
import '../styles/custom.css'

function Information() {
  return (
    <div id="information">
      <Container>

        <Row>
          <Container className='d-flex justify-content-center'>
            <h3>Informasi Toko</h3>
          </Container>
        </Row>

        <Row>

          {/* Offline */}
          <Col className="mt-3" lg={6}>

            <Container className='d-flex justify-content-center'>
              <h3>Offline</h3>
            </Container>

            <Container className='d-flex justify-content-center p-2'>
              <Card className='location-card'>
                <Card.Img variant="top" src={GoogleMaps} />
                <Card.Body className='location-card-body'>
                  <Card.Title>Toko Keripik</Card.Title>
                  <Card.Text>
                    Jalan ...
                    Desa Cermee, Kecamatan Cermee, Kabupaten Bondowoso
                  </Card.Text>
                  <Button href="https://goo.gl/maps/e7brw7cSjQnSMU4k6" variant="light">Menuju Lokasi</Button>
                </Card.Body>
              </Card>
            </Container>

          </Col>
          
          {/* Online */}
          <Col className="mt-3" lg={6}>

            <Container className='d-flex justify-content-center'>
              <h3>Online</h3>
            </Container>

            <Container className='d-flex justify-content-center align-self-center p-5'>
              <Row className='align-items-center'>
                <Col className='d-flex flex-column align-items-center' lg={12}>
                  <img className="whatsapp" src={WhatsApp} alt="" />
                  <Button href="" variant="light">Hubungi Saya</Button>
                </Col>
                <Col className='d-flex flex-column align-items-center' lg={12}>
                  <img className="shoppe" src={Shoppe} alt="" />
                  <Button href="" variant="light">Beli disini</Button>
                </Col>
              </Row>
            </Container>              
          </Col>
        </Row>
        
      </Container>
    </div>
    
  )
}

export default Information