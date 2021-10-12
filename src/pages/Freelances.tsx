import * as React from 'react';
import Card from 'components/Card';
import styled from 'styled-components';
import Loader from 'utils/Atoms';

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

interface FreelanceInterface {
  ['id']: string;
  ['name']: string;
  ['job']: string;
  ['picture']: string;
}
export default function Freelances() {
  const [dataLoading, setDataLoading] = React.useState(false);
  const [freelances, setFreelances] = React.useState<FreelanceInterface[]>([]);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    async function fetchFreelances() {
      setDataLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/freelances`);
        const freelancesData = await response.json();
        setFreelances(freelancesData.freelancersList);
      } catch {
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    fetchFreelances();
  }, []);
  return (
    <div>
      <StyledSubTitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </StyledSubTitle>
      <StyledTitle>Trouvez votre prestataire</StyledTitle>
      {error && (
        <p style={{ textAlign: 'center' }}> oups il y a eu un problème </p>
      )}
      {!error && dataLoading && (
        <div
          style={{
            width: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Loader />
        </div>
      )}
      {!error && !dataLoading && (
        <CardsContainer>
          {freelances.map((profile) => (
            <Card
              key={`${profile.name}-${profile.id}`}
              label={profile.job}
              picture={profile.picture}
              title={profile.name}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  );
}
