import Home from "./components/Home";
import React from "react";
import "./Header.css";
import "./style.css";
import { HashRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header";
import Html_Css from "./components/Html_Css";
import First_Prj from "./components/HTML_Pr/First_Prj";
import Second_Prj from "./components/HTML_Pr/Second_Prj";
import Third_Prj from "./components/HTML_Pr/Third_Prj";
import FourTh_Prj from "./components/HTML_Pr/Fourth_Prj";
import Fifth_Prj from "./components/HTML_Pr/Fifth_Prj";



function App() {
  return (
    <HashRouter>
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

        <Route exact path="/Four_Pr">
          <FourTh_Prj />
        </Route>

        <Route exact path="/Fif_pr">
      <Fifth_Prj />
        </Route>
      </Switch>

    </HashRouter>
  
  )
  
}

export default App;
