import "./Cart.css";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price} x {product.quantity}</p>
              <button onClick={() => updateQuantity(product.id, 'decrease')}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => updateQuantity(product.id, 'increase')}>+</button>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      <div className="cart-total">
        <h3>
          Total: $
          {cart.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
