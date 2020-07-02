import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from "./Components/organisms/Header/Header.js";
import './App.scss';
import LoginSignUp from './Components/Page/LoginSignUp/LoginSignUp.js';
import Home from './Components/Page/Home/Home.js';
import Services from './Components/Page/Services/Services.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route component={LoginSignUp}  path="/signin" />
        <Route component={Home} exact path="/" />
        <Route component={Services} path="/service/:name" />
        {/* <Route component={Login} exact path="/sign-in" /> */}
      </Switch>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
