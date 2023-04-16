import { Button } from "react-bootstrap";
import ReactCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Carousel = ({ shoes }) => {
    return (
        <ReactCarousel responsive={responsive} infinite={true}>
            {
                shoes.map((shoe) => (  
                    <div className="w-100 shadow-sm p-3 rounded d-flex flex-column" key={shoe.id}>
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
                ))
            }
        </ReactCarousel>
    )
}

export default Carousel