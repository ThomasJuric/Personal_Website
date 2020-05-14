import React from 'react';
import './App.css';
import About from './Website/About.js'
import Projects from './Website/Projects.js';
import Skills from './Website/Skills.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path = "/" component={About} />
          <Route exact path = "/skills" component={Skills} />
          <Route exact path = "/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
