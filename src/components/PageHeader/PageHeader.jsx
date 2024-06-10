import "./PageHeader.scss";


import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../ShoppingCart/CartContext.jsx';

const PageHeader = () => {
  const { state } = useContext(CartContext);

  return (
    <header className="header">
      <div className="logo">Oases</div>
      <Link to="/login" className="login-button">Login</Link>
      <Link to="/checkout" className="cart-button">
        <i className="fa fa-shopping-cart"></i>
        <span className="cart-count">{state.items.length}</span>
      </Link>
    </header>
  );
};

export default PageHeader;