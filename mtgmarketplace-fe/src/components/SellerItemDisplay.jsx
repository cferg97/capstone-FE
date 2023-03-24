import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

const ItemDisplayCart = ({ sellerName, info, items }) => {
  return (
    <>
      <Container
        fluid
        className="p-1"
        style={{ backgroundColor: "lightgrey", borderRadius: "10px 10px 0 0" }}
      >
        <Row>
          <h5>
            <b>Seller: {sellerName}</b>
          </h5>

          <h6>Items:</h6>
        </Row>{" "}
        {items &&
          items?.map((i) => (
            <Row className="p-0 m-0" style={{ width: "100%" }}>
              <Col md={4}>
                <h6>{i.name}</h6>
              </Col>
              <Col md={{offset: 2, span: 1}}>
                {i.condition}
              </Col>
              <Col md={{offset: 4, span: 1}}>
                <h6>x{i.quantity}</h6>
              </Col>
            </Row>
          ))}
      </Container>
    </>
  );
};

export default ItemDisplayCart;
