import { Container, Row, Col } from "react-bootstrap"

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row className="p-5">
          <Col lg={4} className="d-flex justify-content-center">
            <h3>Cermee Bonsai</h3>
          </Col>
          <Col lg={4} className="d-flex justify-content-center">
            <p>© Copyrights 2023 - CermeeBonsai | All rights reserved</p>
          </Col>
          <Col lg={4} className="d-flex justify-content-center">
            <p>A</p>
          </Col>
        </Row>
      </Container>
    </div>
    
  )
}

export default Footer