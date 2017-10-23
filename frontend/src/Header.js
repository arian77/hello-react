import React, { Component } from "react"
import "./App.css"

import logo from "./img/arian.jpg"

class Header extends Component {
  render() {
    return (
      <div className="row">
        <header className="web-header">
          <img src={logo} className="web-logo" alt="logo" />
          <h1 className="web-title">Welcome to my Personal Website</h1>
        </header>
      </div>
    )
  }
}

export default Header
