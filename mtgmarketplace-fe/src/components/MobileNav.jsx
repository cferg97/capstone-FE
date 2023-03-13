import { Container, Form, Row, Col } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNav = () => {
  return (
    <>
      <Container
        className="mobile-navbar"
        fluid
        style={{ height: "4rem", zIndex: 4, paddingLeft: '1rem', paddingRight: '1rem' }}
      >
        <Row style={{ width: "100%", alignItems: "center" }}>
          <Container style={{ display: "flex", flexDirection: "row" }}>
            <Col xs={8}>
              <Form.Control
                className="my-auto"
                type="text"
                placeholder="Search MTG Marketplace..."
              />
            </Col>
            <Col></Col>
            <RxHamburgerMenu className="hamburger-icon" size="2rem" />
          </Container>
        </Row>
      </Container>
    </>
  );
};

export default MobileNav;
