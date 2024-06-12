// Banner.jsx
import { useState } from 'react';
import './Banner.scss';
import greece from '../../assets/Images/greece.jpg';
import iceland from '../../assets/Images/iceland.jpg';
import hawaii from '../../assets/Images/hawaii.jpg';

const images = [
  greece, iceland, hawaii
];

const slogans = [
  "Shop the world's best destinations",
  "Find your next adventure",
  "Discover exotic treasures"
];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="banner">
      <div className="banner__slogan">{slogans[currentImage]}</div>
      <button onClick={handlePrev} className="banner__button">◀</button>
      <img src={images[currentImage]} alt="banner" className="banner__image" />
      <button onClick={handleNext} className="banner__button">▶</button>
    </div>
  );
};

export default Banner;
