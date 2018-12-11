import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import Customers from "./components/customers";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Route path="/movies" component={Movies} />
      </main>
    );
  }
}

export default App;
