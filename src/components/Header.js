import React from 'react';
import styled from "styled-components";
import Logo from "../assets/images/edcanlogo.svg";

const Header = ({sc1,sc2,sc3}) => {
  return (
    <Topbar>
      <Container>
        <img src={Logo} alt="Logo" width={40} onClick={sc3}/>
        <Field>
          <Text onClick={sc1}>동아리 소개</Text>
          <Text onClick={sc2}>지원하기</Text>
        </Field>
      </Container>
    </Topbar>
  );
};

const Topbar = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  height: 65px;
  align-items: center;
  justify-content: center;
  background: white;
`;

const Text = styled.button`
  color: #353938;
  font-size: 17px;
  font-weight: 600;
  border: 0;
  background-color: white;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

const Container = styled.div`
    display: flex;
    max-width: 1100px;
    width:100%;
    height: 65px;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
`;

export default Header
