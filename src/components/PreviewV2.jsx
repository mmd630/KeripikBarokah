import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardPic from '../assets/Profile.jpg'
import Tokopedia from '../assets/Tokopedia.png'
import '../styles/custom.css'

function PreviewV2() {
  return (
    <div id="preview">
      <Container>
        <Row>

          <Col className="d-flex justify-content-center p-4" lg={6}>
            <Card className='preview-card'>
              <Card.Img variant="top" src={CardPic} />
              <Card.Body className='preview-card-body'>
                <Card.Title>Ibu ...</Card.Title>
                <Card.Text>
                  ssssssssssssss
                </Card.Text>
                <Button href="" variant="light">Hubungi saya</Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col className="justify-content-center p-4" lg={6}>
            <Row className="shop">
              <img src={Tokopedia} alt="" />
            </Row>
            <Row className="shop">
              <Button href="" variant="light">Beli Disini</Button>
            </Row>
          </Col>
        </Row>
        
      </Container>
    </div>
    
  )
}

export default PreviewV2