import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Item = ({ shoe }) => {
    return (
        <div className="w-25 shadow-sm p-3 rounded d-flex flex-column" key={shoe.id}>
            <Link to={`/item/${shoe.id}`}>
                <img
                    src={shoe.image}
                    alt={shoe.name}
                    className="w-100 mh-25 mb-2 rounded"
                    style={{
                        height: "250px"
                    }}
                />
            </Link>
            <div className="d-flex w-100 justify-content-between align-items-center">
                <span className="fw-bold">{shoe.name}</span>
                <span>${shoe.price}</span>
            </div>
            <p>{shoe.description}</p>
            <div className="w-100 d-flex justify-content-end">
                <Link to={`/item/${shoe.id}`}>
                    <Button variant="primary" size="sm">Detalles</Button>
                </Link>
            </div>
        </div>
    )
}

export default Item