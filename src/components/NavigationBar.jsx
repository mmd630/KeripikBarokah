import { Container, Navbar, Nav } from "react-bootstrap";

function NavigationBar() {
    return (
        <Navbar className='navbar py-3' expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home"><b>Keripik Bonsai</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home"><b>Tentang Toko</b></Nav.Link>
                        <Nav.Link href="#galery"><b>Galeri Toko</b></Nav.Link>
                        <Nav.Link href="#contact"><b>Informasi Kontak</b></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar