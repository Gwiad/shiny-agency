import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'utils/styles/colors';
import lightLogo from 'assets/light-logo.png';

interface LinkProps extends Link {
  $isFullLink?: boolean;
}

const StyledLink = styled(Link)<LinkProps>`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `border-radius: 30px; background-color: ${colors.contrast};`}
  font-weight: 700px;
  font-size: 20px;
  line-height: 23px;
  color: ${colors.contrastText};
`;

const StyledDiv = styled.div`
  height: 200px;
`;

const StyledImg = styled.img`
  margin-top: 51px;
  margin-left: 26px;
  width: 186px;
  height: 70px;
`;

const StyledContainer = styled.div`
  float: right;
  margin-top: 64px;
  margin-right: 62px;
`;

function Header() {
  return (
    <nav>
      <StyledDiv>
        <StyledLink to="/" $isFullLink={false} $$typeof={Symbol('StyledLink')}>
          <StyledImg src={lightLogo} alt="logo" />
        </StyledLink>
        <StyledContainer>
          <StyledLink
            to="/"
            $isFullLink={false}
            $$typeof={Symbol('StyledLink')}
          >
            Accueil
          </StyledLink>
          <StyledLink
            to="/freelances"
            $isFullLink={false}
            $$typeof={Symbol('StyledLink')}
          >
            Profils
          </StyledLink>
          <StyledLink
            to="/survey/1"
            $isFullLink
            $$typeof={Symbol('StyledLink')}
          >
            Faire le test
          </StyledLink>
        </StyledContainer>
      </StyledDiv>
    </nav>
  );
}

export default Header;
