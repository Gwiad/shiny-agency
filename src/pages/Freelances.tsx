import * as React from 'react';
import Card from 'components/Card';
import styled from 'styled-components';

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: 'https://picsum.photos/200/300',
    id: 1,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: 'https://picsum.photos/200/300',
    id: 2,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: 'https://picsum.photos/200/300',
    id: 3,
  },
];
const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
  margin: auto;
  width: 760px;
`;
const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 39.75px;
  text-align: center;
`;
const StyledSubTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  text-align: center;
`;
export default function Freelances() {
  return (
    <div>
      <StyledSubTitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </StyledSubTitle>
      <StyledTitle>Trouvez votre prestataire</StyledTitle>
      <CardsContainer>
        {freelanceProfiles.map((profile) => (
          <Card
            key={`${profile.name}-${profile.id}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  );
}
