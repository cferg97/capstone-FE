import { Container, Row, Col } from "react-bootstrap";
import { FaChartLine } from "react-icons/fa";
import TrendsCards from "./TrendsCards";
import TrendsList from "./TrendsList";

const Trends = () => {
  return (
    <>
      <Container
        className="mt-4 mb-3"
        style={{ width: "100%", height: "60rem" }}
      >
        <h2 className="mt-2 mb-2">
          <FaChartLine /> Trends
        </h2>
        <hr />
        <Row>
          <Col className="ml-auto mr-auto" style={{ textAlign: "center" }}>
            <h4>Best Sellers</h4>
            <Row className="mx-auto" style={{ width: "95%" }}>
              <Col>
                <TrendsCards />
              </Col>
              <Col>
                <TrendsCards />
              </Col>
              <Col>
                <TrendsCards />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <TrendsList />
              </Col>
            </Row>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <h4>Best Bargains</h4>
            <Row className="mx-auto" style={{ width: "95%" }}>
              <Col>
                <TrendsCards />
              </Col>
              <Col>
                <TrendsCards />
              </Col>
              <Col>
                <TrendsCards />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <TrendsList />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Trends;
