import {
  Col,
  Container,
  Row,
  Tabs,
  Tab,
  Form,
  Button,
  ListGroupItem,
} from "react-bootstrap";
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
import { Link, useParams } from "react-router-dom";
import {
  fetchCommentsAction,
  getCurrentProductListings,
  newCommentAction,
  newListingAction,
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

  useEffect(() => {
    dispatch(fetchCommentsAction(id));
  }, []);

  const cardComments = useSelector(
    (state) => state.user?.selectedProductComments
  );

  const [quantity, setQuantity] = useState(1);
  const [condition, setCondition] = useState("Near Mint");
  const [language, setLanguage] = useState("English");
  const [price, setPrice] = useState(0.0);

  const cardToSend = {
    quantity: quantity,
    condition: condition,
    language: language,
    price: price,
  };

  const onList = (e) => {
    e.preventDefault();
    dispatch(newListingAction(id, cardToSend));
  };

  const [commentText, setComment] = useState("");

  const commentToSend = {
    text: commentText,
  };

  const onSubmitComment = (e) => {
    e.preventDefault();
    dispatch(newCommentAction(id, commentToSend));
    setComment("");
  };

  return (
    <>
      <Container style={{ height: "88.5vh" }}>
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
                <Container>
                  <Form
                    className="mt-2"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "60%",
                    }}
                  >
                    <Form.Group className="mb-2">
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control
                        defaultValue={1}
                        type="number"
                        onChange={(e) => setQuantity(e.target.valueAsNumber)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label>Condition</Form.Label>
                      <Form.Select
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                      >
                        <option value="NM">Near Mint</option>
                        <option value="EX">Excellent</option>
                        <option value="GD">Good</option>
                        <option value="LP">Lightly Played</option>
                        <option value="HP">Heavily Played</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Language</Form.Label>
                      <Form.Select disabled>
                        <option value="English" selected>
                          English
                        </option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mt-2">
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.valueAsNumber)}
                      />
                    </Form.Group>
                    <Button
                      style={{ width: "fit-content" }}
                      onClick={(e) => onList(e)}
                      className="ms-auto mt-2"
                      type="submit"
                    >
                      List for Sale
                    </Button>
                  </Form>
                </Container>
              </Tab>
              <Tab eventKey="comments" title={<FaComments />}>
                <Container className="mt-3">
                  <Row style={{ width: "100%" }}>
                    <h4>Comments</h4>

                    {cardComments.length === 0 ? (
                      <b>This card has no comments. Add one?</b>
                    ) : (
                      ""
                    )}
                    {cardComments.length >= 1
                      ? cardComments.map((comment) => (
                          <ListGroupItem style={{ marginLeft: "0.7rem" }}>
                            <Link
                              to={
                                "/users/profile/" + comment?.posterId.username
                              }
                            >
                              {comment?.posterId.username}{" "}
                            </Link>
                            | {comment.text}
                          </ListGroupItem>
                        ))
                      : ""}
                  </Row>

                  <Row style={{ alignItems: "center" }}>
                    <Form
                      className="mt-4"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Form.Group style={{ width: "50%" }}>
                        <Form.Control
                          value={commentText}
                          onChange={(e) => setComment(e.target.value)}
                          type="text"
                          placeholder="Add a comment..."
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        onClick={(e) => onSubmitComment(e)}
                        type="submit"
                        style={{ height: "fit-content", width: "fit-content" }}
                      >
                        Post
                      </Button>
                    </Form>
                  </Row>
                </Container>
              </Tab>
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
