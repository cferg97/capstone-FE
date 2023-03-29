import { ListGroup, Row, Col } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const CardInfo = ({ card }) => {
  let style;

  const rarity = card?.rarity || "";

  const rarityToDisplay =
    rarity?.toString().charAt(0).toUpperCase() + rarity.slice(1) || "";

  switch (rarity) {
    case "common": {
      style = "black";
      break;
    }
    case "uncommon": {
      style = "#b0b0b0";
      break;
    }
    case "rare": {
      style = "#de972c";
      break;
    }
    case "mythic": {
      style = "#d64704";
      break;
    }
    default:
      break;
  }

  return (
    <>
      <Row className="mb-3 mt-3">
        <b>
          Rarity:{" "}
          <OverlayTrigger
            overlay={<Tooltip id="rarity">{rarityToDisplay}</Tooltip>}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 0V0C103.395 53.7596 146.24 96.6052 200 100V100V100C146.24 103.395 103.395 146.24 100 200V200V200C96.6052 146.24 53.7596 103.395 0 100V100V100C53.7596 96.6052 96.6052 53.7596 100 0V0Z"
                fill={style}
              />
            </svg>
          </OverlayTrigger>
        </b>
      </Row>
      <Row className="mb-3">
        <b>Collector Number: {card?.collector_number}</b>
      </Row>
      <Row className="mb-3">
        <b>Printed In: {card.set_name}</b>
      </Row>
      {/* <Row className="mb-3"><b>From: £{card?.price.eur || card?.price.eur_foil}</b></Row> */}

      <Row>
        <Col>
          Rule text: <i>{card?.oracle_text}</i>
        </Col>
      </Row>
    </>
  );
};

export default CardInfo;
