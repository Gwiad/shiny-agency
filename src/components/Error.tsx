import * as React from 'react';
import styled from 'styled-components';
import colors from 'utils/styles/colors';
import errorImg from 'assets/404.svg';
import { ThemeContext } from 'utils/ThemeProvider';

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
  display: flex;
  align-items: center;
`;

const StyledImg = styled.img`
  margin-left: 50%;
  margin-right: 50%;
  transform: translate(-50%, -50%);
`;

function Error() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <StyledContainer $theme={theme}>
      <StyledImg src={errorImg} alt="404 erreur" />
    </StyledContainer>
  );
}

export default Error;
