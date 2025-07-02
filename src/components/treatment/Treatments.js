import React, { useState } from 'react';
import { FaUsers, FaPlus, FaMinus } from 'react-icons/fa';
import styles from './Treatments.module.css';

// Import הרמת ריסים images
import riss1 from "../../images/הרמת ריסים נושא.jpeg";
import riss2 from "../../images/זיו דנינו הרמת ריסים-2.png";
import riss3 from "../../images/זיו דנינו הרמת ריסים 3.png"

// Import מיקרופיגמנטציה בגבות images
import gabotMicro1 from "../../images/זיו דנינו מיקרופיגמנטציה בגבות 2.png";
import gabotMicro2 from "../../images/זיו דנינו מיקרופיגמנטציה בגבות 5.png";
import gabotMicro3 from "../../images/זיו דנינו מיקרופיגמנטציה בגבות 4.png";
import gabotMicro4 from "../../images/זיו דנינו מיקרופיגמנטציה בגבות 10.png";
import gabotMicro5 from "../../images/זיו דנינו מיקרופיגמנטציה בגבות 11.png";
import gabotMicro6 from "../../images/זיו דנינו מיקרופיגמנטציה משולב.png";
// Import מיקרופיגמנטציה בשפתיים images
import sfatayimMicro1 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 6.png";
import sfatayimMicro2 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 10.png";
import sfatayimMicro3 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 11.png";
import sfatayimMicro4 from "../../images/זיו דנינו מיקרופיגמנטציה בשפתיים 9.png";
import sfatayimMicro5 from "../../images/זיו דנינו שפתיים ראשית.png";
// Import מיקרוטאץ' images
import microTouch1 from "../../images/זיו דנינו מיקרוטאצ 1.png";
import microTouch2 from "../../images/זיו דנינו מיקרוטאצ 2.png";
import microTouch3 from "../../images/זיו דנינו מיקרוטאצ 3.png";
import microTouch4 from "../../images/זיו דנינו מיקרוטאצ 4.png";
import microTouch5 from "../../images/מיקרוטאצ ראשית.jpeg";
const TreatmentsDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(null);

  const treatments = [
    {
      id: 1,
      name: 'מיקרופיגמנטציה לגבות',
      description: '2 טיפולים. תוצאה טבעית ומדויקת ללא צורך בתחזוקה יום יומית',
      mainImage: gabotMicro6,
      additionalImages: [gabotMicro1, gabotMicro2, gabotMicro3, gabotMicro4 ,gabotMicro5],
      problems: [
        'פתרון לגבות לא סימטריות או דלילות', 
        'חיסכון בזמן יקר כל בוקר', 
        'תוצאה עמידה',
        'מראה טבעי ומדויק ללא מראה "עשוי"'
      ],
      suitableFor: [
        'נשים שמחפשות מראה טבעי לגבות', 
        'נשים שיש להן גבות לא סימטריות או עם חורים',
        'נשים שרוצות להרגיש יפות ובטוחות בעצמן',
        'נשים שרוצות להרגיש שלמות עם הגבות שלהן מול המראה'
      ]
    },
    {
      id: 2,
      name: 'מיקרופיגמנטציה לשפתיים',
      description: '2 טיפולים. פתרון לשפתיים כהות ויצירת סימטריה מושלמת',
      mainImage: sfatayimMicro5,
      additionalImages: [sfatayimMicro1, sfatayimMicro2, sfatayimMicro3, sfatayimMicro4],
      problems: [
        'שפתיים כהות הזקוקות לנטרול והבהרה',
        'חוסר סימטריה או צורה לא מושלמת',
        'רצון במראה עדין וטבעי שמחזיק לאורך זמן'
      ],
      suitableFor: [
        'נשים הרוצות צבע קבוע וטבעי לשפתיים',
        'בעלות שפתיים כהות או לא סימטריות',
        'מי שמשקיעה זמן רב באיפור השפתיים',
        'מי שרוצה להרגיש קלילה ובטוחה'
      ]
    },
    {
      id: 3,
      name: 'מיקרוטאצ\'',
      description: 'שיטה ייחודית שפיתחתי למילוי חורים קטנים בגבות. 30 דקות בלבד, מחזיק 3-4 חודשים',
      mainImage: microTouch5,
      additionalImages: [microTouch1, microTouch2, microTouch3, microTouch4],
      problems: [
        'חורים קטנים בגבות הדורשים מילוי עדין',
        'צורך בפתרון מהיר ולא יקר',
        'רצון בתוצאה טבעית ללא השקעה גדולה',
        'תחזוקה קלה של גבות שכבר יפות'
      ],
      suitableFor: [
        'מי שיש לה כבר בסיס גבות יפה ומסודר',
        'מי שרוצה פתרון מהיר, נגיש ויעיל',
        'מי שלא זקוקה לשינוי צורה קריטי של הגבות',
      
      ]
    },
    {
      id: 4,
      name: 'הרמת ריסים',
      description: 'הרמה טבעית שגורמת לריסים להראות כמו מסקרה ללא פגיעה בשערה הטבעית. טיפול עד שעה, מחזיק עד חודשיים',
      mainImage: riss1,
      additionalImages: [riss1,riss3 ],
      problems: [
        'ריסים ישרים ושטוחים',
        'מראה עייף של העיניים',
        'צורך במסקרה מדי יום',
        'רצון במראה טבעי ונפוח לריסים'
      ],
      suitableFor: [
        'נשים בכל הגילאים עם ריסים טבעיים',
        'מי שרוצה מראה טבעי ולא מוגזם',
        'מי שרוצה לחסוך זמן באיפור היומי',
        'מי שמחפשת פתרון זמני ועדין לריסים שלה'
      ]
    }
  ];

  const toggleDrawer = (id) => {
    setOpenDrawer(openDrawer === id ? null : id);
  };

  return (
    <div className={styles.treatmentsContainer}>
      {treatments.map((treatment) => (
        <div key={treatment.id} className={styles.drawerContainer}>
          {/* Header */}
          <div className={styles.drawerHeader} onClick={() => toggleDrawer(treatment.id)}>
            <div className={styles.toggleButton}>
              <span className={`${styles.icon} ${openDrawer === treatment.id ? styles.iconOpen : ''}`}>
                {openDrawer === treatment.id ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            
            <div className={styles.headerContent}>
              <div className={styles.textContent}>
                <h3 className={styles.treatmentName}>{treatment.name}</h3>
                <p className={styles.treatmentDescription}>{treatment.description}</p>
              </div>
              <div className={styles.mainImageContainer}>
                <img 
                  src={treatment.mainImage} 
                  alt={treatment.name}
                  className={styles.mainImage}
                />
              </div>
            </div>
          </div>

          {/* Expanded Content */}
          {openDrawer === treatment.id && (
            <div className={styles.drawerContent}>
              <div className={styles.contentSection}>
                <div className={styles.infoSection}>
                  <div className={styles.problemsSection}>
                    <div className={styles.sectionHeader}>
                      <FaUsers className={styles.sectionIcon} />
                      <h4>איזה בעיות הטיפול פותר</h4>
                    </div>
                    <ul className={styles.problemsList}>
                      {treatment.problems.map((problem, index) => (
                        <li key={index}>{problem}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.suitableSection}>
                    <div className={styles.sectionHeader}>
                      <FaUsers className={styles.sectionIcon} />
                      <h4>למי הטיפול מתאים</h4>
                    </div>
                    <ul className={styles.suitableList}>
                      {treatment.suitableFor.map((suitable, index) => (
                        <li key={index}>{suitable}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.imagesGrid}>
                  <h4 className={styles.gridTitle}>תמונות נוספות</h4>
                  <div className={styles.imageGrid}>
                    {treatment.additionalImages.map((image, index) => (
                      <div key={index} className={styles.gridImageContainer}>
                        <img 
                          src={image} 
                          alt={`${treatment.name} - תמונה ${index + 1}`}
                          className={styles.gridImage}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.actionSection}>
                  <button 
                    className={styles.detailsButton}
                    onClick={() => {
                      // כאן תוכל להוסיף ניווט ל-ID "טופס"
                      const formElement = document.getElementById('טופס');
                      if (formElement) {
                        formElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    לעוד פרטים
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TreatmentsDrawer;