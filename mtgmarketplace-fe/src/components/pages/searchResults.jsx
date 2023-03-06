import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { retrieveSetData } from "../../redux/actions";

const SearchResults = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveSetData());
  }, []);

  const setNames = useSelector((state) => state.sets?.setNames);

  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <h2 className="p-0 m-0 mt-4">
          <b>Search Results</b>
        </h2>
        <hr />
        <Container
          className="p-0"
          style={{ border: "1px solid lightgrey", backgroundColor: "#ededed" }}
        >
          <Row className="m-0" style={{ width: "100%", height: "8rem" }}>
            <Col style={{ height: "50%", width: "100%",}}>
              <Form style={{ display: "flex", justifyContent: 'center' }}>
                <Form.Group className="my-3">
                  <Form.Label>
                    <h6>Set</h6>
                  </Form.Label>
                  <Form.Select>
                    <option selected disabled>All</option>
                    {setNames.map((name) => (
                      <option>{name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="my-3 mx-3">
                    <Form.Label><h6>Card Name</h6></Form.Label>
                  <Form.Control type="text" placeholder="Card Name" />
                </Form.Group>

                <Button style={{height: 'fit-content', marginTop: '3.3rem'}} type="submit">Search</Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Container className="mt-3">
            <Row className="text-center text-white" style={{backgroundColor: '#00a3ff'}}>
                <Col><strong>Name</strong></Col>
                <Col><strong>Rarity</strong></Col>
                <Col><strong>#</strong></Col>
                <Col><strong>Price</strong></Col>
            </Row>
        </Container>
      </Container>
    </>
  );
};

export default SearchResults;
