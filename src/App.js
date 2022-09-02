//react
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Header from './components/Header';
// import Navigation from './components/Navigation';
// import Project from './components/Project';
// import Footer from './components/Footer';

//pages
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <Header/>
      </header>
      <body>
        <Switch>
          <Route exact path="/reactPortfolio">
            <About/>
          </Route>
          <Route path="/Resume">
            <Resume/>
          </Route>
          <Route path='/Portfolio'>
            <Portfolio/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
        </Switch>
      </body>
    </div>
    </Router>
  );
}

export default App;
