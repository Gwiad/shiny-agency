import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'utils/styles/colors';
// import { ThemedStyledFunction } from 'styled-components';
// import { StyledFunction } from 'styled-components';
interface LinkProps extends Link {
  $isFullLink?: boolean;
}

// const Heading = styled(({ active, ...rest }) => <Title {...rest} />)<{
//   active: boolean;
// }>`
//   color: ${props => (props.active ? 'red' : 'blue')};
// `;

const StyledLink = styled(Link)<LinkProps>`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

function Header() {
  return (
    <nav>
      <StyledLink to="/" $isFullLink={false} $$typeof={Symbol('StyledLink')}>
        Accueil
      </StyledLink>
      <StyledLink
        to="/freelances"
        $isFullLink={false}
        $$typeof={Symbol('StyledLink')}
      >
        Freelances
      </StyledLink>
      <StyledLink to="/survey/1" $isFullLink $$typeof={Symbol('StyledLink')}>
        Questionnaire
      </StyledLink>
    </nav>
  );
}

export default Header;
