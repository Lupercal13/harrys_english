import About from "./components/About";
import Classes from "./components/Classes";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
