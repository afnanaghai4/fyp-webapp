import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './navbar.js'
import Footer from './footer1.js'
import FrontPage from './frontpage.js'
import ForDoctor from "./fordoctors.js"
import Melanoma from './melanoma.js'
import Research from "./research.js"
import Services from "./services.js"

function App() {
  return (
    <div >

        

      <Router>
        <Switch>
            <Route path = "/" exact component={FrontPage}/>
            <Route path="/fordoctor" exact component={ForDoctor}/>
            <Route path="/melanoma" exact component={Melanoma}/>
            <Route path="/research" exact component={Research}/>
            <Route path="/services" exact component={Services}/>
            <Route path="/footer" exact component={Footer}/>
        </Switch>

      </Router>

      





    </div>
  );
}

export default App;
