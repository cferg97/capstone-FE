import { ListGroup, Row, Col } from "react-bootstrap";

const CardInfo = () => {
    return ( 
        <>
        <Row className="mb-3 mt-3"><b>Rarity: </b></Row>
        <Row className="mb-3"><b>Number: </b></Row>
        <Row className="mb-3"><b>Printed In: </b></Row>
        <Row className="mb-3"><b>From: </b></Row>

        <Row>
            <Col>
            Rule text: 
            </Col>
        </Row>
        </>
     );
}
 
export default CardInfo;