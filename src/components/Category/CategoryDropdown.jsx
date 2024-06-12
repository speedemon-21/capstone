// CategoryDropdown.jsx

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CategoryDropdown.scss';
import noImage from '../../assets/Images/noImage.jpeg';

const CategoryDropdown = () => {
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
  
    useEffect(() => {
      // Fetch all items from the API
      fetch('http://localhost:8080/api/inventory/')
        .then(response => response.json())
        .then(data => {
          setItems(data);
          // Extract unique categories from the fetched data
          const uniqueCategories = [...new Set(data.map(item => item.category))];
          setCategories(uniqueCategories);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    const handleSelect = (event) => {
      const category = event.target.value;
  
      if (category) {
        // Filter items based on selected category
        const filtered = items.filter(item => item.category === category);
        setFilteredItems(filtered);
      } else {
        setFilteredItems([]); // Clear filtered items if no category is selected
      }
    };
  
    return (
      <div className="category-dropdown">
        <p className="category-dropdown__prompt">Select a category to explore:</p>
        <select onChange={handleSelect}>
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        {filteredItems.length > 0 && (
          <div className="category-display">
            {filteredItems.map((item) => (
              <div key={item.id} className="item">
                <Link to={`/item/${item.id}`}>
                  <img src={item.url || noImage} alt={item.item_name} />
                </Link>
                <p><strong>{item.item_name}</strong></p>
                <p>{item.description}</p>
                <p>Status: {item.status}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
            ))}
          </div>
        )}
        {filteredItems.length === 0 && (
          <p className="no-items-message">No items found for the selected category. Try another one!</p>
        )}
      </div>
    );
  };
  
  export default CategoryDropdown;
