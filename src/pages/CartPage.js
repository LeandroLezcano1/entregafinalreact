import { Col, Container, Row, Button } from 'react-bootstrap';
import CartItemContainer from "../containers/CartItemContainer";
import { OrderSummary } from '../components';
import { CartState } from "../context/CartProvider";
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart } = CartState();

    return (
        <section className='h-100'>
            <Container className='h-100 py-5'>
                <Row className='justify-content-center align-items-center h-100'>
                    <Col xs={10}>
                        <div className='d-flex justify-content-between align-items-center mb-2'>
                            <h3 className="fw-normal mb-0 text-black">Carrito</h3>
                        </div>
                        {
                            cart.length >= 1 
                                ? <>
                                    <CartItemContainer />
                                    <OrderSummary />
                                </>
                                : <div className='d-flex flex-column justify-content-center align-items-center mt-4'>
                                    <h2>¡Su carrito está vacío!</h2>
                                    <Link to="/">
                                        <Button variant="primary" size="lg">Seguir Comprando</Button>
                                    </Link>
                                </div>
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CartPage