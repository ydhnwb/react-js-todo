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

function App() {
   return (
    <div className="App">
      <Router>
        <div className="">
          <Switch>
          <Route exact path="/">
            <PageHome/>
          </Route>
          <Route path="/add">
            <PageAdd/>
          </Route>
          <Route path="/edit">
            <PageEdit/>
          </Route>
          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
