import { Navbar, Container, Nav, Form, Col, Button } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineMail, MdOutlineShoppingBag } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Navbar bg="light" style={{ borderBottom: "1px solid lightgrey" }}>
      <Container fluid className="mx-4">
        <Link to="/">
          <Navbar.Brand>
            <img
              className="img-fluid"
              style={{ maxHeight: "3rem", marginRight: "2rem" }}
              alt="MTG Marketplace Logo"
              src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1677511785/media/CapstoneLogo_uljdiz.png"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto" style={{ width: "100%" }}>
          <Form className="d-flex" style={{ position: "relative" }}>
            <Form.Control
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="search"
              placeholder="Search by card name, set, or type."
              className="me-2"
              style={{ minWidth: "20rem", width: "35rem", maxWidth: "35rem" }}
              aria-label="Search"
            />
            <Container className="search-bar-btn p-0">
              <BsSearch />
            </Container>
          </Form>

          <Container
            className="d-flex"
            style={{
              maxWidth: "20rem",
              marginLeft: "auto",
              marginRight: "0",
              alignItems: "center",
            }}
          >
            <Link to="/register">
              <Button
                className="text-white mx-2"
                style={{ fontSize: "0.8rem" }}
                variant="primary"
              >
                Sign Up
              </Button>
            </Link>
            <Link to="/login">
              <Button
                className="text-white"
                style={{ fontSize: "0.8rem" }}
                variant="primary"
              >
                Log In
              </Button>
            </Link>
            <Col className="d-flex mx-auto flex-column align-items-center">
              <MdOutlineShoppingBag
                style={{
                  fontSize: "1.5rem",
                  lineHeight: "3rem",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              />
            </Col>

            <Col className="d-flex flex-column align-items-center">
              <MdOutlineMail
                style={{
                  fontSize: "1.5rem",
                  lineHeight: "3rem",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              />
            </Col>

            <Col className="d-flex flex-column align-items-center" style={{}}>
              <FaUserCircle
                style={{
                  fontSize: "2rem",
                  lineHeight: "4rem",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              />
            </Col>
          </Container>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
