import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import StartingPage from "./pages/Starting/Starting";
import Login from './components/Login/Login';
import ItemDetailsPage from './pages/ItemDetailPage/ItemDetailPage';
import SignUp from './components/SignUp/SignUp';
import CheckoutPage from './pages/CheckOut/CheckOutPage';
import UsernamePage from './pages/UserNamePage/UsernamePage';
import ShoppingCartPage from './pages/ShoppingCart/ShoppingCart';

const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};


const ProtectedRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/" element={<StartingPage  />} />
          <Route path="/cart" element={<ShoppingCartPage  />} />
          <Route path="/item/:id" element={<ProtectedRoute element={<ItemDetailsPage />} />} />
          <Route path="/:username" element={<UsernamePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;