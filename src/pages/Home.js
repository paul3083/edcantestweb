import React from "react";
import styled from "styled-components";

const Home = ({homeRef}) => {
    return(
        <Container ref={homeRef}>
            <MainText>We Are Creators, <BlueText>EDCAN</BlueText></MainText>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: 1080px;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #FFF 12.5%, #EBFEFF 40.37%, #D6F0FF 71.11%);
`;

const MainText = styled.text`
  color: #262A2E;
  text-align: center;
  font-family: SUIT;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const BlueText = styled.text`
  color: #00D1FF;
  font-family: SUIT;
  font-size: 55px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export default Home;
