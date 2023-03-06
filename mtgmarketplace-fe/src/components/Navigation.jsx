import {
  Navbar,
  Container,
  Nav,
  Form,
  Col,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { MdOutlineMail, MdOutlineShoppingBag } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import LoginDropdown from "./LogInDropdown";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../redux/actions";

const Navigation = () => {
  const loggedIn = useSelector((state) => state.user?.loggedIn);
  const currentUser = useSelector((state) => state.user?.currentUser);

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const [displayLogin, setDisplayLogin] = useState(false);

  const handleShowLogin = () => {
    setDisplayLogin(!displayLogin);
  };

  const userAccessToken = localStorage.getItem("userAccessToken");

  useEffect(() => {
    if (userAccessToken !== null) {
      dispatch(getCurrentUser());
    } else {
      return;
    }
  }, []);

  const onLogoutHandler = () => {
    localStorage.removeItem("userAccessToken");
    window.location.reload(true);
  };

  return (
    <>
      <LoginDropdown display={displayLogin} setDisplay={handleShowLogin} />
      <Navbar
        bg="light"
        className="site-nav"
        style={{ borderBottom: "1px solid lightgrey" }}
      >
        <Container fluid className="mx-4">
          <Link to="/">
            <Navbar.Brand>
              <img
                className="img-fluid site-logo"
                style={{ maxHeight: "3rem", marginRight: "2rem" }}
                alt="MTG Marketplace Logo"
                src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1677511785/media/CapstoneLogo_uljdiz.png"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto" style={{ width: "100%" }}>
            <Form
              className="d-flex my-auto"
              style={{
                height: "fit-content",
                width: "fit-content",
                position: "relative",
              }}
            >
              <Form.Control
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="search"
                placeholder="Search MTG Marketplace..."
                className="me-2"
                style={{
                  minWidth: "20rem",
                  height: "2.4rem",
                  width: "35rem",
                  maxWidth: "35rem",
                }}
                aria-label="Search"
              />
              <Container className="search-bar-btn p-0">
                <BsSearch />
              </Container>
            </Form>

            <DropdownButton
              className="my-auto mx-3"
              variant="outline"
              size="sm"
            >
              <Dropdown.Item>
                <Link style={{ textDecoration: "none" }} to="/products/search">
                  Advanced Search
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link style={{ textDecoration: "none" }} to="/users/search">
                  Members Search
                </Link>
              </Dropdown.Item>
            </DropdownButton>

            <Container
              className="d-flex"
              style={{
                maxWidth: "26rem",
                marginLeft: "auto",
                marginRight: "0",
                alignItems: "center",
              }}
            >
              <Link
                to="/register"
                style={{ visibility: loggedIn === true ? "hidden" : "" }}
              >
                <Button
                  className="text-white mx-2"
                  style={{
                    fontSize: "0.8rem",
                    visibility: loggedIn === true ? "hidden" : "",
                  }}
                  variant="primary"
                >
                  Sign Up
                </Button>
              </Link>
              <Button
                className="text-white"
                style={{
                  fontSize: "0.8rem",
                  position: "relative",
                  visibility: loggedIn === true ? "hidden" : "",
                }}
                variant="primary"
                onClick={() => handleShowLogin()}
              >
                Log In
              </Button>

              <Col className="d-flex mx-auto flex-column align-items-center">
                <MdOutlineShoppingBag
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "3rem",
                    marginTop: "auto",
                    marginBottom: "auto",
                    display: loggedIn === true ? "" : "none",
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
                    display: loggedIn === true ? "" : "none",
                  }}
                />
              </Col>

              <DropdownButton
                style={{
                  display: loggedIn === true ? "" : "none",
                  zIndex: "7",
                }}
                drop="start"
                className="nav-dropdown"
                title={currentUser?.username || ""}
              >
                <Dropdown.Item>
                  <Link
                    to={"/users/profile/" + currentUser?.username}
                    style={{ textDecoration: "none" }}
                  >
                    View my profile
                  </Link>{" "}
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/users/profile/edit"
                  >
                    Edit my details
                  </Link>
                </Dropdown.Item>
                <Dropdown.ItemText>
                  <Button
                    variant="heavily-played"
                    onClick={() => onLogoutHandler()}
                  >
                    Log Out
                  </Button>
                </Dropdown.ItemText>
              </DropdownButton>

              {/* <Col className="d-flex flex-column align-items-center" style={{}}>
                <FaUserCircle
                  style={{
                    fontSize: "2rem",
                    lineHeight: "4rem",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                />
                
              </Col> */}
            </Container>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
