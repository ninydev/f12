import './App.css';

import Navigation from "./components/Navigation";
import Masthead from "./components/Masthead";
import Projects from "./components/Projects";
import About from "./components/About";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
      <>
        <BrowserRouter>
          <Navigation></Navigation>
            <Routes>
              <Route path="/" element={<Masthead></Masthead>} />
              <Route path="/about" element={<About></About>} />
              <Route path="/projects" element={<Projects></Projects>} />
              <Route path="/signup" element={<Signup></Signup>} />
              <Route path="/contact" element={<Contact></Contact>} />
              <Route path="*" element={<Error404></Error404>} />
            </Routes>
        </BrowserRouter>
          <Footer></Footer>
      </>
  );
}

export default App;
