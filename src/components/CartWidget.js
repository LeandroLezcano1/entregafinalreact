import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material";
import { CartState } from '../context/CartProvider';

const CartWidget = () => {
    const { calcItemsQty } = CartState();
    let productsOnCart = calcItemsQty();
    
    return (
        <>
            {
                productsOnCart !== 0
                    ? <Badge badgeContent={productsOnCart} color="info">
                        <ShoppingCartIcon style={{ color: "white" }} />
                    </Badge>
                    : <ShoppingCartIcon style={{ color: "white" }} />
            }
        </>
    );
};

export default CartWidget;