import Nav from './components/Nav';
import Hero from './components/Hero';
import About_us from './components/About_us';
import Speak from './components/Speak';
import Packages from './components/Packages';
import Song_List from './components/Song_List';
import Contact from './components/Contact';
import Thoughts from './components/Thoughts';
import Why_us from './components/Why_us';
import Awards from './components/Awards';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import See_us from './components/See_us';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/see-us" element={<See_us />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
