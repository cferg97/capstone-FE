import { Container, Button, Row } from "react-bootstrap";

const SecondaryNav = () => {
  return (
    <>
      <Container fluid style={{height: '2rem', }}>
        <Row>
            <Button style={{height: '1.9rem', width: 'fit-content'}}>
                Member Search
            </Button>
        </Row>
      </Container>
    </>
  );
};

export default SecondaryNav;
