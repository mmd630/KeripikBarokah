import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Icon from '../assets/BonsaiCartoon.png'
import '../styles/custom.css'

function Home() {
  return (
    <div id='home'>
      <Container>
        <Row>

          <Col className="align-self-center p-5" lg={6}>
            <h3>Selamat datang di Toko Keripik Cermee</h3>
            <p>Kami adalah Toko Keripik di Jawa Timur yang didedikasikan sebagai tempat penyedia keripik berkualitas tinggi yang dapat memberikan pengalaman memukau bagi para pecinta makanan ringan.</p>
            <p>Setiap keripik yang Anda pesan akan dikemas dengan sebaik mungkin, sehingga dapat sampai ke tempat tujuan dengan aman dan dapat dinikmati.</p>
          </Col>

          <Col className="d-flex justify-content-center align-self-center" lg={6}>
            <img className="home-icon" src={Icon} alt="Bonsai" />
          </Col>
        
        </Row>
      </Container>
    </div>
  )
}

export default Home