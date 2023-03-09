import { Card } from "react-bootstrap";

const TrendsCards = ({ cardName, set, price, cmID }) => {
  const img = `https://api.scryfall.com/cards/cardmarket/${cmID}?format=image`;

  return (
    <>
      <Card style={{ border: "none" }}>
        <Card.Img src={img} />
        <h5>{cardName}</h5>
        <h6>
          {set} | {price}
        </h6>
      </Card>
    </>
  );
};

export default TrendsCards;
