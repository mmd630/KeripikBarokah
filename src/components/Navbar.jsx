import { Container, Navbar, Nav } from "react-bootstrap";
import Logo from "../assets/Logo.png";

function NavigationBar() {
    return (
        <Navbar className='navbar py-3' expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <b>Kripik Barokah</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#product" className="navlink"><b>Tentang Produk</b></Nav.Link>
                        <Nav.Link href="#seller" className="navlink"><b>Tentang Toko</b></Nav.Link>
                        <Nav.Link href="#information" className="navlink"><b>Informasi Toko</b></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar