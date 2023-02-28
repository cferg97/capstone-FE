import { Card } from "react-bootstrap";

const TrendsCards = () => {
  return (
    <>
      <Card style={{border: 'none'}}>
        <Card.Img src="https://cards.scryfall.io/normal/front/0/4/04ec8190-34d2-48c2-b6c9-c9eea48123e4.jpg?1670367207"/>
        <h5>Card Title</h5>
        <h6>Card Set Icon | Price</h6>
      </Card>
    </>
  );
};

export default TrendsCards;
