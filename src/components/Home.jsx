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
            <h3>Selamat datang di Toko Bonsai Cermee</h3>
            {/* Apa itu bonsai */}
            <p>Kami adalah Toko Bonsai di Jawa Timur yang didedikasikan sebagai tempat penyedia bonsai berkualitas tinggi yang dapat memberikan pengalaman memukau bagi para pecinta tanaman.</p>
            <p>Setiap tanaman bonsai yang Anda pesan akan dikemas dengan cermat dan menarik, sehingga dapat sampai ke tempat tujuan dengan aman dan dalam kondisi prima.</p>
          </Col>

          <Col className="d-flex justify-content-center align-self-center p-5" lg={6}>
            <img className="home-icon" src={Icon} alt="Bonsai" />
          </Col>
        
        </Row>
      </Container>
    </div>
  )
}

export default Home