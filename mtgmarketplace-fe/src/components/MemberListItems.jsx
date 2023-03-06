import { Col, Container, Row } from "react-bootstrap";

const MemberListItem = () => {
  return (
    <>
      <Row className="member-list-item text-center p-2">
        <Col>Username + Flag</Col>
        <Col>Total Number of Sales</Col>
        <Col>Member since [date]</Col>
      </Row>
    </>
  );
};

export default MemberListItem;
