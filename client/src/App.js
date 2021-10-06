import React from 'react';
import Navbar from './components/Navbar';
import {Route,Switch} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';

const App = () => {
  return (
    <>
      <Navbar/>

      <Switch>

      <Route exact path="/">
          <Home/>
      </Route>

      <Route path="/about">
          <About/>
      </Route>

      <Route path="/contact">
          <Contact/>
      </Route>

      <Route path="/signup">
          <Signup/>
      </Route>

      <Route path="/login">
          <Login/>
      </Route>

      <Route>
          <Error/>
      </Route>
    
    </Switch>
  
    </>
  ) 
}

export default App
