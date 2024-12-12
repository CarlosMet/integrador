<<<<<<< HEAD
import React from 'react'


import Hero from '../components/Hero'
import { FloatingNav } from '../components/ui/FloatingNav'
import GridCards from '../components/GridCards'
import Footer from '../components/Footer'
=======
import React from "react";
import { Link } from "react-router-dom";
import Headers from "../components/Headers";
>>>>>>> eb123b2ceca2c242b1d2268e15bf8d7330d25f59

const Home = () => {
  return (
<<<<<<< HEAD
    <div className='bg-black-100'>
      <FloatingNav navItems={[{name: "about", link: "agregar", icon: ""}]} />      
      <Hero />
      <GridCards />
      <Footer />
=======
    <div className="container2">
      <Headers />

      <div className="image-grid">
        <div>
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <div>
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <div>
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <div>
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <div>
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <div>
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <div>
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <div>
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <div>
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
      </div>
>>>>>>> eb123b2ceca2c242b1d2268e15bf8d7330d25f59
    </div>
  );
};

export default Home;
