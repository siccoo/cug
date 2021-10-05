import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Faq from "./pages/faq";
import Register from "./pages/register";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="app-body">
          <Route exact path="/" component={Faq} />
          <Route path="/register" component={Register} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
