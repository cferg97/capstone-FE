import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logInAction } from "../redux/actions";

const LoginDropdown = ({ display, setDisplay }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = {
    email: email,
    password: password,
  };

  const onLoginHandler = (e) => {
    e.preventDefault();
    dispatch(logInAction(userLogin));
    setEmail("");
    setPassword("");
    setDisplay()
  };

  return (
    <>
      <Container
        className="mt-2 p-2 login-dropdown"
        style={{
          visibility: display === true ? "visible" : "hidden",
          backgroundColor: "white",
          outline: "1px solid grey",
          width: "15rem",
          borderRadius: "5px",
          height: "fit-content",
          position: "absolute",
          zIndex: "3",
          right: "12rem",
          top: "3rem",
        }}
      >
        <Form onSubmit={(e) => onLoginHandler(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default LoginDropdown;
