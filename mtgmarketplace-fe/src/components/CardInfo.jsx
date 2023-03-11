import { ListGroup, Row, Col } from "react-bootstrap";

const CardInfo = ({ card }) => {
  return (
    <>
      <Row className="mb-3 mt-3">
        <b>Rarity: {card?.rarity} </b>
      </Row>
      <Row className="mb-3">
        <b>Collector Number: {card?.collector_number}</b>
      </Row>
      <Row className="mb-3">
        <b>Printed In: </b>
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
