import React, { Component } from "react"
import logo from "./img/arian.jpg"
import "./App.css"

import Navigation from "./Navigation"

class App extends Component {
  render() {
    return (
      <div className="web container">
        <Navigation />
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
          <ul className="nav-ul">
            <li>
              <a href="https://www.facebook.com/">Facebook</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">Linkedin</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default App
