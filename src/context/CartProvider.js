import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, qty) => {
        let found = cart.find(product => product.id === item.id);
        if (found === undefined) {
            setCart([
                ...cart,
                {
                    id: item.id,
                    name: item.name,
                    category: item.category,
                    desc: item.desc,
                    price: item.price,
                    image: item.image,
                    popularity: item.popularity,
                    quantity: qty
                }
            ]);
        } else {
            found.quantity += qty;
            setCart([
                ...cart
            ]);
        }
    }

    const cleanCart = () => {
        setCart([]);
    }

    const deleteItem = (id) => {
        let result = cart.filter(item => item.id !== id);
        setCart(result);
    }

    const calcTotalPerItem = (idItem) => {
        let index = cart.map(item => item.id).indexOf(idItem);
        return cart[index].price * cart[index].quantity;
    }

    const calcSubTotal = () => {
        let totalPerItem = cart.map(item => calcTotalPerItem(item.id));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTotal = () => {
        let taxes = calcSubTotal() * 0.18;
        return calcSubTotal() + taxes;
    }

    const calcItemsQty = () => {
        return cart.length;
    }

    return <CartContext.Provider
        value={{
            cart,
            setCart,
            addToCart,
            cleanCart,
            deleteItem,
            calcTotalPerItem,
            calcSubTotal,
            calcTotal,
            calcItemsQty
        }}
    >
        {children}
    </CartContext.Provider>
    
}

export const CartState = () => useContext(CartContext);
export default CartProvider;