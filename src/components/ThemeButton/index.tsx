import React from 'react';
import { ThemeContext } from 'utils/context/ThemeProvider';
import colors from 'utils/styles/colors';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${colors.contrast};
  border: none;
  cursor: pointer;
  color: ${colors.contrastText};
  width: 300px;
  height: 60px;
`;

const ThemeButton = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const swapTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <StyledButton onClick={swapTheme}>
      {theme === 'light' ? 'Change to dark mode' : 'Change to light mode'}
    </StyledButton>
  );
};

export default ThemeButton;
