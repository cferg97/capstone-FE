import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineCamera } from "react-icons/ai";

const TrendsList = () => {
  return (
    <>
      <Container className="trends-list">
        <Row>
          <Col md={1}>
            <AiOutlineCamera />
          </Col>
          <Col class>
            <h5>f</h5>
          </Col>
        </Row>
        <Row>
          <AiOutlineCamera />
          <h5>f</h5>
        </Row>
        <Row>
          <AiOutlineCamera />
          <h5>f</h5>
        </Row>
        <Row>
          <AiOutlineCamera />
          <h5>f</h5>
        </Row>
        <Row>
          <AiOutlineCamera />
          <h5>f</h5>
        </Row>
        <Row>
          <AiOutlineCamera />
          <h5>f</h5>
        </Row>
        <Row>
          <AiOutlineCamera />
          <h5>f</h5>
        </Row>
      </Container>
    </>
  );
};

export default TrendsList;
