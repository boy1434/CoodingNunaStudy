import Home from "./components/Home";
import React from "react";
import "./Header.css";
import "./style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header";
import Html_Css from "./components/Html_Css";
import First_Prj from "./components/HTML_Pr/First_Prj";
import Second_Prj from "./components/HTML_Pr/Second_Prj";
import Third_Prj from "./components/HTML_Pr/Third_Prj";
import FourTh_Prj from "./components/HTML_Pr/Fourth_Prj";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>

        <Route exact path="/">
        <Home />
        </Route>

        <Route exact path="/Hc">
          <Html_Css />
        </Route>

        <Route exact path="/Fst_Pr">
      <First_Prj />
      
        </Route>

        <Route exact path="/Sec_Pr">
        <Second_Prj />
        </Route>

        <Route exact path="/Thi_Pr">
          <Third_Prj />
        </Route>

      </Switch>
      <FourTh_Prj />
    </BrowserRouter>
  
  )
  
}

export default App;
