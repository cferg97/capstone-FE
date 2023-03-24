import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemDisplayCart from "../SellerItemDisplay";

const Cart = () => {
  const cartItems = useSelector((state) => state.userCart?.cart);
  const currentUser = useSelector((state) => state.user?.currentUser);

  let sellers = new Set();

  let sellersArr;

  if (cartItems.length !== 0) {
    cartItems.forEach((item) => {
      sellers.add(item.seller.username);
    });
    sellersArr = Array.from(sellers);
  }

  return (
    <>
      <Container className="mt-2" style={{height: '88.5vh'}}>
        <h1>Shopping Cart</h1>
        <hr />
        {cartItems.length === 0 ? (
          <>
            <h3>Your cart is empty!</h3> <Link to="/">Continue Shopping</Link>
          </>
        ) : (
          ""
        )}

        <Row className="p-2">
          <Col
            className="p-0"
            md={7}
            style={{
              border: cartItems.length === 0 ? "" : "1px solid lightgrey",
              borderRadius: "10px",
            }}
          >
            {sellersArr?.map((seller) => (
              <ItemDisplayCart sellerName={seller} />
            ))}
          </Col>
          <Col
            className="text-center p-2"
            md={{ span: 4, offset: 1 }}
            style={{
              display: cartItems.length === 0 ? "none" : "",
              border: "1px solid lightgrey",
              borderRadius: "10px",
              height: "fit-content",
            }}
          >
            <h3>Your Shipping Information</h3>
            <hr />
            <h4>Address</h4>
            <p>
              {currentUser?.street}
              <br />
              {currentUser?.city}
              <br />
              {currentUser?.zip}
              <br />
              {currentUser?.country}
              <br />
            </p>
            <p className="text-muted">
              Address not right? Change it{" "}
              <Link style={{ color: "inherit" }} to="/users/profile/edit">
                here.
              </Link>
            </p>

            <Button>Continue to Checkout</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
