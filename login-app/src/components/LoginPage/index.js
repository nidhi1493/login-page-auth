import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './style.css';
import { validateLogin } from "../../action/index";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import ShowDetails from "../ShowDetails/index";
import loginImage from "../../images/login.jpeg";
class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isError: false,
      errorMessage: ""
    }
  }

  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  componentDidUpdate(prevProps) {
    if(this.props.auth.isLoginSuccess && prevProps.auth.isLoginSuccess !== this.props.auth.isLoginSuccess) {
      this.props.history.push('/showDetails');
    } 
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const  {email, password} = this.state;
    let payload = {
      email,
      password
    }
      this.props.validateLogin(payload);
  }

  validateEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  validatePassword = (e) => {

    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div style={{}}>
        <div className="Login" style={{backgroundImage: `url(${loginImage})`}}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={this.state.email}
                onChange={(e) => { this.validateEmail(e) }}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={this.state.password}
                onChange={(e) => this.validatePassword(e)}
              />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!this.validateForm()} >
              Login
        </Button>

           {this.props.auth.isLoginSuccess ? <Route path="/showDetails" component={ShowDetails} /> : <p style={{ color: "red" }}>{this.props.auth.errorMessage}</p>}
        
          </Form>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    validateLogin: payload => dispatch(validateLogin(payload))
};
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
