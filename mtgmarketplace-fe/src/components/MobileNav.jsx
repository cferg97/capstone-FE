import { Container, Form, Row, Col } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";

const MobileNav = () => {
  return (
    <>
      <Container
        className="mobile-navbar"
        fluid
        style={{
          height: "4rem",
          zIndex: 4,
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <Container
          fluid
          style={{ width: "100%", justifyItems: "center" }}
          className="p-0"
        >
          <Row className="p-0 m-0" style={{ height: "100%" }}>
            <Container className="p-0 mob-search" fluid style={{height: "100%" }}>
              <Form style={{display: 'flex', height: "100%", width: '100%', alignItems: 'center' }}>
                <Form.Control
                  type="text"
                />
              </Form>
            </Container>
            <Container
              className="p-0 my-auto"
              style={{
                display: "flex",
                width: "fit-content",
                marginLeft: "auto",
                marginRight: 0,
                height: "100%",
              }}
            >
              <img
                style={{ width: "50px" }}
                src="https://www.svgrepo.com/show/491033/hamburger-menu.svg"
                alt="menu toggle"
              />
            </Container>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default MobileNav;
