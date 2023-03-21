import { Col, Container, Row } from "react-bootstrap";
import { TiStarburst } from "react-icons/ti";

const LatestSec = () => {
  return (
    <>
      <Container className="mt-4 mb-3" style={{ height: "40rem" }}>
        <h2 className="mt-2 mb-2">
          <TiStarburst /> Latest
        </h2>
        <hr />

        <Row>
          <Col md={6}>
            <Container fluid className="latest-set-1">

            </Container>
          </Col>
          <Col md={6} style={{height: '100%'}}>
            <Row style={{height: '50%'}}>
              <Col style={{ border: "1px solid red", height: '14.5rem' }}>
              </Col>
            </Row>
            <Row style={{height: '50%'}}> 
              <Col className="p-0" style={{ border: "1px solid red", marginTop: '1rem', height: '14.5rem' }}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LatestSec;
