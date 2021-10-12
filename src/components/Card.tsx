import * as React from 'react';
import styled from 'styled-components';
import colors from 'utils/styles/colors';

interface CardProps {
  label: string;
  title: string;
  picture: string;
}

interface CardLabelProps {
  $center?: boolean;
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
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight};
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
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <CardLabel $center>{title}</CardLabel>
    </CardWrapper>
  );
}
export default Card;
