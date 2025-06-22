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

function App() {
  return <>
  <NavBarNew/>
  <FirstScreen/>
  <SecondScreen/>
  <AboutMe/>
  <Lips/>
  <Brows/>
  <TestimonialsCarousel/>
  <FormScreen/>
    <ThirdScreen/>

  <ForthScreen/>
  
  <ByMe/>

  </>
}

export default App;
