import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navigation from "./components/navigation";
import AdoptionForm from "./components/adoptionForm/adoptionForm";
import formSubmitted from "./components/formSubmitted";
import NotFound from "./components/notFound";
import Home from "./components/home";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <ToastContainer />
        <main className="container">
          <Switch>
            <Route path="/form/new" component={AdoptionForm} />
            <Route path="/form/submitted" component={formSubmitted} />
            <Route path="/home" component={Home} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
