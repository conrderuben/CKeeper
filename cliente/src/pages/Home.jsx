import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import { Principal } from '../components/Main';
import SobreNosotros from '../components/AboutUs';



const Home = () => {
  // const cookies = Cookies();
  // useEffect(() => {
  //   cookies.remove('user', { path: '/' });
  // }, []);
  return (
    <>  
    <NavBar />
    <Principal texto="Protegelo como si fuese tu hijo..." />
    <SobreNosotros />
    </>
  );
};

export default Home;
