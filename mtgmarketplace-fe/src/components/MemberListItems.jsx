import { Col, Container, Row } from "react-bootstrap";
import parseISO from "date-fns/parseISO";
import { findCountryCode } from "../data/tools";
import { Link } from "react-router-dom";

const MemberListItem = ({ user }) => {
  const countryCode = findCountryCode(user?.country) || "";

  return (
    <>
      <Row className="member-list-item text-center p-2 m-0">
        <Col>
          <Link to={'/users/profile/' + user?.username}>{user?.username}</Link>
          <img
          className="ms-2"
            src={`https://flagcdn.com/${countryCode[0]}.svg`}
            style={{ width: "1.5rem" }}
            alt={user?.country}
          />
        </Col>
        <Col>{user?.userActivity?.sales.total}</Col>
        <Col>Member since {parseISO(user?.createdAt).toLocaleDateString()}</Col>
      </Row>
    </>
  );
};

export default MemberListItem;
