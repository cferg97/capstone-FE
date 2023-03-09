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
            src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/Ugin-the-spirit-dragon.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
            alt="First slide"
          />
          <Carousel.Caption>
            <img
              style={{height: '5rem'}}
              src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1677511785/media/CapstoneLogo_uljdiz.png"
              alt=""
            />
            {/* <h3>MTG Marketplace</h3>
            <h6>dfdfdffd</h6> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "20rem", objectFit: "cover", objectPosition: 'center -90px' }}
            src="https://media.wizards.com/2022/images/daily/2FQgt9tsRFsL.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Phryrexia: All Will Be One</h3>
            <h6>Now available!</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "20rem", objectFit: "cover", objectPosition: 'center -70px' }}
            className="d-block w-100"
            src="https://rare-gallery.com/uploads/posts/958521-Magic-The-Gathering-artwork-video-game-art-Liliana.png"
            alt=""
          />

          <Carousel.Caption>
            <h3>Come work with us!</h3>
            <h6>I need help</h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default TopHero;
