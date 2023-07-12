import { Container, Navbar, Nav } from "react-bootstrap";

function NavigationBar() {
    return (
        <Navbar className='navbar py-3' expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#product"><b>Keripik Singkong Cermee</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#product"><b>Tentang Produk</b></Nav.Link>
                        <Nav.Link href="#seller"><b>Tentang Penjual</b></Nav.Link>
                        <Nav.Link href="#information"><b>Informasi Toko</b></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar