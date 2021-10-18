import * as React from 'react';
import styled from 'styled-components';
import { StyledLink, Loader } from 'utils/Atoms';
import useFetch from 'utils/hooks';
import colors from 'utils/styles/colors';
import { SurveyContext } from 'utils/context/SurveyProvider';
import { ThemeContext } from 'utils/context/ThemeProvider';

export function formatJobList(
  title: string,
  listLength: number,
  index: number,
) {
  if (index === listLength - 1) {
    return title;
  }
  return `${title},`;
}
const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundSuperLight : colors.backgroundLight};
`;
const ResultsTitle = styled.div`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`;
const DescriptionWrapper = styled.div`
  padding: 60px;
`;

const JobTitle = styled.span`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#FFFFFF')};
  text-transform: capitalize;
`;

const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#FFFFFF')};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export function formatQueryParams(answers: (undefined | boolean)[]) {
  const answerNumbers = Object.keys(answers);

  return answerNumbers.reduce(
    (previousParams: string, answerNumber: any, index: number) => {
      if (index !== 0) {
        const isFirstParam = index === 1;
        const separator = isFirstParam ? '' : '&';
        return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`;
      }
      return '';
    },
    '',
  );
}
export default function Results() {
  const { answers } = React.useContext(SurveyContext);
  const { theme } = React.useContext(ThemeContext);
  const queryParams = formatQueryParams(answers);
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${queryParams}`,
  );
  const resultsData = data?.resultsData;

  return (
    <>
      {!error && (
        <>
          {isLoading && (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          )}
          {!isLoading && (
            <ResultsContainer theme={theme}>
              <ResultsTitle theme={theme}>
                Les compétences dont vous avez besoin :
                {resultsData &&
                  resultsData.map((result, index) => (
                    <JobTitle
                      key={`result-title-${result.title}`}
                      theme={theme}
                    >
                      {formatJobList(result.title, resultsData.length, index)}
                    </JobTitle>
                  ))}
              </ResultsTitle>
              <StyledLink $isFullLink to="/freelances">
                Découvrez nos profils
              </StyledLink>
              <DescriptionWrapper>
                {resultsData &&
                  resultsData.map((result) => (
                    <JobDescription
                      theme={theme}
                      key={`result-detail-${result.title}`}
                    >
                      <JobTitle theme={theme}>{result.title}</JobTitle>
                      <p>{result.description}</p>
                    </JobDescription>
                  ))}
              </DescriptionWrapper>
            </ResultsContainer>
          )}
        </>
      )}
    </>
  );
}
