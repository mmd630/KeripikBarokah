import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'

function Preview() {
  return (
    <Container className='pt-3' id="preview">
      <Row> 
        <Col lg={6} id="test1">
          <h3>Video Youtube</h3>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe title="Embeds Page" className="embed-responsive-item" src=""></iframe>
          </div>
        </Col>
        <Col lg={6} id="test2">
          <h3>Isi apakek</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Preview