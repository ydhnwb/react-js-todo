import React from "react";
import logo from "./logo.svg";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  useHistory
} from "react-router-dom";
import "./App.css";

import { PageHome } from "./pages/page_home";
import { PageAdd } from "./pages/page_add";
import { PageEdit } from "./pages/page_edit";

function App() {
  let history = useHistory();
  return (
    <div className="App">
      <Router>
        <div className="">
          <Switch>
          <Route exact path="/">
            <PageHome/>
          </Route>
          <Route path="/add">
            <PageAdd history={history}/>
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
