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
import SecondaryNav from "../SecondaryNav";
import LatestSec from "../Latest";
import NewsSec from "../About";

const Home = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user?.currentUser);

  return (
    <Container
      fluid
      className="m-0 pt-0 px-0 pb-4"
      style={{ width: "100%", height: "100%" }}
    >
      {currentUser?.active === (false || undefined) && <VerificationWarning userStatus={currentUser?.active} />}
      <TopHero />
      <Trends />
      <LatestSec />
      <NewsSec />
      
    </Container>
  );
};

export default Home;
