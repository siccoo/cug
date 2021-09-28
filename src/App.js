import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Faq from "./pages/faq";
import Register from "./pages/register";
import Corporate from "./pages/corporate/Corporate";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="app-body">
          <Route exact path="/" component={Faq} />
          <Route path="/register" component={Register} />
          <Route exact path="/corporate" component={Corporate} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
