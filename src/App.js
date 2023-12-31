import Header from './section/Header';
import About from './section/About';
import Description from './section/Description';
import Skills from './section/Skills';
import Projects from './section/Projects';
import Footer from './section/Footer';
import 'typeface-poppins'; // Import the Poppins font CSS
import './index.css'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  AOS.init();

  return (
    <div className="App scroll-smooth">
          <Header />
          <About />
          <Description />
          <Projects /> 
          <Skills />
          <Footer />
    </div>
  );
}

export default App;
