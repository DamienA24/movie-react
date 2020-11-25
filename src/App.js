import Details from "./containers/Details";
import Home from "./containers/Home";

import {
  BrowserRouter as Router,
  useLocation,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container-app">
        <Switch>
          <Redirect exact path="/" to="/home" />
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
