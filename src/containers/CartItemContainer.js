import { CartItem } from '../components';
import { CartState } from '../context/CartProvider';

const CartItemContainer = () => {
    const { cart } = CartState();

    return (
        <div className='d-flex flex-column gap-1'>
            {
                cart.map(item => <CartItem item={item} key={item.id} />)
            }
        </div>
    )
}

export default CartItemContainer