import React from 'react';
import { Switch, Route } from "react-router-dom";
import InnerHeader from "./Components/InnerHeader/InnerHeader.js";
import './App.scss';
import LoginSignUp from './Components/LoginSignUp/LoginSignUp.js';
import Home from './Components/Home/Home.js';
import Services from './Components/Services/Services.js';

function App() {
  return (
    <div className="App">
      <InnerHeader/>
      <Switch>
        <Route component={LoginSignUp} exact path="/" />
        <Route component={Home} path="/home" />
        <Route component={Services} path="/service/:name" />
        {/* <Route component={Login} exact path="/sign-in" /> */}
      </Switch>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
