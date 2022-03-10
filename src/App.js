import "./App.scss";
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import About from "./pages/about/About";
import Galery from "./pages/gallery/Galery";
import Contact from "./pages/contact/Contact";
import Estimation from "./pages/services/Estimation";
import ScrollTop from "./components/scrollTop/ScrollTop";

function App() {
  return (
    <div className="App container">
      <ScrollTop />
      <Navbar></Navbar>
      <div className="row" id="home">
        <Home />
      </div>
      <div className="row mt-3" id="services">
        <Services />
      </div>
      <div className="row mt-3" id="estimation">
        <Estimation />
      </div>
      <div className="row mt-3" id="apropos">
        <About />
      </div>
      <div className="row mt-3" id="galerie">
        <Galery />
      </div>
      <div className="row mt-3 mb-3" id="contact">
        <Contact />
      </div>
  </div>
  );
}

export default App;
