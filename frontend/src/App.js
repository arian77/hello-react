import React, { Component } from "react";
import "./App.css";
import { Button, Form, Card, CardBody, CardTitle, CardText } from "reactstrap";

import Person from "./Person";
// import Navigation from "./Navigation";
// import Header from "./Header";

const DATA_PEOPLE = [
  {
    id: 0,
    name: "Arian",
    age: 40,
    email: "arianmarkus@google.com"
  },

  {
    id: 1,
    name: "Markus",
    age: 23,
    email: "arianmarkus@facebook.com"
  }
];

class App extends Component {
  render() {
    return (
      <div>
        {DATA_PEOPLE.map(person => {
          return (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              email={person.email}
            />
          );
        })}
      </div>

      // <div className="App">
      //   <Person name="Arian" age={100} />
      //   <Person name="Markus" age={26} />
      //   <Person name="Pardamean" age={30} />
      // </div>

      // <div className="web container">
      //   <Navigation />
      //   <Header />
      //
      //   <div className="row">
      //     <p>
      //       <i>
      //         {" "}
      //         “Try Not to Become a Man of Success. Rather Become a Man of
      //         Value.” - Albert Einstein{" "}
      //       </i>
      //     </p>
      //   </div>
      //   <div className="row">
      //     <footer> Copyright &copy; created by Arian Markus</footer>
      //   </div>
      //
      //   <nav>
      //     <ul className="nav-ul">
      //       <li>
      //         <a href="https://www.facebook.com/">Facebook</a>
      //       </li>
      //       <li>
      //         <a href="https://www.linkedin.com/">Linkedin</a>
      //       </li>
      //     </ul>
      //   </nav>
      // </div>
    );
  }
}

export default App;
