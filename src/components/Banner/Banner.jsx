
import './Banner.scss';  
import { useState } from 'react';
import greece from '../../assets/Images/greece.jpg';
import hero from '../../assets/Images/hero.png';
import iceland from '../../assets/Images/iceland.jpg';
import hawaii from '../../assets/Images/hawaii.jpg';



const images = [
  greece, hero, iceland, hawaii

];
const Banner = () => {
    const [currentImage, setCurrentImage] = useState(0);
  
    const handlePrev = () => {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
  
    const handleNext = () => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
  
    return (
      <div className="banner">
        <button onClick={handlePrev}>◀</button>
        <img src={images[currentImage]} alt="banner" />
        <button onClick={handleNext}>▶</button>
      </div>
    );
  };
  
  export default Banner;