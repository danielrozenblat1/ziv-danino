import React from 'react';
import styles from './Recommends.module.css';
import Button from '../button/Button';

// Import your images

import result2 from "../../images/זיו דנינו מיקרופיגמנטציה בגבות 2.png";
import result3 from "../../images/זיו דנינו מיקרופיגמנטציה בגבות 3.png";

import result4 from "../../images/זיו דנינו מיקרופיגמנטציה בגבות 4.png";
import result5 from "../../images/זיו דנינו מיקרופיגמנטציה בגבות 5.png";
import result6 from "../../images/זיו דנינו מיקרופיגמנטציה בגבות 6.png";
import result7 from "../../images/זיו דנינו מיקרופיגמנטציה בגבות 7.png";
import result8 from "../../images/זיו דנינו מיקרופיגמנטציה בגבות 8.png";
import result9 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 3.png"
import result10 from "../../images/זיו דנינו מיקרופיגמנטציה בגבות 10.png";
const Brows = () => {
  const images = [
   result2, result3, result4, 
    result5, result6, result7, result8, result9, result10
  ];

  return (
    <>

      <div className={styles.title}>
מיקרופיגמנטציה בגבות
      </div>

   
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
 
    </>
  );
};

export default Brows;