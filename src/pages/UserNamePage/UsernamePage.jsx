// UsernamePage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import Banner from '../../components/Banner/Banner';
import CategoryDropdown from '../../components/Category/CategoryDropdown';
import Footer from '../../components/Footer/Footer';
import './UsernamePage.scss';

const UsernamePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming the user is logged in initially
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the login status
    setIsLoggedIn(false);
    // Redirect to the home page
    navigate('/');
  };

  return (
    <div className="username-page">
      <PageHeader isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Banner />
      <CategoryDropdown />
      <Footer />
    </div>
  );
};

export default UsernamePage;
