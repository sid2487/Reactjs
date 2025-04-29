import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
      <div>
        <h2>Cart</h2>
        {
            cartItems.length == 0 ? (
                <p>Cart is Empty</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id}>
                        <span>{item.name}</span>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))
            )
        }
      </div>
    );
};

export default  Cart;