import React from 'react';
import 'App.css';
import styled from 'styled-components';
import colors from 'utils/styles/colors';
import HomeImg from 'assets/home-illustration.svg';
import { ThemeContext } from 'utils/context/ThemeProvider';

interface StyledContainerProps {
  $theme?: string;
}
const StyledContainer = styled.div<StyledContainerProps>`
  background: ${(props) =>
    props.$theme === 'dark'
      ? colors.backgroundLight
      : colors.backgroundSuperLight};
  margin-left: 65px;
  margin-right: 65px;
  height: calc(100vh - 200px);
  padding-top: 176px;
  padding-left: 98px;
  display: grid;
  grid-template-columns: auto auto;
`;
const StyledTitle = styled.h1`
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
  const { theme } = React.useContext(ThemeContext);
  return (
    <StyledContainer $theme={theme}>
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
