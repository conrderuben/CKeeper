import React from 'react';
import NavBar from '../components/NavBar';
import { Principal } from '../components/Main';
import SobreNosotros from '../components/AboutUs';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <NavBar />
      <Principal texto="Agency for buying and selling parking spaces" />
      <SobreNosotros />
      <Footer />
    </>
  );
};

export default Home;
