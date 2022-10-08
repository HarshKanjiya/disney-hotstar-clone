import styled from "styled-components";
import { motion } from "framer-motion";

import { ReactComponent as LogoOne } from "../assets/images/cta-logo-one.svg";
import LogoTwo from "../assets/images/cta-logo-two.png";
import NavBar from "./navBar";


const LogIn = () => {

  return (
    <Container>
    <NavBar/>
      <div className="LogIn-BackGround" />
      <Master>
        <LogoOne className="logoOne" />
        <SignUp
          // whileHover={{ backgroundColor: "#008fe2" }}
          // whileTap={{ backgroundColor: "#0074b8" }}
          // transition={{ duration: 0.1 }}
        >
          GET ALL THERE
        </SignUp>
        <Details>
          This is a Disney Hotstar plus Clone Made by <mark>Harsh Kanjiya</mark>. this is
          built in React.js with additional Libraries like redux, react router
          dom, framer motion, styled components etc. I Hope you like it.
        </Details>
        <img src={LogoTwo} />
      </Master>
    </Container>
  );
};

export default LogIn;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Master = styled.div`
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  margin: 0 100px;

  .logoOne {
    width: 400px;
    min-width: 200px;
    @media (max-width: 786px) {
      width: 380px;
    }
    @media (max-width: 489px) {
      width: 240px;
    }
  }
  img {
    width: 400px;
    min-width: 200px;
    @media (max-width: 786px) {
      width: 380px;
    }
    @media (max-width: 489px) {
      width: 240px;
    }
  }
`;

const SignUp = styled(motion.a)`
  width: 100%;
  height: 50px;
  background-color: #008fe2;
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 1px;
  word-spacing: 3px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 7px;
`;

const Details = styled.p`
  text-align: center;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0.5px;

  mark{
    background-color: #008fe2;
    padding: 1px 2px;
    font-weight: 700;
    border-radius: 4px;
  }
`;
