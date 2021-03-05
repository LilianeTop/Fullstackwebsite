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
import UploadPhoto from "../components/admin/UploadPhoto";
import ChangePhoto from "../components/admin/ChangePhoto";
import DeletePhoto from "../components/admin/DeletePhoto";


const App = () => {

    return (
        <Router>
          <div className = "app">
            <Route path='*' component={NavBar} />
            <Route path='*' component={Footer} />
            <Route exact path='/' component={Home} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/UploadPhoto' component={UploadPhoto} />
            <Route exact path='/ChangePhoto' component={ChangePhoto} />
            <Route exact pahh='/DeletePhoto'  component={DeletePhoto} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/aboutEls' component={AboutEls} />
            <Route exact path='/landschap' component={Portfolio} />
          </div>

        </Router>
    );


};

export default App;
