import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import AboutMe from './components/me/Me';
import Brows from './components/recommends/Brows';
import Lips from './components/recommends/Lips';
import ThirdScreen from './screens/ThirdScreen';
import NavBarNew from './components/CourseNav/NavBarNew';
import TestimonialsCarousel from './components/carousel/Carousel';
import FormScreen from './components/form/FormScreen';
import ForthScreen from './screens/ForthScreen';
import ByMe from './components/ByMe/ByMe';
import TreatmentsDrawer from './components/treatment/Treatments';
import FifthScreen from './screens/FifthScreen';
import Recommendations from './components/recommends/Recommends';

function App() {
  return <>
  <NavBarNew/>
  <FirstScreen/>
  <SecondScreen/>
  <AboutMe/>
  <Lips/>
  <Brows/>
    <FifthScreen/>
<Recommendations/>
  

  <FormScreen/>
  {/* <FifthScreen/> */}
    <ThirdScreen/>

  <ForthScreen/>
  
  <ByMe/>

  </>
}

export default App;
