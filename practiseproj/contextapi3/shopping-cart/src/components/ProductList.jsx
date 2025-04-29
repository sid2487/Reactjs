import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
    {id: 1, name: "Laptop"},
    {id: 2, name: "Phone"},
    {id: 3, name: "Headphones"},
];

const ProductList = () => {
    const { addToCart } = useContext(CartContext);

    return (
      <div>
        <h2>Product</h2>
        {
            products.map((product) => (
                <div key={product.id}>
                    <span>{product.name}</span>
                    <button onClick={() => addToCart(product)}>Add to cart</button>
                </div>
            ))
        }
      </div>
    );
};

export default ProductList;