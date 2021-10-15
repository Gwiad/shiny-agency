import * as React from 'react';
import styled from 'styled-components';
import colors from 'utils/styles/colors';
import { ThemeContext } from 'utils/ThemeProvider';

interface CardProps {
  label: string;
  title: string;
  picture: string;
}

interface CardLabelProps {
  $center?: boolean;
}

interface CardWrapperProps {
  $theme?: string;
}

const CardLabel = styled.span<CardLabelProps>`
  font-size: 22px;
  font-weight: bold;
  font-weight: 400;
  line-height: 26px;
  text-align: ${(props) => (props.$center ? 'center' : 'left')};
  margin: 30px;
`;

const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 90px;
  margin: auto;
  width: 148px;
  height: 148px;
`;
const CardWrapper = styled.div<CardWrapperProps>`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${(props) =>
    props.$theme === 'dark'
      ? colors.backgroundLight
      : colors.backgroundSuperLight};
  border-radius: 30px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
  height: 334px;
  width: 339px;
  border-radius: 30px;
  margin: auto;
`;

function Card({ label, title, picture }: CardProps) {
  const { theme } = React.useContext(ThemeContext);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const star = isFavorite ? '⭐️' : '';
  return (
    <CardWrapper $theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <CardLabel $center>
        {star} {title} {star}
      </CardLabel>
    </CardWrapper>
  );
}
export default Card;
