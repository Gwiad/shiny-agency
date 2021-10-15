import colors from 'utils/styles/colors';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.contrast};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`;

interface StyledLinkProps {
  $isFullLink?: boolean;
  $theme?: string;
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  padding: 10px 15px;
  color: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#ffffff')};
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
  border-radius: 30px; 
  background-color: ${colors.backgroundLight};`}
`;

export default Loader;
