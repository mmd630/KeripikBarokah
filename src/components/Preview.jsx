import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'

function Preview() {
  return (
    <div id="preview">
      <Container>
        <Row> 
          <Col className="d-flex justify-content-center p-5" lg={6}>
            <div>
              <iframe src="https://www.youtube.com/embed/vihWettcK_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
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

export default Preview