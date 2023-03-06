import { Col, Container, Row } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container
      className="m-0 p-0"
      fluid
      style={{
        backgroundColor: "#EDEDED",
        height: "2rem",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Row className="text-center">
        <p className="text-muted">
          © MTG Marketplace {new Date().getFullYear().toString()}
        </p>
      </Row>
    </Container>
  );
};

export default MyFooter;
