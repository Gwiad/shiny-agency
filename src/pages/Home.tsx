import React from 'react';
import 'App.css';
import styled from 'styled-components';
import colors from 'utils/styles/colors';
import HomeImg from 'assets/home-illustration.svg';

const StyledContainer = styled.div`
  background: ${colors.backgroundLight};
  margin-left: 65px;
  margin-right: 65px;
  height: calc(100vh - 200px);
  padding-top: 176px;
  padding-left: 98px;
  display: grid;
  grid-template-columns: auto auto;
`;
const StyledTitle = styled.h1`
  color: ${colors.contrastText};
  font-weight: 700;
  font-size: 50px;
  line-height: 80.25px;
`;
const StyledDiv = styled.div`
  width: 552px;
`;
const StyledImg = styled.img`
  width: 541px;
  height: 506px;
  margin-left: 45px;
`;

function Home() {
  return (
    <StyledContainer>
      <StyledDiv>
        <StyledTitle>
          Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
        </StyledTitle>
      </StyledDiv>
      <StyledImg src={HomeImg} alt="" />
    </StyledContainer>
  );
}

export default Home;
