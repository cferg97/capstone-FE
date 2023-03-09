import { Card } from "react-bootstrap";

const TrendsCards = ({ cardName, set, price, id }) => {
  let img_url;
  const fetchUrl = async () => {
    let response = await fetch(`http://localhost:3001/cards/images/${id}`);
    if (response.ok) {
      let fetchedData = await response.json();
      // console.log(fetchedData[0].image_uris.normal);
      img_url = await fetchedData[0].image_uris.normal
    }
  };
  fetchUrl();
  return (
    <>
      <Card style={{ border: "none" }}>
        <Card.Img src={img_url} />
        <h5>{cardName}</h5>
        <h6>
          {set} | {price}
        </h6>
      </Card>
    </>
  );
};

export default TrendsCards;
