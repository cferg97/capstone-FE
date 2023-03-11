import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const TrendsCards = ({ cardName, set, price, cmID }) => {
  const img = `https://api.scryfall.com/cards/cardmarket/${cmID}?format=image`;

  return (
    <>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={"/products/" + cmID}
      >
        <Card style={{ border: "none" }}>
          <Card.Img src={img} />
          <h5>{cardName}</h5>
          <h6>
            {set} | {price}
          </h6>
        </Card>
      </Link>
    </>
  );
};

export default TrendsCards;
