import Header from "./components/Header";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Grid from "./components/Grid";
import About2 from "./components/About2";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Showcase />
        <About />
        <Grid />
        <About2 />
        <Articles />
        <Footer />
      </Router>
    </>
  );
};

export default App;
