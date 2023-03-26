import { Col, Container, Row } from "react-bootstrap";
import { BiNews } from "react-icons/bi";

const NewsSec = () => {
  return (
    <>
      <Container
        className="mt-4 mb-4 pb-4"
        style={{ height: "fit-content", backgroundColor: "#f5f2f2" }}
      >
        <h2 className="mt-2 mb-2 pt-2">
          <BiNews /> News
        </h2>
        <hr className="mb-4 p-0" />
        <Container style={{ width: "80%" }}>
          <Row>
            <Col>
              <h5 className="mx-2" style={{ textDecoration: "underline" }}>
                Site News
              </h5>
              <ul
                className="m-0 p-0"
                style={{ listStyle: "none", fontSize: "1.3rem" }}
              >
                <a href="/zxc">
                  <li>- Delay on Support Tickets</li>
                </a>
                <a href="/zxzxz">
                  <li>- How to Best Secure Your Account</li>
                </a>
                <a href="/sdfadsfs">
                  <li>- Certain Users Will Need to Re-Enter their...</li>
                </a>
                <a href="/asdasdadws">
                  <li>- Users Can No Longer Purchase Coupons</li>
                </a>
              </ul>
            </Col>
            <Col>
              <h5 className="mx-2" style={{ textDecoration: "underline" }}>
                MTG News
              </h5>
              <ul
                className="m-0 p-0"
                style={{ listStyle: "none", fontSize: "1.3rem" }}
              >
                <a href="/zxc">
                  <li>- Pauper Deck of the Week</li>
                </a>
                <a href="/zxzxz">
                  <li>- Pioneer Deck of the Week</li>
                </a>
                <a href="/sdfadsfs">
                  <li>- Top 5: Cards to Buy, Sell, or Hold</li>
                </a>
                <a href="/asdasdadws">
                  <li>- Modern Deck of the Week</li>
                </a>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default NewsSec;
