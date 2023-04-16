import { CartState } from "../context/CartProvider";
import { InputGroup, Form, Button } from "react-bootstrap";
import { firestoreCreateOrder } from "../utils/firestoreFetch";
import { useState } from "react";

const OrderSummary = () => {
    const { cart, calcTotalPerItem, calcSubTotal, calcTotal, cleanCart } = CartState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [validateEmail, setValidateEmail] = useState("");
    const [error, setError] = useState({});

    const clearCart = () => {
        setFirstName("");
        setLastName("");
        setPhone("")
        setEmail("");
        setError({});
        cleanCart();
    }

    const validate = () => {
        let errors = {};
        if (!firstName) errors.firstName = "* Nombre es requerido";
        if (!lastName) errors.lastName = "* Apellido es requerido";
        if (!phone) errors.phone = "* Teléfono es requerido";
        if (!email) errors.email = "* Email es requerido";
        if(email !== validateEmail) errors.validateEmail = "* Los correos no coinciden"
        setError(errors);
        return Object.keys(errors).length === 0;
    };

    return (
        <>
            <div className='d-flex justify-content-between align-items-center mt-4 mb-2'>
                <h3 className="fw-normal mb-0 text-black">Sumario</h3>
            </div>
            <div className='d-flex flex-column gap-1'>
                <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                        <div className="w-100 col-2 d-flex flex-column">
                            <div className="d-flex justify-content-between fw-bold mb-2">
                                <span className="col-3 text-start">PRODUCTO</span>
                                <span className="col-3 text-center">CANTIDAD</span>
                                <span className="col-3 text-center">PRECIO</span>
                            </div>
                            {
                                cart.map((item) => (
                                    <div className="d-flex justify-content-between">
                                        <span className="col-3 text-start">{item.name}</span>
                                        <span className="col-3 text-center">{item.quantity}</span>
                                        <span className="col-3 text-center">${calcTotalPerItem(item.id)}</span>
                                    </div>
                                ))
                            }
                            <div className="d-flex justify-content-between fw-bold mt-3">
                                <span className="col-3 text-start">SUBTOTAL:</span>
                                <span className="col-3 text-center">${calcSubTotal()}</span>
                            </div>
                            <div className="d-flex justify-content-between fw-bold mt-1">
                                <span className="col-3 text-start">TOTAL:</span>
                                <span className="col-3 text-center">${calcTotal()}</span>
                            </div>
                        </div>
                        <div className="w-100 col-2 d-flex flex-column gap-2 mt-4">
                            <InputGroup className="d-flex justify-content-start align-items-center gap-2">
                                <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
                                <Form.Control
                                    placeholder="Nombre"
                                    aria-label="Nombre"
                                    aria-describedby="basic-addon1"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </InputGroup>
                            {
                                error.firstName &&
                                    <p style={{ color: "red" }}>{error.firstName}</p>
                            }
                            <InputGroup className="d-flex justify-content-start align-items-center gap-2">
                                <InputGroup.Text id="basic-addon1">Apellido</InputGroup.Text>
                                <Form.Control
                                    placeholder="Apellido"
                                    aria-label="Apellido"
                                    aria-describedby="basic-addon1"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </InputGroup>
                            {
                                error.lastName &&
                                    <p style={{ color: "red" }}>{error.lastName}</p>
                            }
                            <InputGroup className="d-flex justify-content-start align-items-center gap-2">
                                <InputGroup.Text id="basic-addon1">Teléfono</InputGroup.Text>
                                <Form.Control
                                    placeholder="Teléfono"
                                    aria-label="Teléfono"
                                    aria-describedby="basic-addon1"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </InputGroup>
                            {
                                error.phone &&
                                    <p style={{ color: "red" }}>{error.phone}</p>
                            }
                            <InputGroup className="d-flex justify-content-start align-items-center gap-2">
                                <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                                <Form.Control
                                    placeholder="Email"
                                    aria-label="Email"
                                    aria-describedby="basic-addon1"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </InputGroup>
                            {
                                error.email &&
                                    <p style={{ color: "red" }}>{error.email}</p>
                            }
                            <InputGroup className="d-flex justify-content-start align-items-center gap-2">
                                <InputGroup.Text id="basic-addon1">Repetir email</InputGroup.Text>
                                <Form.Control
                                    placeholder="Repetir email"
                                    aria-label="Repetir email"
                                    aria-describedby="basic-addon1"
                                    value={validateEmail}
                                    onChange={(e) => setValidateEmail(e.target.value)}
                                />
                            </InputGroup>
                            {
                                error.validateEmail &&
                                    <p style={{ color: "red" }}>{error.validateEmail}</p>
                            }
                            <Button className="mt-3" variant="warning" size='lg' onClick={() => firestoreCreateOrder(cart, { firstName, lastName, phone, email }, validate, calcTotal, clearCart)}>Comprar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderSummary