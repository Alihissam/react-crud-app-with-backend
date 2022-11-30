import React from 'react'
import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Navbar from './components/Navbar/Navbar';
import PageNotFound from './components/pages/PageNotFound';
import {BrowserRouter, Switch , Route} from 'react-router-dom'
import Adduser from './components/users/Adduser';
import Edituser from './components/users/Edituser';
import User from './components/users/User';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/user/add" component={Adduser}></Route>
        <Route path="/user/edit/:id" component={Edituser}></Route>
        <Route path="/user/:id" component={User}></Route>
        <Route path="/*" component={PageNotFound}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
