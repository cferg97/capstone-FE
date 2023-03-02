import { Container } from "react-bootstrap";
import Navigation from "../Navigation";
import VerificationWarning from "../VerificationWarning";
import TopHero from "../TopHero";
import Trends from "../Trends";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user?.currentUser);

  return (
    <Container
      fluid
      className="m-0 p-0"
      style={{ width: "100%", height: "100%" }}
    >
      {currentUser?.active === (false || undefined) && <VerificationWarning />}
      <TopHero />
      <Trends />
    </Container>
  );
};

export default Home;
