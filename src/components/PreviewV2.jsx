import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'

function PreviewV2() {
  return (
    <div id="preview">
      <Container>
        <Row> 
          <Col className="d-flex justify-content-center p-5" lg={6}>
            <div>
              <p>Pemilik toko ini adalah ...</p>
            </div>
          </Col>
          <Col className="d-flex justify-content-center p-5" lg={6}>
            <a href="www.youtube.com">Beli Disini</a>
          </Col>
        </Row>
      </Container>
    </div>
    
  )
}

export default PreviewV2