import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../NavBar.css'; 
import { FaShoppingCart } from "react-icons/fa";

const NavBar: React.FC = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <ul>
        <div>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
        </div>
        <div>
            <li><Link to="/cart"><FaShoppingCart /> {totalItems}</Link></li>
        </div>
        
      </ul>
    </nav>
  );
};

export default NavBar;
