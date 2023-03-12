import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";
import { HiInformationCircle } from "react-icons/hi";
import { MdSell } from "react-icons/md";
import { FaComments } from "react-icons/fa";
import CardInfo from "../CardInfo";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getCurrentProductListings,
  setCurrentProductAction,
} from "../../redux/actions";
import ListingDisplay from "../ListingDisplay";

const CardInfoPage = () => {
  const [openImg, setOpenImg] = useState(false);

  const params = useParams();
  const id = params.cardmarketId;

  const dispatch = useDispatch();

  const currentCard = useSelector((state) => state.user?.selectedProduct);

  useEffect(() => {
    dispatch(setCurrentProductAction(id));
    console.log("fetched");
  }, [id]);

  const listings = useSelector((state) => state.user?.selectedProductListings);

  useEffect(() => {
    dispatch(getCurrentProductListings(currentCard?.cardmarket_id));
  }, [currentCard]);

  return (
    <>
      <Container>
        <Row className="my-2">
          <Col>
            <h2>{currentCard?.name}</h2>
            <h6 className="text-muted">
              <i>{currentCard?.set_name}</i>
            </h6>
          </Col>
          <hr />
        </Row>
        <Row>
          <Col md={3}>
            <Container>
              <img
                onClick={() => setOpenImg(true)}
                className="img-fluid card-view-img"
                style={{ maxHeight: "20rem" }}
                alt="card title"
                src={currentCard?.image_uris?.normal}
              />
            </Container>
          </Col>
          <Col md={{ offset: 0.5, span: 8 }}>
            <Tabs
              defaultActiveKey="info"
              style={{ backgroundColor: "#EDEDED" }}
            >
              <Tab eventKey="info" title={<HiInformationCircle />}>
                <Container>
                  <CardInfo card={currentCard || ""} />
                </Container>
              </Tab>
              <Tab eventKey="sell" title={<MdSell />}>
                <Container></Container>
              </Tab>
              <Tab eventKey="comments" title={<FaComments />}></Tab>
            </Tabs>
          </Col>
          <hr className="my-2" />
        </Row>
        <Row
          className="text-center mb-2 p-1"
          style={{ backgroundColor: "#EDEDED" }}
        >
          <Col style={{ borderRight: "1px solid grey" }}>
            <b>Seller</b>
          </Col>
          <Col style={{ borderRight: "1px solid grey" }}>
            <b>Product Information</b>
          </Col>
          <Col>
            <b>Offer</b>
          </Col>
        </Row>
        <Row>
          {listings.map((item, idx) => (
            <ListingDisplay key={idx} info={item} seller={item.sellerId} />
          ))}
        </Row>
      </Container>
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(0,0,0,0.8)" } }}
        open={openImg}
        zoom={{ maxZoomPixelRatio: 2, scrollToZoom: false }}
        plugins={[Zoom]}
        close={() => setOpenImg(false)}
        slides={[
          {
            src: currentCard?.image_uris?.large,
          },
        ]}
      />
    </>
  );
};

export default CardInfoPage;
