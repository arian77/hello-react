import React, { Component } from "react"
import "./App.css"

import Navigation from "./Navigation"
import Header from "./Header"

class App extends Component {
  render() {
    return (
      <div className="web container">
        <Navigation />
        <Header />

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
