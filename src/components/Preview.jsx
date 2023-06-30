import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'

function Preview() {
  return (
    <div id="preview">
      <Container>
        <Row> 
          <Col className="d-flex justify-content-center p-5" lg={6}>
            <div>
              <iframe width="560" height="315"  src="https://www.youtube.com/embed/vihWettcK_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
          </Col>
          <Col className="p-5" lg={6}>
            <h3>Isi apakek</h3>
          </Col>
        </Row>
      </Container>
    </div>
    
  )
}

export default Preview