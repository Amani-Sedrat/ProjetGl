import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './pages';
import ConnexionPage from './pages/connexion';
import Footer from './footer';




function App() {
  return (
    <Router>
    
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/connexion" component={ConnexionPage} exact />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
