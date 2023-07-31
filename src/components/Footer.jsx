import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faFacebook, faTwitter, faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import '../styles/custom.css'

function Footer() {
  return (
    <div className="footer" id="contact">
      <Container>
        <Row className="p-5">
          
          <Col lg={6} className="d-flex justify-content-center">
            <h3><b>Kripik Barokah</b></h3>
          </Col>
          
          <Col lg={6} className="d-flex justify-content-center">          
            <a href="https://www.instagram.com/kripiksingkongbarokah/" className="custom-link">
              <FontAwesomeIcon icon={faInstagram} className="mx-2" size="lg" />
            </a>
            <a href="http://wa.me/+6282337482911" className="custom-link">
              <FontAwesomeIcon icon={faWhatsapp} className="mx-2" size="lg" />
            </a>
            <a href="https://www.tiktok.com/@keripiksingkongbarokah?_t=8eRgOPbeHBZ&_r=1" className="custom-link">
              <FontAwesomeIcon icon={faTiktok} className="mx-2" size="lg" />
            </a>
          </Col>
          
        </Row>
      </Container>
    </div>
    
  )
}

export default Footer