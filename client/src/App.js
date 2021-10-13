import React,{createContext} from 'react';
import Navbar from './components/Navbar';
import {Route,Switch} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import Userpost from './components/Userpost';
import Logout from './components/Logout';
import Protected from './components/Protected';

const App = () => {

//    export const UserContext = createContext();


  return (
    <>
    {/* <UserContext.Provider> */}
    <Navbar/>
      <Switch>

      <Route exact path="/">
          <Home/>
      </Route>

      <Route path="/about">
          {/* <About/> */}
          <Protected Cmp={About}/>
      </Route>

      <Route path="/contact">
          {/* <Contact/> */}
          <Protected Cmp={Contact}/>
      </Route>

      <Route path="/signup">
          <Signup/>
      </Route>

      <Route path="/login">
          <Login/>
      </Route>

      <Route path="/post">
          <Userpost/>
      </Route>

      <Route path="/logout">
          <Logout/>
      </Route>

      <Route>
          <Error/>
      </Route>
    
        </Switch>
    {/* </UserContext.Provider> */}
    </>
  ) 
}

export default App;
