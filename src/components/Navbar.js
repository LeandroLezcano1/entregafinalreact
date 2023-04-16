import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <BootstrapNavbar bg="dark" variant="dark">
            <Container className="p-4 d-flex justify-content-between align-items-center">
                <Link className="text-light text-decoration-none fw-bolder" to="/">Shoes Shop</Link>
                <Nav className="d-flex gap-4">
                    <Link className="text-light text-decoration-none fw-bolder text-uppercase" to="/category/nike">Nike</Link>
                    <Link className="text-light text-decoration-none fw-bolder text-uppercase" to="/category/puma">Puma</Link>
                    <Link className="text-light text-decoration-none fw-bolder text-uppercase" to="/category/adidas">Adidas</Link>
                </Nav>
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;