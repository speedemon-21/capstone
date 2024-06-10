import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../components/ShoppingCart/CartContext.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import './ItemDetailPage.scss';
import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import noImage from '../../assets/Images/noImage.jpeg';
import Modal from '../../components/Modal/Modal.jsx';
import cartIcon from '../../assets/Images/cart.png'; 

const ItemDetailsPage = () => {
  const { dispatch } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const addToCart = () => {
    if (quantity <= item.quantity && item.status !== 'Out of Stock') {
      dispatch({
        type: 'ADD_TO_CART',
        payload: { ...item, quantity: parseInt(quantity) }
      });
      setModalMessage('Item added successfully.');
    } else {
      setModalMessage('Inventory insufficient!');
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Fetch item details based on ID
    fetch(`http://localhost:8080/api/inventory/${id}`)
      .then(response => response.json())
      .then(data => setItem(data))
      .catch(error => console.error('Error fetching item details:', error));
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-details-page">
      <div className="header">
        <div className="back-button" onClick={() => navigate(-1)}>
          <img src={backArrow} alt="Go Back" />
        </div>
        <div className="cart-icon" onClick={() => navigate('/checkout')}>
          <img src={cartIcon} alt="Cart" />
        </div>
      </div>
      <h1>{item.item_name}</h1>
      <img src={item.url || noImage} alt={item.item_name} />
      <p>{item.description}</p>
      <p className={`status ${item.status === 'Out of Stock' ? 'out-of-stock' : 'in-stock'}`}>
        Status: {item.status}
      </p>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
      />
      <button onClick={addToCart}>Add to Cart</button>
      <Modal isOpen={isModalOpen} message={modalMessage} onClose={closeModal} />
    </div>
  );
};

export default ItemDetailsPage;
