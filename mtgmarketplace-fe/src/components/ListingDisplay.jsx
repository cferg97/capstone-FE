import { Col, Container, Row } from "react-bootstrap";
import { findCountryCode } from "../data/tools";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const ListingDisplay = ({ info, seller }) => {
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
            <OverlayTrigger overlay={<Tooltip>Item location: {seller?.country}</Tooltip>}>
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
          <Col>
            {info.quantity} | {info.price}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ListingDisplay;
