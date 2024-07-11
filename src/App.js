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


function App() {

  AOS.init();

  return (
    <NextUIProvider>
      <div className="App scroll-smooth max-w-screen overflow-x-hidden">
          {/* <p>Under Construction</p> */}
          <Home />
          <About />
          <Portfolio />
          <Footer />
      </div>
    </NextUIProvider>
  );
}

export default App;
