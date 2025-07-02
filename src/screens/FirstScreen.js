import React, { useEffect, useState } from 'react';
import styles from './FirstScreen.module.css';
import ziv from "../images/זיו דנינו ללא רקע.png"
import Loader from '../components/loader/Loader';

const FirstScreen = () => {
  // עבור הגרדיאנט המרחף
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // עבור טעינת התמונה
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // מעקב אחרי מיקום העכבר עבור אפקט הגרדיאנט
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // טעינת התמונה מראש
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      // אם יש שגיאה בטעינת התמונה, עדיין נציג את הקומפוננטה
      setImageLoaded(true);
    };
    img.src = ziv;
  }, []);

  // פונקציה לגלילה לטופס - גלילה חלקה יותר
  const scrollToForm = () => {
    const formElement = document.getElementById('טופס');
    if (formElement) {
      // קבלת המיקום הנוכחי והמיקום היעד
      const targetPosition = formElement.getBoundingClientRect().top + window.pageYOffset - 80; // 80px offset מהחלק העליון
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1200; // משך הגלילה במילישניות (1.2 שניות)
      let start = null;

      // פונקציית easing לגלילה חלקה יותר
      const easeInOutQuart = (t) => {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
      };

      // אנימציית הגלילה
      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        window.scrollTo(0, startPosition + distance * easeInOutQuart(progress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  // אם התמונה לא נטענה עדיין, הצג Loader
  if (!imageLoaded) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      {/* גרדיאנט אינטראקטיבי */}
      <div 
        className={styles.gradientBackground} 
        style={{
          background: `radial-gradient(
            circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(139, 111, 78, 0.12),
            rgba(101, 67, 33, 0.04) 40%,
            transparent 70%
          )`
        }}
      />
      
      <div className={styles.content}>
        {/* Intro Header with Glass Background - Wrapper Only */}
        <div className={`${styles.introHeader} ${styles.fadeInElement}`}>
          <div className={styles.introText}>
            <h3 className={styles.introTitle}>לאחר עשור בתחום היופי</h3>
            <p className={styles.introDescription}>זיו דנינו מציגה:</p>
          </div>
        </div>
        
        {/* Title - Outside Wrapper with 3 separate underlines */}
        <div className={`${styles.title} ${styles.fadeInElement}`}>
          הדרך לגבות ושפתיים טבעיות וסימטריות
          <span className={styles.bold}>
            {' '}<span className={styles.underline1}>בלי תחזוק יומיומי</span>,{' '}
            <span className={styles.underline2}>בלי כאב</span>{' '}<span className={styles.underline3}>ובלי להיראות עשויה ומוגזמת</span>
          </span>
        </div>
        
        {/* Hero Image ללא אפקט פרלקס */}
        <div className={`${styles.heroImageContainer} ${styles.fadeInElement}`}>
          <img 
            src={ziv}
            alt="זיו דנינו"
            className={styles.heroImage}
          />
        </div>
        
        {/* CTA Button - רחב וגדול יותר */}
        <button 
          className={`${styles.ctaButton} ${styles.fadeInElement}`}
          onClick={scrollToForm}
        >
          <span className={styles.buttonText}>זיו אני רוצה לשריין טיפול</span>
          <div className={styles.buttonGlow}></div>
        </button>
      </div>
    </div>
  );
};

export default FirstScreen;