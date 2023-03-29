import {
  Col,
  Container,
  Row,
  Image,
  Tooltip,
  ListGroupItem,
} from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MdVerifiedUser } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { fetchUserProfile, getUserFeedback } from "../../redux/actions";
import parseISO from "date-fns/parseISO";
import { findCountryCode } from "../../data/tools";
import Feedback from "../FeedbackComp";
import { useState } from "react";
import FeedbackModel from "../FeedbackModel";

const UserProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const params = useParams();
  const username = params.username;

  const fetchedProfile = useSelector((state) => state.user?.selectedProfile);
  const feedback = useSelector((state) => state.user?.selectedProfileFeedback);

  useEffect(() => {
    dispatch(fetchUserProfile(username));
  }, []);

  if (fetchedProfile !== undefined) {
    dispatch(getUserFeedback(username));
  }

  const countryCode = findCountryCode(fetchedProfile?.country) || "";

  console.log(countryCode[0]);

  return (
    <>
      <Container style={{ height: "86.6vh" }}>
        <Container
          className="mt-4"
          style={{
            border: "1px solid lightgrey",
            borderRadius: "10px",
            height: "40rem",
            position: "relative",
          }}
        >
          <h1 className="m-3">
            {fetchedProfile?.username}{" "}
            <MdVerifiedUser
              style={{
                display: fetchedProfile?.active === false ? "none" : "",
              }}
              color="#00a3ff"
            />
          </h1>
          <Row style={{ width: "100%" }}>
            <Link
            onClick={handleShow}
              style={{
                width: "fit-content",
                marginLeft: "auto",
                marginRight: 0,
              }}
            >
              Submit Seller Feedback
            </Link>
          </Row>

          <h6 className="mx-3">
            Member since {parseISO(fetchedProfile?.createdAt).getFullYear()}
          </h6>
          <Row className="mx-3 text-muted" style={{ fontSize: "0.75rem" }}>
            Total Sales: {fetchedProfile?.userActivity?.sales.total}
            <br />
            Purchases made: {fetchedProfile?.userActivity?.purchases.total}
          </Row>
          <Row>
            <Col
              className="text-center"
              style={{
                borderRight: "1px solid lightgrey",
                marginTop: "auto",
                marginBottom: 0,
              }}
            >
              <h5>
                <FiUser size="2rem" className="mx-4" />
                {fetchedProfile?.firstName}
              </h5>
            </Col>
            <Col
              className="text-center"
              style={{ borderLeft: "1px solid lightgrey" }}
            >
              <Row style={{ justifyContent: "center" }}>
                <img
                  src={`https://flagcdn.com/${countryCode[0]}.svg`}
                  style={{ width: "4rem" }}
                  alt={fetchUserProfile?.country}
                />
                <h6>{fetchedProfile?.country}</h6>
              </Row>
            </Col>
          </Row>
          <hr />
          <Container
            className="text-center"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "23rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {feedback.length === 0 ? <h5>This user has no feedback.</h5> : ""}
            {feedback.length >= 1
              ? feedback.map((item) => (
                  <Feedback review={item} poster={item.reviewer.username} />
                ))
              : ""}
          </Container>
        </Container>
      </Container>
      <FeedbackModel show={show} onHide={handleClose}/>
    </>
  );
};

export default UserProfile;
