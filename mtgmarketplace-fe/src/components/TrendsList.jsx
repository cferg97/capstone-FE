import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const TrendsList = ({ info, num }) => {
  const img = `https://api.scryfall.com/cards/cardmarket/${info?.cardmarketId}?format=image`;
  return (
    <>
      <Container className="trends-list" style={{width: '80%'}}>
        <Row style={{height: '2rem', lineHeight: '2rem'}}>
          <Col md={1}>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Popover id="card-img-front">
                  <img style={{ height: "15rem" }} alt="" src={img || ""} />
                </Popover>
              }
            >
              <img
                style={{ height: "20px" }}
                alt="Card front"
                src="https://www.svgrepo.com/show/507557/camera.svg"
              />
            </OverlayTrigger>
          </Col>
          <Col md={1}>
            <span className="text-muted">{num+4}.</span>
          </Col>
          <Col>
            <Link
              style={{ textDecoration: "none" }}
              to={"/products/" + info.cardmarketId}
            >
              {info.name}
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TrendsList;
