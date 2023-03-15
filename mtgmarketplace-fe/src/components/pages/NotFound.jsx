import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container fluid className="text-center">
      <h1>Sorry! We can't find that page!</h1>
      <Link to="/">
        <h3>Return Home?</h3>
      </Link>
      <img
        className="img-fluid"
        alt="dance!"
        style={{ width: "50rem", height: "50rem", objectFit: "cover" }}
        src="https://images.unsplash.com/photo-1525434280327-e525e03f17ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
    </Container>
  );
};

export default NotFound;
