import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import './style.css';
import  { addData } from "../../action/index";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState();
  const [errorMessage, setErrorMessage]= useState();
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.userDetails);

  const validateForm = () => {
    // return email.length > 0 && password.length > 0;

    if(email.length > 0 && password.length > 0) {
      if(email === "hruday@gmail.com" && password === "hruday123") {
        setError(false);
      } else {
        // setError(true);
        setErrorMessage("Please enter correct password");
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let user = 
      [
        {
        "id":1,
        "name":"test1",
        "age" : "11",
        "gender":"male",
        "email" : "test1@gmail.com",
        "phoneNo" : "9415346313"
        },
        {
        "id" : 2,
        "name":"test2",
        "age" : "12",
        "gender":"male",
        "email" : "test2@gmail.com",
        "phoneNo" : "9415346314"
        },
        {
        "id":3,
        "name":"test3",
        "age" : "13",
        "gender":"male",
        "email" : "test3@gmail.com",
        "phoneNo" : "9415346315"
        },
        {
        "id":4,
        "name":"test4",
        "age" : "14",
        "gender":"male",
        "email" : "test4@gmail.com",
        "phoneNo" : "9415346316"
        },
        {
        "id":5,
        "name":"test5",
        "age" : "15",
        "gender":"male",
        "email" : "test5@gmail.com",
        "phoneNo" : "9415346317"
        },
        {
        "id":6,
        "name":"test6",
        "age" : "16",
        "gender":"male",
        "email" : "test6@gmail.com",
        "phoneNo" : "9415346318"
        }
      ]
  
    dispatch(addData(user));
    alert("click");
  }

  function validateEmail() {
    if (email === "hruday@gmail.com") {
      setEmail(email);
    }
    setEmail("");
    setError(true);
    setErrorMessage("Please enter correct email id");
    return true;
  }


  function validatePassword() {
    if (password === "hruday123") {
      setPassword(password);
    }
    setEmail("");
    setError(true);
    setErrorMessage("Please enter correct password");
    return true;
  }

  // function handleOnClick() {
  //   dispatch(addData);
  // }
  // {
  //   "username":"hruday@gmail.com",'
  //   "password" :'hruday123'
  //   }

  return (
    <div>
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm} >
            Login
        </Button>
        <p style= {{color: "red"}}>{isError && errorMessage}</p>
        </Form>
      </div>
    </div>
  );
}