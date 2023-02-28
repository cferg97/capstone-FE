import { Container } from "react-bootstrap";
import Navigation from "../Navigation";
import VerificationWarning from "../VerificationWarning";
import TopHero from "../TopHero";
import Trends from "../Trends";

const Home = () => {
  return (
    <Container
      fluid
      className="m-0 p-0"
      style={{ width: "100%", height: "100%" }}
    >
      <VerificationWarning />
      <TopHero />
      <Trends />
    </Container>
  );
};

export default Home;
