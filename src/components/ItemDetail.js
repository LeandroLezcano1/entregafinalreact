import { Button } from "react-bootstrap";
import { CartState } from "../context/CartProvider";
import { useState } from "react";
import { Add, Remove } from "@mui/icons-material"
import { Link } from "react-router-dom";

const ItemDetail = ({ shoe }) => {
    const [itemCount, setItemCount] = useState(1);
    const { addToCart } = CartState();

    const onAdd = () => {
        addToCart(shoe, itemCount);
        setItemCount(1);
    }

    const increment = () => {
        if (itemCount < 10) {
            setItemCount(itemCount + 1);
        }
    }

    const decrease = () => {
        if (itemCount > 1) {
            setItemCount(itemCount - 1);
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="p-3 d-flex flex-column align-items-center gap-3">
                <div className="w-100 text-start">
                    <Link to={`/category/${shoe.category}`} style={{ textDecoration: "none", color: "black" }}>{shoe?.category?.toLocaleUpperCase()}</Link>
                    <span>{` / ${shoe.name}`}</span>
                </div>
                <img src={shoe.image} alt={shoe.name} className="w-100 shadow-sm h-auto rounded" />
                <div className="d-flex w-100 justify-content-between align-items-center">
                    <span>{shoe.name}</span>
                    <span>${shoe.price}</span>
                </div>
                <p>{shoe.desc}</p>
                <div className="w-100 d-flex justify-content-between">
                    <div className="d-flex gap-3 align-items-center">
                        <Button variant="secondary" size="sm" onClick={decrease}>
                            <Remove />
                        </Button>
                        <span>{itemCount}</span>
                        <Button variant="secondary" size="sm" onClick={increment}>
                            <Add />
                        </Button>
                    </div>
                    <Button variant="primary" size="lg" onClick={() => onAdd()}>Agregar al Carrito</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail