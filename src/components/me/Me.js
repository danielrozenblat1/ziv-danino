import React, { useEffect, useRef } from 'react';
import styles from './Me.module.css';
import editPhoto from "../../images/זיו דנינו.png";
import ScrollReveal from 'scrollreveal';

const AboutMe = () => {
  const containerRef = useRef(null);

  // ScrollReveal configuration
  useEffect(() => {
    if (containerRef.current) {
      const sr = ScrollReveal({
        duration: 1000,
        delay: 150,
        opacity: 0,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        container: window.document.documentElement,
        mobile: true,
        reset: false,
        viewFactor: 0.2
      });

      sr.reveal(`.${styles.revealItem}`, {
        origin: 'bottom',
        distance: '20px',
        interval: 100
      });
    }

    return () => {
      ScrollReveal().destroy();
    };
  }, []);

  // Handle button click to navigate to form
  const handleFormNavigation = () => {
    const formElement = document.getElementById('טופס');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <section ref={containerRef} className={styles.section} id="מי-אני">
        <div className={styles.container}>
          <div className={`${styles.imageWrapper} ${styles.revealItem}`}>
            <img src={editPhoto} alt="זיו דנינו" className={styles.image} />
          </div>

          <div className={`${styles.content} ${styles.revealItem}`}>
            <h2 className={styles.mainTitle}>נעים מאוד, זיו דנינו</h2>

            <div className={styles.quoteContainer}>
              <p className={styles.quote}>
                "התשוקה והפרפקציוניזם שלי הביאו אותי לכאן – לתת לכל אישה את התחושה שהיא יפה ובטוחה בעצמה."
              </p>
            </div>

            <div className={styles.textBlock}>
              <p className={styles.paragraph}>
                כבר מגיל קטן ידעתי שגבות הן הבעה - תמיד הייתי זו שמסדרת גבות לחברות ולבנות המשפחה.
                <strong>התשוקה הזו לדיוק ולטבעיות</strong> גרמה לי להבין שיש לי יכולת לראות בדיוק מה כל אישה צריכה - בגבות, בשפתיים ובריסים.
              </p>

              <div className={styles.divider}></div>

      <p className={styles.paragraph}>
     גם לי בתור נערה היו גבות דלילות ולא סימטריות ואני זוכרת איך תמיד ישבתי מול המראה שעות כדי להשלים ולסדר אותן, עד שהחלטתי שאני חייבת ללמוד את התחום על מנת לעשות את זה לעצמי ולאחרות בצורה הכי טבעית ומבוקרת שיש
              </p>

              <div className={styles.divider}></div>

        
              <p className={styles.paragraph}>
                היום, אחרי עשור בתחום, אני יודעת בדיוק איך את מרגישה ואני כאן כדי להקשיב לצרכים שלך, להוציא אותך ממני בגרסה הכי יפה של עצמך,
                ולעזור לך להתגבר על הפחד שתמיד היה לך עד לשינוי שתמיד חיפשת לעשות - <strong>בצורה הכי טבעית שיש</strong>.
       
              </p>

              <p className={styles.finalText}>
                כי לכל אישה מגיע להרגיש יפה ובטוחה – עם תוצאה טבעית שמתאימה בדיוק לה.
              </p>
            </div>

            <button 
              className={styles.ctaButton}
              onClick={handleFormNavigation}
            >
              <span className={styles.buttonIcon}>💬</span>
              בואי נדבר על התוצאה שמגיעה לך
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;