import Home from "./components/Home";
import React from "react";
import "./Header.css";
import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  
  )
  
}

export default App;
