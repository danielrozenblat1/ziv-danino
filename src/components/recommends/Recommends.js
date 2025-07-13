import React from 'react';
import styles from './Regular.module.css';
import Button from '../button/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your images
import result from "../../images/זיו דנינו המלצות.png";
import result1 from "../../images/זיו דנינו המלצות 1.png";
import result2 from "../../images/זיו דנינו המלצות 2.png";
import result3 from "../../images/זיו דנינו המלצות 3.png";
import result4 from "../../images/זיו דנינו המלצות 4.png";
import result5 from "../../images/זיו דנינו המלצות 5.png";
import result6 from "../../images/זיו דנינו המלצות 6.png";
import result7 from "../../images/זיו דנינו המלצות 7.png";
import result8 from "../../images/זיו דנינו המלצות 8.png";
import result9 from "../../images/זיו דנינו המלצות 9.png";
import result10 from "../../images/זיו דנינו המלצות 10.png";
import result11 from "../../images/זיו דנינו המלצות 11.png";
import result12 from "../../images/זיו דנינו המלצות 12.png";


const Recommendations = () => {
  const images = [
   result, result1, result2, result3, result4, result5, 
    result6, result7, result8, result9, result10,
    result11, result12
  ];

  const sliderSettings = {
    infinite: true,
    speed: 700,
    autoplaySpeed: 2500,
    dots: false,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: window.innerWidth < 450 ? 1 :
                  window.innerWidth <= 1050 ? 2 : 4,
    slidesToScroll: 1,
  };

  const content = images.map((img, index) => ({
    type: 'image',
    src: img
  }));

  return (
    <>
      <div className={styles.title}>ואלו ההודעות שאני מקבלת מהן:</div>
      <div className={styles.explain}>
        החליקי בין התמונות
      </div>
      <div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index} itemScope itemType="http://schema.org/Review">
              {item.type === 'image' && (
                <img
                  src={item.src}
                  className={styles.image1}
                  alt={`המלצה ${index + 1} מלקוחה מרוצה של זיו דנינו`}
                  itemProp="image"
                />
              )}
              <meta itemProp="datePublished" content={new Date().toISOString()} />
            </div>
          ))}
        </Slider>
      </div>
   
    </>
  );
};

export default Recommendations;