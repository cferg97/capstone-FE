import { Badge, Card, Row, OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";

const TrendsCards = ({ cardName, set, price, cmID }) => {
  const img = `https://api.scryfall.com/cards/cardmarket/${cmID}?format=image`;

  return (
    <>
      <Badge className="mb-3" bg="badge">
        <h6 className="m-0 p-0">{price}</h6>
      </Badge>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={"/products/" + cmID}
      >
        <Card
          style={{
            border: "none",
            height: "17rem",
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
            {cardName}
          </p>
          <OverlayTrigger overlay={<Tooltip>{set}</Tooltip>}>
            <Badge
              style={{
                position: "absolute",
                top: -10,

                width: "5rem",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {set}
            </Badge>
          </OverlayTrigger>
        </Card>
      </Link>
    </>
  );
};

export default TrendsCards;
