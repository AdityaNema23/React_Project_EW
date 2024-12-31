import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 onClick={() => (window.location.href = "/")} >Logo</h1>
      
      <ul>
      
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/kids">Kids</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
