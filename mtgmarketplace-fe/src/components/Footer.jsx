import {Container, Row } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container
      className="m-0 p-0"
      fluid
      style={{
        backgroundColor: "#EDEDED",
        height: "2rem",
      }}
    >
      <Row className="text-center" style={{height: '100%', lineHeight: '2rem'}}>
        <p className="text-muted m-0 p-0">
          © MTG Marketplace {new Date().getFullYear().toString()}
        </p>
      </Row>
    </Container>
  );
};

export default MyFooter;
