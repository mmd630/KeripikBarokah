import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'

function Preview() {
  return (
    <Container>
      <Row> 
        <Col>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
        </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Preview