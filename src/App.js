import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About_us from './components/About_us';
import Speak from './components/Speak';
import Packages from './components/Packages';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About_us />
      <Speak />
      <Packages />
    </div>
  );
}

export default App;
