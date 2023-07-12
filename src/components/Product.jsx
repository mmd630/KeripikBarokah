import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Icon from '../assets/BonsaiCartoon.png'
import '../styles/custom.css'

function Product() {
  return (
    <div id='product'>
      <Container>
        <Row>

          <Col className="align-self-center p-5" lg={6}>
            <h3>Tentang Produk</h3>
            <p>Kami adalah Toko Keripik di Jawa Timur yang didedikasikan sebagai tempat penyedia keripik berkualitas tinggi yang dapat memberikan pengalaman memukau bagi para pecinta makanan ringan.</p>
          </Col>

          <Col className="d-flex justify-content-center align-self-center" lg={6}>
            <img className="product-photo" src={Icon} alt="Keripik Singkong"/>
          </Col>
            
        </Row>
      </Container>
    </div>
  )
}

export default Product