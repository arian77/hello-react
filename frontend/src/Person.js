import React from "react";
import {
  Button,
  ButtonGroup,
  Form,
  Col,
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
    this.state = { age: props.age };
    this._incrementAge = this._incrementAge.bind(this);
    this._decrementAge = this._decrementAge.bind(this);
    this._toggleEmail = this._toggleEmail.bind(this);
  }

  _incrementAge() {
    this.setState(prevState => ({
      age: prevState.age + 1
    }));
  }

  _decrementAge() {
    this.setState(prevState => ({
      age: prevState.age - 1
    }));
  }

  _toggleEmail() {
    this.setState(state => ({
      showEmail: !state.showEmail
    }));
  }

  render() {
    return (
      <div>
        <Col className="m-1">
          <Card>
            <CardBody>
              <CardText>
                <h3> {this.props.name}</h3>
                <p>
                  Age: {this.state.age}
                  {this.state.showEmail && ` (${this.props.email})`}{" "}
                </p>
              </CardText>
              <ButtonGroup>
                <Button color="primary" onClick={this._incrementAge}>
                  +
                </Button>
                <Button color="success" onClick={this._decrementAge}>
                  -
                </Button>
                <Button color="warning" onClick={this._toggleEmail}>
                  Toggle Email
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default Person;
