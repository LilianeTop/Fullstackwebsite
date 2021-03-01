import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/fixed/NavBar";
// import SearchBar from "./components/fixed/SearchBar";
import Footer from "./components/fixed/Footer";
import Home from "./components/homepage/Home";
import Portfolio from './components/portfolio/Portfolio';
import AboutEls from "./components/aboutEls/AboutEls";
import Standpunt from "./components/aboutEls/Standpunt";
import Admin from './components/admin/Admin';


const App = () => {

    return (
        <Router>
          <div className = "app">
            <Route path='*' component={NavBar} />
            <Route path='*' component={Footer} />
            <Route exact path='/' component={Home} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/standpunt' component={Standpunt} />
            <Route exact path='/aboutEls' component={AboutEls} />
            <Route exact path='/landschap' component={Portfolio} />
          </div>

        </Router>
    );

}
export default App;
