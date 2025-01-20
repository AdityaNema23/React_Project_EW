import { Link } from "react-router-dom";
import { useCart } from './CartContext';
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const { cart } = useCart();

  const [categoryOpen, setCategoryOpen] = useState(false);

  
  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/">
        <h1 className="heading">Trendify</h1>
      </Link>

    
      <div className="navbar-right">
       
        <div className="dropdown" onClick={toggleCategory}>
          <button className="dropdown-button">Categories 🔽</button>
          {categoryOpen && (
            <div className="dropdown-content">
              <Link to="/men">Men</Link>
              <Link to="/women">Women</Link>
              <Link to="/jewelry">Jewelry</Link>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="cart-link">
          <FaShoppingCart size={24} />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
