import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About_us from '../components/About_us';
import Speak from '../components/Speak';
import Packages from '../components/Packages';
import Song_List from '../components/Song_List';
import Thoughts from '../components/Thoughts';
import Why_us from '../components/Why_us';
import Awards from '../components/Awards';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <About_us />
      <Speak />
      <Packages />
      <Song_List />
      <Thoughts />
      <Why_us />
      <Awards />
      <Footer />
    </div>
  );
}

export default Home;
