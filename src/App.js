import React, { Component } from "react";
// import logo from "./database.svg";
import "./App.css";
import Template from "./components/Template";
import BusinessSearch from "./components/BusinessSearch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:4000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <Template />
        <BusinessSearch />
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
