import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Feedback = ({ review, poster }) => {
  return (
    <>
      <Row className="p-0 m-0" style={{ width: "60rem", alignItems: "center" }}>
        <hr />
        <Col className="text-center">
          <h6>
            <Link to={"/users/profile/" + poster}>{poster}</Link> says:{" "}
          </h6>
        </Col>
        <Col className="text-center">
          <p>"{review.comment}"</p>
        </Col>
        <Col>
          <p>
            Postage: <b>{review.postageRating}/5</b>
          </p>
          <p>
            Item Condition: <b>{review.itemConditionRating}/5</b>
          </p>
        </Col>
        <hr />
      </Row>
    </>
  );
};

export default Feedback;
