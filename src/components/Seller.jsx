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
            <h3>Tentang Toko</h3>
            <p>Toko Barokah didirikan oleh Ibu Alfi Zatin pada tahun 2019, berawal dari ide beliau untuk memanfaatkan kebun singkong pribadinya. Usaha ini terdiri atas 5 orang yang bertanggung jawab untuk mengupas, memasak, dan mengemas singkong beserta bumbunya dan pemasaran.</p>
          </Col>
            
        </Row>
      </Container>
    </div>
  )
}

export default Product