import { Link } from "react-router-dom";
import { useCart } from './CartContext'; 
import './Navbar.css';

const Navbar = () => {
  const { cart } = useCart(); 

  return (
    <div className="navbar">
      <h1 className="heading">Trendify</h1>

      <ul>
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/Jewelery">Jewelery</Link></li>
        <li><Link to="/cart">Cart ({cart.length})</Link></li> 
      </ul>
    </div>
  );
};

export default Navbar;

