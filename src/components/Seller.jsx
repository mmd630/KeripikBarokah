import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SellerPhoto from '../assets/Seller.jpg'
import '../styles/custom.css'

function Product() {
  return (
    <div id='seller'>
      <Container>
        <Row>

          <Col className="d-flex justify-content-center align-self-center" lg={6}>
            <img className="seller-photo" src={SellerPhoto} alt="Ibu ..."/>
          </Col>

          <Col className="align-self-center p-5" lg={6}>
            <h3>Tentang Penjual</h3>
            <p>Kami adalah Toko Keripik di Jawa Timur yang didedikasikan sebagai tempat penyedia keripik berkualitas tinggi yang dapat memberikan pengalaman memukau bagi para pecinta makanan ringan.</p>
          </Col>
            
        </Row>
      </Container>
    </div>
  )
}

export default Product