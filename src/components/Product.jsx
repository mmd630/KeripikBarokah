import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductPhoto from '../assets/Product.jpg'
import '../styles/custom.css'

function Product() {
  return (
    <div id='product'>
      <Container>
        <Row>

          <Col className="align-self-center p-5" lg={6}>
            <h3>Tentang Produk</h3>
            <p>Keripik Barokah adalah keripik singkong rumahan yang dibuat dengan menggunakan bahan utama singkong pilihan yang diolah secara tradisional tanpa menggunakan bahan pengawet.</p>
            <p>Keripik ini hadir dengan 4 varian rasa yang beragam, yaitu manis, pedas manis, original bawang, dan suka-suka (Balado).</p>
          </Col>

          <Col className="d-flex justify-content-center align-self-center" lg={6}>
            <img className="product-photo" src={ProductPhoto} alt="Keripik Singkong"/>
          </Col>
            
        </Row>
      </Container>
    </div>
  )
}

export default Product