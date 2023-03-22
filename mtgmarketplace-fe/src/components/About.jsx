import { Container } from "react-bootstrap";
import {BiNews} from 'react-icons/bi'

const NewsSec = () => {
  return (
    <>
      <Container className="mt-4 mb-3" style={{ height: "40rem" }}> 
      <h2 className="mt-2 mb-2">
          <BiNews/> News
        </h2>
        <hr className="mb-4 p-0" />
      </Container>
    </>
  );
};

export default NewsSec
