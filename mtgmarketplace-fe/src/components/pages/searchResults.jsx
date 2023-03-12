/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-duplicate-case */
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { advancedSearchAction, retrieveSetData } from "../../redux/actions";
import SearchDisplay from "../SearchDisplay";
import { searchByName } from "../../redux/actions";

const SearchResults = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveSetData());
  }, []);

  const setNames = useSelector((state) => state.sets?.setNames);

  const [searchQuery, setSearchQuery] = useState("");
  const [rarity, setRarity] = useState("Select Card Rarity");
  const [setName, setSetName] = useState("All");

  const base_url = `http://localhost:3001/search?name=/^.*${searchQuery}.*/i`;
  let queryUrl;

  const params = {
    rarity: `&rarity=${rarity}`,
    setName: `&set_name=${setName}`,
  };

  const onSearch = (e) => {
    e.preventDefault();
    if (searchQuery !== "") {
      dispatch(searchByName(searchQuery));
    }
  };

  const searchResults = useSelector((state) => state.search?.searchResults);

  const createParamString = () => {
    if (rarity !== "Select Card Rarity" && setName !== "All") {
      queryUrl = base_url + params.setName + params.rarity;
      return queryUrl.toString();
    }
    if (rarity !== "Select Card Rarity") {
      queryUrl = base_url + params.rarity;
      return queryUrl.toString();
    }
    if (setName !== "All") {
      queryUrl = base_url + params.setName;
      return queryUrl.toString();
    } else {
      return null;
    }
  };

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
            <Col style={{ height: "50%", width: "100%" }}>
              <Form
                onSubmit={(e) => onSearch(e)}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Form.Group className="my-3 mx-3">
                  <Form.Label>
                    <h6>Card Name</h6>
                  </Form.Label>
                  <Form.Control
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    placeholder="Card Name"
                  />
                </Form.Group>

                <Button
                  style={{ height: "fit-content", marginTop: "3.3rem" }}
                  type="submit"
                >
                  Search
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Container
          className="mt-2 text-center"
          style={{ border: "1px solid lightgrey", height: "11rem" }}
        >
          <h6 className="my-2">Additional Options</h6>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Rarity</Form.Label>
                <Form.Select
                  defaultValue={rarity}
                  onChange={(e) => setRarity(e.target.value)}
                >
                  <option disabled>Select Card Rarity</option>
                  <option value="common">Common</option>
                  <option value="uncommon">Uncommon</option>
                  <option value="rare">Rare</option>
                  <option value="mythic">Mythic</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col className="text-center">
              <Form.Group className="mb-3">
                <Form.Label>Set</Form.Label>
                <Form.Select
                  defaultValue={setName}
                  onChange={(e) => setSetName(e.target.value)}
                >
                  <option disabled>All</option>
                  {setNames.map((name, idx) => (
                    <option key={idx}>{name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Row className="m-0 p-0">
              <Button
                onClick={() => {
                  createParamString();
                  dispatch(advancedSearchAction(queryUrl));
                }}
                className="mx-auto"
                style={{ width: "fit-content" }}
              >
                Apply
              </Button>
            </Row>
          </Row>
        </Container>
        <Container className="mt-3">
          <Row
            className="text-center text-white"
            style={{ backgroundColor: "#00a3ff" }}
          >
            <Col md={{ span: 4 }}>
              <strong>Name</strong>
            </Col>
            <Col>
              <strong>Rarity</strong>
            </Col>
            <Col>
              <strong>#</strong>
            </Col>
            <Col>
              <strong>Price</strong>
            </Col>
          </Row>
          <Container
            fluid
            className="m-0 mt-2 p-0 mb-4 pb-4"
            style={{ width: "100%" }}
          >
            {searchResults &&
              searchResults.map((item) =>
                item.cardmarket_id === undefined ? (
                  ""
                ) : (
                  <SearchDisplay info={item} />
                )
              )}
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default SearchResults;
