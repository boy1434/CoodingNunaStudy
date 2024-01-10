import Home from "./components/Home";
import React from "react";
import "./Header.css";
import "./style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header";
import Html_Css from "./components/Html_Css";
import First_Prj from "./components/HTML_Pr/First_Prj";
import Second_Prj from "./components/HTML_Pr/Second_Prj";

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

        <Route>
      <First_Prj exact path="/Fst_Pr" />
        </Route>

        <Route>
        <Second_Prj exact path="/Sec_Pr/:Sec_pr"/>
        </Route>

      </Switch>
      
    </BrowserRouter>
  
  )
  
}

export default App;
