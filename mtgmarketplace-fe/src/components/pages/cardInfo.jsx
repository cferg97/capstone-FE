import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";
import { HiInformationCircle } from "react-icons/hi";
import { MdSell } from "react-icons/md";
import { FaComments } from "react-icons/fa";
import CardInfo from "../CardInfo";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const CardInfoPage = () => {
  const [openImg, setOpenImg] = useState(false);


  return (
    <>
      <Container>
        <Row className="my-2">
          <Col>
            <h2>Card Name</h2>
            <h6 className="text-muted">
              <i>Set Name</i>
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
                src="https://cards.scryfall.io/normal/front/0/0/000376ef-8b6c-490d-98cb-d6de15b2e585.jpg?1673306662"
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
                  <CardInfo />
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
      </Container>
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(0,0,0,0.8)" } }}
        open={openImg}
        zoom={{ maxZoomPixelRatio: 2, scrollToZoom: false }}
        plugins={[Zoom]}
        close={() => setOpenImg(false)}

        slides={[
          {
            src: "https://cards.scryfall.io/normal/front/0/0/000376ef-8b6c-490d-98cb-d6de15b2e585.jpg?1673306662",
          },
        ]}
      />
    </>
  );
};

export default CardInfoPage;
