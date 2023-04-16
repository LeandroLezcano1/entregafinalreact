import { useEffect, useState } from 'react';
import { firestoreFetchOne } from '../utils/firestoreFetch';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import { Star, StarHalf, StarOutline } from "@mui/icons-material";

const ProductDetailPage = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        firestoreFetchOne(id)
            .then(result => setProduct(result))
            .catch(err => console.log(err));
    }, [id]);

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 !== 0 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;
        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={i} sx={{ color: "#EFCA07" }} />);
        };
        if (halfStars) {
            stars.push(<StarHalf key={fullStars} sx={{ color: "#EFCA07" }} />);
        };
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<StarOutline key={fullStars + halfStars + i} sx={{ color: "#EFCA07" }} />);
        };
        return stars;
    };

    return (
        <Container className='my-4 px-3'>
            <h1 className='fs-1 fw-bold mb-4'>Detalles del producto</h1>
            <Row className='justify-content-between'>
                <Col xs={4} className='p-3 d-flex flex-column justify-content-start align-items-start border-end'>
                    <img className='w-100 shadow-sm rounded mb-2' src={product.image} alt={product.name} />
                    <div className='mb-3 d-flex'>{renderStars(product.popularity)}</div> 
                    <div className='mb-3 pe-2 w-100 d-flex justify-content-between'>
                        <span>{product.name}</span>
                        <span>${product.price}</span>
                    </div>
                    <p>{product.desc}</p>
                </Col>
                <Col xs={8}>
                    <ItemDetailContainer shoe={product} />
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetailPage