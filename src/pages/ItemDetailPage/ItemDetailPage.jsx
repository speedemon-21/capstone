// ItemDetailsPage.jsx

import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../components/ShoppingCart/CartContext.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import './ItemDetailPage.scss';
import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import noImage from '../../assets/Images/noImage.jpeg';
import Modal from '../../components/Modal/Modal.jsx';
import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import Footer from '../../components/Footer/Footer.jsx';

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
    <>
      <PageHeader />
      <div className="item-details-page">
        <div className="item-details-page__header">
          <div className="item-details-page__back-button" onClick={() => navigate('/')}>
            <img src={backArrow} alt="Go Back" />
          </div>
        </div>
        <h1 className="item-details-page__title">{item.item_name}</h1>
        <img src={item.url || noImage} alt={item.item_name} className="item-details-page__image"/>
        <p className="item-details-page__description">{item.description}</p>
        <p className={`item-details-page__status ${item.status === 'Out of Stock' ? 'item-details-page__status--out-of-stock' : 'item-details-page__status--in-stock'}`}>
          Status: {item.status}
        </p>
        <h2 className="item-details-page__name">{item.name}</h2>
        <p className="item-details-page__description">{item.description}</p>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          className="item-details-page__quantity"
        />
        <button onClick={addToCart} className="item-details-page__add-to-cart">Add to Cart</button>
        <Modal isOpen={isModalOpen} message={modalMessage} onClose={closeModal} />
      </div>
      <Footer />
    </>
  );
};

export default ItemDetailsPage;
