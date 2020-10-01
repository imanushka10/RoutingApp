import React from "react";
import "./App.css";
import Shop from "./shop";
import About from "./about";
import Nav from "./nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* //Switch stop the unnecassary routing in pages */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Homepage</h1>
  </div>
);
export default App;
