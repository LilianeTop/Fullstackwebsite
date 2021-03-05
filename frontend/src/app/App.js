import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "../components/fixed/NavBar";
// import SearchBar from "./components/fixed/SearchBar";
import Footer from "../components/fixed/Footer";
import Home from "../components/homepage/Home";
import Portfolio from '../components/portfolio/Portfolio';
import AboutEls from "../components/aboutEls/AboutEls";
import Admin from '../components/admin/Admin';
import Blog from '../components/blog/Blog';
import { connect } from "react-redux";
import { showLogin } from "../actions/showLogin";
import { hideLogin } from "../actions/hideLogin";


const App = () => {

    return (
        <Router>
          <div className = "app">
            <Route path='*' component={NavBar} />
            <Route path='*' component={Footer} />
            <Route exact path='/' component={Home} />
            <Route exact path='/admin' component={Admin} />
            {/*TODO: new route eg uploadPhoto connect with component admin/menu*/}
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/aboutEls' component={AboutEls} />
            <Route exact path='/landschap' component={Portfolio} />
          </div>

        </Router>
    );


}
const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    showLogin: () => dispatch(showLogin),
        hideLogin: () => dispatch(hideLogin)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
