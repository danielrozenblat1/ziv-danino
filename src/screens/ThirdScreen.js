import styles from "./ThirdScreen.module.css"
import { FaLightningBolt, FaBullseye, FaDumbbell, FaLeaf, FaSparkles, FaCheckCircle, FaExclamationTriangle, FaClock, FaCalendarAlt, FaUsers, FaRegHandPaper } from 'react-icons/fa'
import microtouch from "../images/זיו דנינו מיקרוטאצ.png"
import TreatmentsDrawer from "../components/treatment/Treatments"

const ThirdScreen = () => {
    return (
        <>
             <div className={styles.title}>קצת על כל טיפול</div>
            <div className={styles.description}>ריכזתי עבורך את כל המידע והתשובות לשאלות שבטוח עלו לך לראש עד עכשיו.. לחצי על כל טיפול כדי לקבל את המידע עליו</div>
<TreatmentsDrawer/>
        </>
    )
}

export default ThirdScreen