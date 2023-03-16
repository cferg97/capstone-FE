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
          <Col>
            <h5>f</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TrendsList;
