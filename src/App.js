import React from 'react';
import 'typeface-poppins'; // Import the Poppins font CSS
import './index.css'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './section/Home';
import {NextUIProvider} from "@nextui-org/react";
import About from './section/About';
import Portfolio from './section/Portfolio';
import Footer from './section/Footer';
import { Route, Routes } from 'react-router-dom';
import AllPortfolio from './section/AllPortfolio';
import Navbar from "./Navbar";


function App() {

  AOS.init();
  return (
    <NextUIProvider>
      <Navbar />
      <Routes>
        <Route 
          path='/' 
          element={
            <div className="App scroll-smooth max-w-screen overflow-x-hidden">
              <Home />
              <About />
              <Portfolio />
            </div>
          }
        />
        <Route 
          path='portfolio/all' 
          element={
            <div className='App scroll-smooth max-w-screen overflow-x-hidden'>
              <AllPortfolio />
            </div>
          }
        />
      </Routes>
      <Footer />
    </NextUIProvider>
    
  );
}

export default App;
