
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import LandingPage from './components/Landing';
import Footer from './components/Footer';
import About from './components/About';
import UpcomingShows from './components/UpcomingShows';
import PastShows from './components/PastShows';
import BookUs from './components/BookUs';
import Sponsors from './components/Sponsors';
import Submissions from './components/Submissions';
import Contact from './components/Contact';
import NavMobile from './components/NavMobile';

function App() {
  return (
    <div className="App">
      <Header />
      
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="upcoming" element={<UpcomingShows />}></Route>
          <Route path="past" element={<PastShows />}></Route>
          <Route path="booking" element={<BookUs />}></Route>
          <Route path="sponsorship" element={<Sponsors />}></Route>
          <Route path="submissions" element={<Submissions />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="menu" element={<NavMobile />}></Route>
        </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
