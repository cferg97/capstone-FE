import { Col, Container, Row, Button } from "react-bootstrap";
import { findCountryCode } from "../data/tools";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../redux/actions";

const ListingDisplay = ({ info, seller }) => {
  const dispatch = useDispatch()
  const countryCode = findCountryCode(seller?.country) || "";

  return (
    <>
      <Container
        className="listing-con"
        style={{ width: "100%", height: "2rem", border: "1px solid red" }}
      >
        <Row className="text-center">
          <Col>
            {seller.username} |{" "}
            <OverlayTrigger
              overlay={<Tooltip>Item location: {seller?.country}</Tooltip>}
            >
              <img
                src={`https://flagcdn.com/${countryCode[0]}.svg`}
                style={{ width: "1.5rem" }}
                alt={seller?.country}
              />
            </OverlayTrigger>
          </Col>
          <Col>
            {info.condition} | {info.language}
          </Col>
          <Col style={{ position: "relative" }}>
            {info.quantity} | {info.price}
            <Button
            className="p-0 text-white"
            onClick={() => {
              dispatch(addToCartAction(info?.cardmarketId))
            }}
              style={{ position: "absolute", right: 0, width: "2rem", height: '2rem' }}
            >
              <BsCartPlus />
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ListingDisplay;
