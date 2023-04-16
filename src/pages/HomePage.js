import { useState, useEffect } from "react";
import { firestoreFetch } from "../utils/firestoreFetch";
import { useParams } from "react-router-dom";

import ItemListContainer from "../containers/ItemListContainer";
import { Carousel } from "../components";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    const sortedProductsByPopularity = [...products].sort((a, b) => b.popularity - a.popularity).slice(0, 5);
    const filteredProductsByCategory = categoryId && products.filter((product) => product.category === categoryId)

    useEffect(() => {
        firestoreFetch()
            .then(result => setProducts(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <main className="container mt-4">
            <div className="flex flex-column">
                <h2 className="mb-0 fs-1 fw-bold">Catálogo</h2>
                <h6 className="mb-3 fs-6 fw-normal">Mejor calidad/precio del universo</h6>
                <span>{categoryId ? categoryId.toLocaleUpperCase() : "Todos"}</span>
                {
                    categoryId
                        ? <ItemListContainer shoes={filteredProductsByCategory} />
                        : <ItemListContainer shoes={products} />
                }
            </div>
            <div className="mt-5 flex flex-column">
                <h2 className="mb-0 fs-1 fw-bold">Más vendidos</h2>
                <h6 className="mb-3 fs-6 fw-normal">Guíate por los mejores del mes</h6>
                <Carousel shoes={sortedProductsByPopularity} />
            </div>
        </main>
    )
}

export default HomePage