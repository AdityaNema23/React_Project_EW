import { Link } from "react-router-dom";
import { useCart } from './CartContext'; // Import the useCart hook
import './Navbar.css';

const Navbar = () => {
  const { cart } = useCart();  // Access the cart from context

  return (
    <div className="navbar">
      <h1 onClick={() => (window.location.href = "/")} >Logo</h1>
      
      <ul>
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/kids">Kids</Link></li>
        <li><Link to="/cart">Cart ({cart.length})</Link></li> {/* Display number of items in cart */}
      </ul>
    </div>
  );
};

export default Navbar;

