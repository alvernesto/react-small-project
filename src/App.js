import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //, Switch, Route 
//layoutes
import Navbar from './components/Navbar';
//pages
import About from './pages/About';
import Home from './pages/Home';
import Factorial from './pages/Factorial';
import Converter from './pages/Converter';
import ChangeColor from './pages/ChangeColor';
import './App.css';

class App extends Component {

  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }

  render() {
    return (
      <Router>
        <div className="App" >
          <Navbar icon='fa-brands fa-js' title={'Boring Varietyapp'} />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/react-small-project' component={Home} />
              <Route exact path='/factorial' component={Factorial} />
              <Route exact path='/converter' component={Converter} />
              <Route exact path='/changecolor' component={ChangeColor} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}



export default App;
