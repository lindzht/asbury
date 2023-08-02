
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/Landing';
import Footer from './components/Footer';
import About from './components/About';
import UpcomingShows from './components/UpcShows';
import PastShows from './components/PastShows';
import BookUs from './components/BookUs';
import Sponsors from './components/Sponsors';
import Submissions from './components/Submissions';
import Contact from './components/Contact';
import Login from './components/Login';
// import NavMobile from './components/NavMobile';

function App() {
  const isDesktop = useMediaQuery({query: '(min-width: 992px)'})
  const [displayMobNav, setDisplayMobNav] = useState(false);
  const handleMobileDisplay = () => {
      setDisplayMobNav(!displayMobNav);    
  }


  return (
    <div className="App">
      <Header 
        isDesktop={isDesktop}
        displayMobNav={displayMobNav}
        handleMobileDisplay={handleMobileDisplay}/>
      
        <div className={displayMobNav ? 'hide' : null}>
          <Routes>
              <Route path="/" element={<LandingPage isDesktop={isDesktop}/>}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="upcoming" element={<UpcomingShows isDesktop={isDesktop}/>}></Route>
              <Route path="past" element={<PastShows />}></Route>
              <Route path="booking" element={<BookUs />}></Route>
              <Route path="sponsorship" element={<Sponsors />}></Route>
              <Route path="submissions" element={<Submissions />}></Route>
              <Route path="contact" element={<Contact />}></Route>
              <Route path="login" element={<Login />}></Route>
            {/* <Route path="menu" element={<NavMobile />}></Route> */}
          </Routes>
        </div>
      
      <Footer isDesktop={isDesktop}/>
    </div>
  );
}

export default App;
