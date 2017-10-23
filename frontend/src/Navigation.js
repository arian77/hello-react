import React, { Component } from "react"
import "./App.css"

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul className="nav-ul">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="portofolio.html">Portofolio</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
