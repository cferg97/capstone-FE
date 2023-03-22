import { Col, Container, Row, Image, Tooltip } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MdVerifiedUser } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { fetchUserProfile, getUserFeedback } from "../../redux/actions";
import parseISO from "date-fns/parseISO";
import { findCountryCode } from "../../data/tools";

const UserProfile = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const username = params.username;

  const fetchedProfile = useSelector((state) => state.user?.selectedProfile);
  const feedback = useSelector((state) => state.user?.selectedProfileFeedback);

  useEffect(() => {
    dispatch(fetchUserProfile(username));
  }, []);

  if (fetchedProfile !== undefined) {
    dispatch(getUserFeedback(fetchedProfile?._id));
  }

  const countryCode = findCountryCode(fetchedProfile?.country) || "";

  console.log(countryCode[0]);

  return (
    <Container
      className="mt-4"
      style={{
        border: "1px solid lightgrey",
        borderRadius: "10px",
        height: "40rem",
        boxShadow: "1px 3px 5px lightgrey",
      }}
    >
      <OverlayTrigger
        overlay={
          <Tooltip>
            {fetchedProfile?.active === false
              ? "Unverified Account"
              : "User is verified"}
          </Tooltip>
        }
      >
        <>
          <h1 className="m-3">
            {fetchedProfile?.username}{" "}
            <MdVerifiedUser
              style={{
                display: fetchedProfile?.active === false ? "none" : "",
              }}
              color="#00a3ff"
            />
          </h1>
        </>
      </OverlayTrigger>
      <h6 className="mx-3">
        Member since {parseISO(fetchedProfile?.createdAt).getFullYear()}
      </h6>
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
      <Row>
        <Col className="mx-3" style={{ height: "100%" }}>
          <Link>Submit Seller Feedback</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
