import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Popover from "react-bootstrap/Popover";

const SearchDisplay = ({ info }) => {
  let style;
  const rarity = info.rarity;
  const rarityToDisplay =
    rarity.toString().charAt(0).toUpperCase() + rarity.slice(1);

  switch (rarity) {
    case "common": {
      style = "black";
      break;
    }
    case "uncommon": {
      style = "#b0b0b0";
      break;
    }
    case "rare": {
      style = "#de972c";
      break;
    }
    case "mythic": {
      style = "#d64704";
      break;
    }
    default:
      break;
  }

  return (
    <>
      <Row
        className="m-0 text-center search-res-display"
        style={{ height: "2rem" }}
      >
        <Col md={{ span: 4 }}>
          <Row style={{ height: "100%", maxHeight: "100%" }}>
            <Col>
              {" "}
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Popover id="card-img-front">
                    <img
                      style={{ height: "15rem" }}
                      alt=""
                      src={info.image_uris.normal || ""}
                    />
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
            <Col
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {" "}
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={"/products/" + info?.cardmarket_id}
              >
                {info.name}
              </Link>
            </Col>
          </Row>
        </Col>
        <Col>
          <OverlayTrigger
            overlay={<Tooltip id="rarity">{rarityToDisplay}</Tooltip>}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 0V0C103.395 53.7596 146.24 96.6052 200 100V100V100C146.24 103.395 103.395 146.24 100 200V200V200C96.6052 146.24 53.7596 103.395 0 100V100V100C53.7596 96.6052 96.6052 53.7596 100 0V0Z"
                fill={style}
              />
            </svg>
          </OverlayTrigger>
        </Col>
        <Col>{info.collector_number}</Col>
        <Col>{info.prices.eur || info.prices.eur_foil}</Col>
      </Row>
    </>
  );
};

export default SearchDisplay;
