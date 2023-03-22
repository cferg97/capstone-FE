import { Badge, Card, Row, OverlayTrigger, Container } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";

const TrendsCards = ({ cardName, set, price, cmID, num }) => {
  const img = `https://api.scryfall.com/cards/cardmarket/${cmID}?format=image`;

  return (
    <>
      <Row style={{justifyContent: 'space-evenly'}}>
        <OverlayTrigger overlay={<Tooltip>{set}</Tooltip>}>
          <Badge
            style={{
              fontSize: '1rem',
              width: "5rem",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              height: 'fit-content',
              cursor: 'pointer'
            }}
          >
            {set}
          </Badge>
        </OverlayTrigger>
        <Badge className="mb-3" style={{width: 'fit-content', fontSize: '1rem'}} bg="badge">
          {/* <h6 className="m-0 p-0">{price}</h6> */}
          {price}
        </Badge>
      </Row>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={"/products/" + cmID}
      >
        
        <Card
          style={{
            border: "none",
            height: "17rem",
            backgroundColor: "transparent",
          }}
        >
          <Card.Img
            style={{ position: "relative" }}
            src={img}
            className="m-0 p-0"
          />
          <p
            style={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
            className="my-2"
          >
            <span className="text-muted">{num}.</span> {cardName}
          </p>
        </Card>
      </Link>
    </>
  );
};

export default TrendsCards;
