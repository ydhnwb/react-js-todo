import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import "./App.css";

import { PageHome } from "./pages/page_home";
import { PageAdd } from "./pages/page_add";
import { PageEdit } from "./pages/page_edit";
import { Navbar } from "./components/navbar";
import { PageCalculator } from "./pages/page_calculator";
import { PageGiphy } from "./pages/page_giphy";
import { PageAxios } from "./pages/page_axios";

function App() {
   return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className="">
          <Switch>
          <Route exact path="/">
            <PageHome/>
          </Route>
          <Route path="/todo/add">
            <PageAdd/>
          </Route>
          <Route path="/todo/edit">
            <PageEdit/>
          </Route>
          <Route path="/calculator">
            <PageCalculator/>
          </Route>
          <Route path="/giphy">
            <PageGiphy/>
          </Route>
          <Route path="/axios">
            <PageAxios/>
          </Route>
          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
