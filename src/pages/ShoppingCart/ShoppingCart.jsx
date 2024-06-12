import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../components/ShoppingCart/CartContext.jsx';
import './ShoppingCart.scss';
import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const ShoppingCartPage = () => {
  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemoveItem = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: itemId } });
  };

  const handleQuantityChange = (itemId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity: parseInt(quantity, 10) } });
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const totalAmount = state.items.reduce((total, item) => total + (Number(item.price) * item.quantity), 0);

  return (
    <>
      <PageHeader />
      <div className="shopping-cart-page">
        <div className="shopping-cart-page__header">
          <div className="shopping-cart-page__back-button" onClick={() => navigate(-1)}>
            <img src={backArrow} alt="Go Back" />
          </div>
          <h2 className="shopping-cart-page__title">Shopping Cart</h2>
        </div>
        <div className="shopping-cart-page__items">
          {state.items.map((item) => (
            <div key={item.id} className="shopping-cart-page__item">
              <img src={item.image} alt={item.name} className="shopping-cart-page__item-image" />
              <div className="shopping-cart-page__item-details">
                <h3 className="shopping-cart-page__item-name">{item.name}</h3>
                <div className="shopping-cart-page__item-quantity">
                  <label htmlFor={`quantity-${item.id}`} className="shopping-cart-page__item-label">Quantity:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    className="shopping-cart-page__item-input"
                    min="1"
                  />
                </div>
                <p className="shopping-cart-page__item-price">${Number(item.price).toFixed(2)}</p>
                <button onClick={() => handleRemoveItem(item.id)} className="shopping-cart-page__item-remove-button">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="shopping-cart-page__total">
          <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
        </div>
        <button onClick={handleCheckout} className="shopping-cart-page__checkout-button">Proceed to Checkout</button>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCartPage;
