import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Home() {
  return (
    <Container className='pt-3' id='home'>
      <Row>
        <Col lg={6}>
          <h3>Selamat datang di Toko Bonsai Cermee</h3>
          {/* Apa itu bonsai */}
          <p>Kami adalah Toko Bonsai di Jawa Timur yang didedikasikan sebagai tempat penyedia bonsai berkualitas tinggi yang dapat memberikan pengalaman memukau bagi para pecinta tanaman.</p>
          <p>Setiap tanaman bonsai yang Anda pesan akan dikemas dengan cermat dan menarik, sehingga dapat sampai ke tempat tujuan dengan aman dan dalam kondisi prima.</p>
        </Col>
        <Col lg={6}>
          <h3>KASIH GAMBAR WOY</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Home