import React from 'react';
import styles from './Lips.module.css';

// Import your images

import result2 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 2.png";

import result4 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 4.png";
import result5 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 5.png";
import result6 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 6.png";
import result7 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 7.png";
import result8 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 8.png";
import result9 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 9.png";
import result10 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 10.png";
import result11 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 11.png";
import result12 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 12.png";
import result13 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 13.png";
import result14 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 14.png";
import result15 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 15.png";
import result16 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 16.png";
import result17 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 17.png";
import result18 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 18.png";

const Lips = () => {
  const images = [
    result2, result4, result5, result6, 
    result7, result8, result9, result10, result11, result12,
    result13, result14, result15, result16, result17, result18
  ];

  return (
    <>
       <div className={styles.explain}>
 הוצאתי אלפי נשים בגרסה הכי טובה שלהן בתחומים הבאים
      </div>
      <div className={styles.title}>
     מיקרופיגמנטציה לשפתיים
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

export default Lips;