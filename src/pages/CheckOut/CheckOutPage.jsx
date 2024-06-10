
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../components/ShoppingCart/CartContext';
import './CheckoutPage.scss';
import Modal from '../../components/Modal/Modal';
import backArrow from '../../assets/Icons/arrow_back-24px.svg';

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
    };
  
    const handleBack = () => {
      navigate(-1);
    };
  
    return (
      <div className="checkout-page">
        <div className="header">
          <img src={backArrow} alt="Go back" onClick={handleBack} className="back-arrow" />
          <h2>Checkout</h2>
        </div>
        <div className="cart-items">
          {state.items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>
                  Quantity: 
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    min="1"
                  />
                </p>
                <p>Price: ${parseFloat(item.price).toFixed(2)}</p>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">
          <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
        </div>
        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        <Modal isOpen={isModalOpen} message={modalMessage} onClose={closeModal} />
      </div>
    );
  };
  
  export default CheckoutPage;