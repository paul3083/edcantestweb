import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/edcanlogo.svg";

const Apply = ({ applyRef }) => {
  const handleApplyClick = () => {
    window.location.href = "https://edcan.kr/";
  };
  
  return (
    <Container ref={applyRef}>
      <ApplyBox>
        <Club data-aos="fade-up">
          <img src={Logo} alt="Logo" width={100} />
          <Clubname>EDCAN</Clubname>
        </Club>
        <ApplyBtn data-aos="fade-up" onClick={handleApplyClick}>
          <ApplyBtnText>지원하러 가기</ApplyBtnText>
        </ApplyBtn>
      </ApplyBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1080px;
  align-items: center;
  justify-content: center;
`;

const ApplyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
`;

const Club = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Clubname = styled.text`
  color: #425563;
  font-family: SUIT;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ApplyBtn = styled.button`
  display: flex;
  width: 598px;
  height: 81px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 0;
  border-radius: 10px;
  background: #00D1FF;
`;

const ApplyBtnText = styled.text`
  color: #FFF;
  font-family: SUIT;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default Apply;
