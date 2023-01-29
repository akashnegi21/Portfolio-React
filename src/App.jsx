import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Hero1 from "./components/Hero/Hero1";
import Portfolio from "./components/Portfolio/Portfolio";
import Qualification from "./components/Qualificatoin/Qualification";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import css from './styles/App.module.css';
const App = () => {
  //don't forget to add font link in index.html
  return(
    <div className={`bg-primary ${css.container}`}>
  <Header/>
     {/* <Hero/>  */}
    <Hero1/>
    <Qualification/>
    <Experties/>
    <Skills/>
    <Portfolio/>
    <Testimonials/>
    <Footer/>
    </div>
  )

};

export default App;
