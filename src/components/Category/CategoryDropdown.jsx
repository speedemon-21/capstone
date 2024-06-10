import { useState } from 'react';
import './CategoryDropdown.scss'; 
import greece from '../../assets/Images/greece.jpg';
import iceland from '../../assets/Images/iceland.jpg';
import hawaii from '../../assets/Images/hawaii.jpg';

const categories = {
  "Category 1": { img: hawaii, description: 'Description for Category 1' },
  "Category 2": { img: iceland, description: 'Description for Category 2' },
  "Category 3": { img: greece, description: 'Description for Category 3' },
};

const CategoryDropdown = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const handleSelect = (event) => {
      setSelectedCategory(categories[event.target.value]);
    };
  
    return (
      <div className="category-dropdown">
        <select onChange={handleSelect}>
          <option value="">Select a category</option>
          {Object.keys(categories).map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        {selectedCategory && (
          <div className="category-display">
            <img src={selectedCategory.img} alt={selectedCategory.description} />
            <p>{selectedCategory.description}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default CategoryDropdown;