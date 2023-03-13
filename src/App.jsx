import About from "./components/About";
import Classes from "./components/Classes";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Classes />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
