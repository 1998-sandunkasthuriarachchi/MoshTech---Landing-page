import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from './pages/Home';
import Projects from "./pages/Projects";
import Contact_us from "./pages/Contact_us";
import Services from "./pages/Services";
import { motion } from "framer-motion";



function App() {
  return (
    <motion.div initial="hidden" animate="show">
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Projects" component={Projects}  />
        <Route path="/Contact" component={Contact_us}  />
        <Route path="/Services" component={Services}  />
      </Switch>
      <Footer/>
    </BrowserRouter>
    </motion.div>
  );
}

export default App;
