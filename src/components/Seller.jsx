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
            {/* U can use justify-content */}
            <Container className='d-flex justify-content-start'>
              <h3 className='content-header'>Tentang Toko</h3>
            </Container>
            <Container className='justify-content'>
              <p>Pemilik dari Toko Barokah ini adalah Ibu Alfi Zatin. Didirikan pada tahun 2019, toko ini menjadi sarana untuk memanfaatkan kebun singkong pribadi Ibu Alfi.</p>
              <p>Tidak hanya sukses memenuhi permintaan lokal, dengan tekadnya yang kuat, produk unggulan toko ini bahkan berhasil diekspor ke luar pulau, menggapai pasar yang lebih luas.</p>
            </Container>
          </Col>
            
        </Row>
      </Container>
    </div>
  )
}

export default Product