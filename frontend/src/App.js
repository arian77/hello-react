import React, { Component } from "react";
import logo from "./img/arian.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="web container">
        <nav>
          <a href="index.html">Home</a> &nbsp;
          <a href="about.html">About me</a> &nbsp;
          <a href="portofolio.html">Portofolio</a> &nbsp;
          <a href="contact.html">Contact</a>&nbsp;
        </nav>
        <div className="row">
          <header className="web-header">
            <img src={logo} className="web-logo" alt="logo" />
            <h1 className="web-title">Welcome to my Personal Website</h1>
          </header>
        </div>

        <div className="row">
          <p> Hello my name is Arian </p>
        </div>
        <div className="row">
          <footer> Copyright &copy; created by Arian Markus</footer>
        </div>

        <nav>
          <a href="https://www.facebook.com/">Facebook</a> &nbsp;
          <a href="https://www.linkedin.com/">Linkedin</a> &nbsp;
        </nav>
      </div>
    );
  }
}

export default App;
