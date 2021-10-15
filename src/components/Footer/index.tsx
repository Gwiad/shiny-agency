import React from 'react';
import styled from 'styled-components';
import ThemeButton from 'components/ThemeButton';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

function Footer() {
  return (
    <FooterContainer>
      <ThemeButton />
    </FooterContainer>
  );
}

export default Footer;
