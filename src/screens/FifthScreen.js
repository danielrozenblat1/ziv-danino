import styles from "./FifthScreen.module.css"
import FormScreen from "../components/form/FormScreen";
import microtouch from "../images/זיו דנינו מיקרוטאצ.png"

const FifthScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        במהלך השנים שמתי לב, שלא כל אחת צריכה טיפולי מיקרופיגמנטציה מלאים (וגם לשלם את המחיר המלא)
      </div>
      
      <div className={styles.title}>
        ולכן פיתחתי את שיטת המיקרוטאצ׳.
      </div>
      
      <div className={styles.description}>
        השיטה הזו מתאימה בדיוק לנשים שיש להן כבר בסיס יפה של גבות, אבל יש להן חורים קטנים או אזורים דלילים שצריך למלא בעדינות, מבלי להתחייב לתהליך המלא.
      </div>

      <div className={styles.imageContainer}>
        <img 
          src={microtouch} 
          alt="מיקרוטאצ׳ זיו דנינו" 
          className={styles.microtouchImage}
        />
      </div>

      <div className={styles.plainSection}>
        <h2 className={styles.sectionTitle}> אז מה זה בעצם מיקרוטאצ׳..?</h2>
        <p className={styles.sectionText}>
          מיקרוטאצ׳ זו שיטה שפיתחתי מתוך הבנה שלא תמיד צריך ללכת על כל הקופה. אם יש לך גבות שכבר שוקמו או שיש להן בסיס טוב, את יכולה לקבל טיפול קליל וממוקד למילוי חורים קטנים. התוצאה טבעית, עדינה, ומהירה.
        </p>
      </div>

      <div className={styles.contentSection}>
        <h3 className={styles.sectionSubtitle}>למי השיטה מתאימה?</h3>
        <div className={styles.suitableList}>
          <ul>
            <li>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              למי שכבר עשתה שיקום גבות ורק צריכה חיזוקים ספציפים והשלמות עדינות.
            </li>
            <li>
           <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              למי שיש בסיס יפה של גבות אבל יש חורים קטנים או אזורים דלילים.
            </li>
            <li>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              למי שרוצה להיראות טבעית ומסודרת מבלי למלא את הגבות באופן נקודתי כל פעם בעצמה.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.qaGridContainer}>
        <div className={styles.qaGrid}>
          
          <div className={styles.qaItem}>
            <h3 className={styles.sectionSubtitle}>כמה זמן הטיפול?</h3>
            <p className={styles.sectionText}>
              הטיפול לוקח כ-30 דקות בלבד.
            </p>
          </div>

          <div className={styles.qaItem}>
            <h3 className={styles.sectionSubtitle}>כמה זמן הטיפול מחזיק?</h3>
            <p className={styles.sectionText}>
              המיקרוטאצ׳ מחזיק בממוצע 3-4 חודשים, תלוי בעור ובאורח החיים שלך.
            </p>
          </div>

        </div>
      </div>

    
        <FormScreen title="לשיחת ייעוץ ללא עלות"/>
  
    </div>
  );
};

export default FifthScreen;