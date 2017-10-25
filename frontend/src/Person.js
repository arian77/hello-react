import React from "react";
import PropTypes from "prop-types";
import {
  Col,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmail: true
    };

    this._toggleEmail = this._toggleEmail.bind(this);
  }

  _toggleEmail() {
    this.setState(state => ({
      showEmail: !state.showEmail
    }));
  }

  render() {
    return (
      <Col className="m-1">
        <Card>
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardText>
              {this.state.showEmail && `(${this.props.email})`}{" "}
            </CardText>
            {this.props.showControls && (
              <ButtonGroup>
                <Button onClick={this._toggleEmail} color="primary">
                  {`Email`}
                </Button>
              </ButtonGroup>
            )}
          </CardBody>
        </Card>
      </Col>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

Person.defaultProps = {
  email: "unknown@impactbyte.com"
};

export default Person;

// import React from "react";
// import {
//   Button,
//   ButtonGroup,
//   Form,
//   Col,
//   Card,
//   CardBody,
//   CardTitle,
//   CardText
// } from "reactstrap";
//
// class Person extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showEmail: true
//     };
//     this.state = { age: props.age };
//     this._incrementAge = this._incrementAge.bind(this);
//     this._decrementAge = this._decrementAge.bind(this);
//     this._toggleEmail = this._toggleEmail.bind(this);
//   }
//
//   _incrementAge() {
//     this.setState(prevState => ({
//       age: prevState.age + 1
//     }));
//   }
//
//   _decrementAge() {
//     this.setState(prevState => ({
//       age: prevState.age - 1
//     }));
//   }
//
//   _toggleEmail() {
//     this.setState(state => ({
//       showEmail: !state.showEmail
//     }));
//   }
//
//   render() {
//     return (
//       <div>
//         <Col className="m-1">
//           <Card>
//             <CardBody>
//               <CardText>
//                 <h3> {this.props.name}</h3>
//                 <p>
//                   Age: {this.state.age}
//                   {this.state.showEmail && ` (${this.props.email})`}{" "}
//                 </p>
//               </CardText>
//               <ButtonGroup>
//                 <Button color="primary" onClick={this._incrementAge}>
//                   +
//                 </Button>
//                 <Button color="success" onClick={this._decrementAge}>
//                   -
//                 </Button>
//                 <Button color="warning" onClick={this._toggleEmail}>
//                   Toggle Email
//                 </Button>
//               </ButtonGroup>
//             </CardBody>
//           </Card>
//         </Col>
//       </div>
//     );
//   }
// }
//
// export default Person;
