import { Item } from "../components";

const ItemListContainer = ({ shoes }) => {
    return (
        <div className='pt-2 d-flex flex-wrap justify-content-between gap-4'>
            {
                shoes.map((shoe) => <Item shoe={shoe} key={shoe.id} />)
            }
        </div>
    );
};

export default ItemListContainer;