import styles from "./SecondScreen.module.css"
import SmallBox from "../components/SmallBox/SmallBox"
import needle from "../icons/wired-lineal-775-needle-hover-pinch.json"
import IconTextComponent from "../components/can/Can"
import breaks from "../icons/wired-outline-25-error-cross-morph-error-appear.json"
import mirror from "../icons/wired-lineal-1589-makeup-mirror-hover-pinch.json"
import lipstick from "../icons/wired-lineal-1559-lipstick-hover-pinch.json"
import money from "../icons/wired-lineal-414-money-bag-dollar-hover-shake (3).json"
const SecondScreen = () => {
  return <>
    <div className={styles.title}>אני יודעת בדיוק למה את כאן</div>
    <div className={styles.description}>את כאן כי את מחפשת כבר תקופה לעשות שינוי בשפתיים/בגבות שלך ונמאס לך</div>
    

<div className={styles.row}>
  <SmallBox 
    icon={mirror}
    text="לקום כל בוקר ולבלות זמן מול המראה בתיקון פגמים וחורים"
  />
  
  <SmallBox 
    icon={lipstick}
    text="לתחזק את האודם כל כמה שעות כי הוא נמרח ולא עמיד"
  />
  
  <SmallBox 
    icon={money}
    text="להוציא כסף כל חודש על עפרונות ופלטות שחיפשת בכל החנויות"
  />
</div>
        <div className={styles.title}>אבל בסוף תמיד זה נעצר.. כי</div>
    <div className={styles.row}>
      <IconTextComponent 
        icon={breaks}
        text="את מפחדת שהתוצאה תיראה מוגזמת מדי ולא טבעית"
      />
      
      <IconTextComponent 
        icon={breaks}
        text="את חוששת שהטיפול יכאב מדי ולא תעמדי בזה"
      />
      <IconTextComponent 
        icon={breaks}
        text="את מפחדת שהתוצאה תהיה כמו האיפור קבוע של פעם"
      />
    </div>

         <div className={styles.titleUnderline}>אני כאן לשים סוף לפחדים שלך</div>
  </>
}

export default SecondScreen