import { Link, useLocation } from 'react-router-dom';
import './PageHeader.scss';
import cartIcon from '../../assets/Images/cart.png';

const PageHeader = ({ isLoggedIn, handleLogout }) => {
  const location = useLocation();

  // Check if the current location is '/admin'
  const isAdminPage = location.pathname === '/admin';

  return (
    <header className="header">
      <Link to="/" className="header__logo">Oases</Link>
      <div className="header__buttons">
        {isAdminPage && (
          <Link to="/edit-inventory" className="header__button">Edit Inventory</Link>
        )}
        <Link to="/cart" className="header__cart">
          <img src={cartIcon} alt="Cart" className="header__cart-icon" />
        </Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="header__button">Log Out</button>
        ) : (
          <Link to="/login" className="header__button">Login</Link>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
