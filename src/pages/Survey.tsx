import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'utils/styles/colors';
import Loader from 'utils/Atoms';

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.backgroundDark};
`;

const QuestionContent = styled.span`
  margin: 30px;
`;

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

interface QuestionInterface {
  [id: string]: string;
}
interface QuestionsInterface {
  [name: string]: QuestionInterface;
}

export default function Survey() {
  const [questions, setQuestions] = React.useState<QuestionsInterface>({});
  const [isDataLoading, setDataLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    async function fetchSurvey() {
      setDataLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/survey`);
        const surveyData = await response.json();
        setQuestions(surveyData.surveyData);
      } catch {
        console.log('error');
        setError(true);
      } finally {
        setDataLoading(false);
        console.log('done');
      }
    }
    fetchSurvey();
  }, []);

  interface ParamsProps {
    questionId: string;
  }
  const params = useParams<ParamsProps>();
  const currentQuestion = Number(params.questionId);
  const previousQuestion = currentQuestion - 1;
  const nextQuestion = currentQuestion + 1;
  React.useEffect(() => {
    if (currentQuestion < 1 || currentQuestion > 10) {
      setError(true);
    }
  }, [currentQuestion]);
  return (
    <div>
      {error && (
        <p style={{ textAlign: 'center' }}> oups il y a eu un problème </p>
      )}
      {!error && (
        <SurveyContainer>
          <QuestionTitle>Question {currentQuestion}</QuestionTitle>
          {isDataLoading && <Loader />}
          {!isDataLoading && (
            <QuestionContent>{questions[currentQuestion]}</QuestionContent>
          )}
          <LinkWrapper>
            <Link to={`/survey/${previousQuestion}`}>Précédent</Link>
            {questions[currentQuestion + 1] ? (
              <Link to={`/survey/${nextQuestion}`}>Suivant</Link>
            ) : (
              <Link to="/results">Résultats</Link>
            )}
          </LinkWrapper>
        </SurveyContainer>
      )}
    </div>
  );
}
