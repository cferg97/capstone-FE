import { Button, Col, Container, Row } from "react-bootstrap";
import { TiStarburst } from "react-icons/ti";

const LatestSec = () => {
  return (
    <>
      <Container className="mt-4 mb-3" style={{ height: "fit-content" }}>
        <h2 className="mt-2 mb-2">
          <TiStarburst /> Latest
        </h2>
        <hr className="mb-4 p-0" />

        <Row>
          <Col md={6}>
            <Container fluid className="latest-set-1">
              <Container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                className="latest-set-1-overlay text-center"
              >
                <h4 className="text-white m-0">Phyrexia: All Will Be One</h4>
                <p className="set-description-text">
                  Dominaria is under siege, Karn has been kidnapped and taken
                  apart, Teferi is lost somewhere in time, and the resistance
                  against the growing Phyrexian threat seems to grow weaker by
                  the moment...
                </p>
              </Container>
            </Container>
          </Col>
          <Col md={6} style={{ height: "100%" }}>
            <Row style={{ height: "50%", width: "102%" }}>
              <Col className="p-0">
                <Container fluid className="latest-set-2 ">
                  <Container
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                    className="latest-set-2-overlay text-center"
                  >
                    <h5 className="text-white m-0">The Brothers War</h5>
                    <p className="set-description-text">
                      The Brothers' War, also known as the Antiquities War, was
                      the legendary great war between the brothers Mishra and
                      Urza that spawned after the two each found half of an
                      ancient Thran powerstone, and wanted both.
                    </p>
                  </Container>
                </Container>
              </Col>
            </Row>
            <Row style={{ height: "50%", width: "102%" }}>
              <Col className="p-0">
                <Container fluid className="latest-set-3">
                  <Container
                    className="latest-set-3-overlay text-center"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <h5 className="text-white m-0">Dominaria United</h5>
                    <p className="set-description-text">
                      The story begins following Karn as he looks back on
                      Dominaria's past to prepare for its future. The enemy is
                      already on Dominaria, and it's only a matter of time
                      before conflict breaks out...
                    </p>
                  </Container>
                </Container>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LatestSec;
