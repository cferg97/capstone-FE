import { Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

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

          <h6>Items:
            {items?.map((i) => (
                <h6>{i}</h6>
            ))}
          </h6>
        </Row>

        <Row></Row>
      </Container>
    </>
  );
};

export default ItemDisplayCart;
