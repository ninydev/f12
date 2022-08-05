import Navigation from "./components/Navigation";
import Masthead from "./components/Masthead";
import Projects from "./components/Projects";
import About from "./components/About";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
      <>
        <Navigation></Navigation>
          <Masthead></Masthead>
          <About></About>
          <Projects></Projects>
          <Signup></Signup>
          <Contact></Contact>
          <Footer></Footer>
      </>
  );
}

export default App;
