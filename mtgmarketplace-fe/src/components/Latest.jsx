import { Container } from "react-bootstrap";
import {TiStarburst} from 'react-icons/ti'

const LatestSec = () => {
  return (
    <>
      <Container className="mt-4 mb-3" style={{height: '40rem'}}>
      <h2 className="mt-2 mb-2">
          <TiStarburst /> Latest
        </h2>
        <hr />
        
      </Container>
    </>
  );
};

export default LatestSec;
