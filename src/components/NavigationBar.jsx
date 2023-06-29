import { Container, Navbar, Nav } from "react-bootstrap";

function NavigationBar() {
    return (
        <Navbar className='navbar' expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href=""><b>Cermee Bonsai</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">Tentang Toko</Nav.Link>
                        <Nav.Link href="#product">Produk Toko</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar