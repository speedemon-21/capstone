import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../components/ShoppingCart/CartContext';
import Modal from '../../components/Modal/Modal';
import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import './CheckoutPage.scss';

const CheckoutPage = () => {
  const { state, dispatch } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const navigate = useNavigate();

  const handleQuantityChange = (itemId, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: itemId, quantity: parseInt(quantity) }
    });
  };

  const handleRemoveItem = (itemId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id: itemId }
    });
  };

  const totalAmount = state.items.reduce((total, item) => {
    const price = parseFloat(item.price);
    const quantity = item.quantity || 1;
    return total + (price * quantity);
  }, 0);

  const handleCheckout = () => {
    setModalMessage('Checkout successful!');
    dispatch({ type: 'CLEAR_CART' });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/username'); // Redirect to /username after checkout and closing the modal
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-page__header">
        <img src={backArrow} alt="Go back" onClick={handleBack} className="checkout-page__back-arrow" />
        <h2 className="checkout-page__title">Checkout</h2>
      </div>
      <div className="checkout-page__cart-items">
        {state.items.map(item => (
          <div key={item.id} className="checkout-page__cart-item">
            <img src={item.image} alt={item.name} className="checkout-page__item-image" />
            <div className="checkout-page__item-details">
              <h3 className="checkout-page__item-name">{item.name}</h3>
              <p className="checkout-page__item-quantity">
                Quantity: 
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  min="1"
                  className="checkout-page__item-input"
                />
              </p>
              <p className="checkout-page__item-price">Price: ${parseFloat(item.price).toFixed(2)}</p>
              <button onClick={() => handleRemoveItem(item.id)} className="checkout-page__remove-button">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="checkout-page__total">
        <h3 className="checkout-page__total-amount">Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>
      <button className="checkout-page__checkout-button" onClick={handleCheckout}>Checkout</button>
      <Modal isOpen={isModalOpen} message={modalMessage} onClose={closeModal} />
    </div>
  );
};

export default CheckoutPage;
