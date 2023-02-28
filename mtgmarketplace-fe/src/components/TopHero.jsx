import { Carousel } from "react-bootstrap";

const TopHero = () => {
  return (
    <>
      <Carousel interval={4000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{
              height: "20rem",
              objectFit: "cover",
              objectPosition: "center -60px",
            }}
            src="https://www.wargamer.com/wp-content/sites/wargamer/2022/08/magic-the-gathering-mtg-set-release-dates-2023.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Welcome to MTG Marketplace</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "20rem", objectFit: "cover" }}
            src="https://media.wizards.com/2022/images/daily/2FQgt9tsRFsL.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "20rem" }}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1677527112651-c852d3c5cef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default TopHero;
