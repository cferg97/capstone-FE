import { Container, Row, Col } from "react-bootstrap";
import { FaChartLine } from "react-icons/fa";
import TrendsCards from "./TrendsCards";
import TrendsList from "./TrendsList";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTrendsAction } from "../redux/actions";

const Trends = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendsAction());
  }, []);

  const bestSellers = useSelector((state) => state.frontPage?.trends);

  const arr = [];

  const fetchImages = () => {
    bestSellers.forEach((card) => {
      arr.push(card.cardmarketId);
    });
  };

  fetchImages();



  return (
    <>
      <Container
        className="mt-4 mb-3"
        style={{ width: "100%", height: "60rem" }}
      >
        <h2 className="mt-2 mb-2">
          <FaChartLine /> Trends
        </h2>
        <hr />
        <Row>
          <Col className="ml-auto mr-auto" style={{ textAlign: "center" }}>
            <h4>Best Sellers</h4>
            <Row className="mx-auto" style={{ width: "95%" }}>
              {bestSellers?.slice(0, 3).map((card, idx) => (
                <Col key={idx}>
                  <TrendsCards
                    cardName={card?.name}
                    set={card?.set}
                    price={"£" + card?.price}
                    id={card?.cardmarketId}
                  />
                </Col>
              ))}
            </Row>
            <Row className="mt-3">
              <Col>
                <TrendsList />
              </Col>
            </Row>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <h4>Best Bargains</h4>
            <Row className="mx-auto" style={{ width: "95%" }}>
              <Col>
                <TrendsCards />
              </Col>
              <Col>
                <TrendsCards />
              </Col>
              <Col>
                <TrendsCards />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <TrendsList />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Trends;
