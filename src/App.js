import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
