import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home"
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SplashPage from "./components/SplashPage";

const App = () => {
  return (
    <>
      {/* <SplashPage /> */}
      <Navigation />
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route> */}
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
