import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'utils/styles/colors';
import Loader from 'utils/Atoms';
import { SurveyContext } from 'utils/context/SurveyProvider';
import useFetch from 'utils/hooks';

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

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

interface ReplyBoxProps {
  $isSelected: boolean;
}
const ReplyBox = styled.button<ReplyBoxProps>`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.$isSelected ? colors.contrast : colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`;

interface QuestionInterface {
  [id: string]: string;
}

export default function Survey() {
  // const [questions] = React.useState<QuestionsInterface>({});
  // const [isDataLoading ] = React.useState(false);
  const [routeError, setRouteError] = React.useState(false);
  const { answers, setAnswers } = React.useContext(SurveyContext);

  const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`);
  const surveyData: QuestionInterface | undefined = data?.surveyData;

  interface ParamsProps {
    questionId: string;
  }
  const params = useParams<ParamsProps>();
  const currentQuestion = Number(params.questionId);
  const previousQuestion = currentQuestion - 1;
  const nextQuestion = currentQuestion + 1;

  const [isTrue, setIsTrue] = React.useState(false);
  const [isFalse, setIsFalse] = React.useState(false);

  function saveReply(answer: boolean) {
    const newAnswers = answers;
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
    if (answer === true) {
      setIsTrue(true);
      setIsFalse(false);
    } else {
      setIsFalse(true);
      setIsTrue(false);
    }
  }
  React.useEffect(() => {
    if (answers[currentQuestion] === true) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
    if (answers[currentQuestion] === false) {
      setIsFalse(true);
    } else {
      setIsFalse(false);
    }
    if (currentQuestion < 1 || currentQuestion > 10) {
      setRouteError(true);
    }
  }, [answers, currentQuestion]);

  return (
    <div>
      {error ||
        (routeError && (
          <p style={{ textAlign: 'center' }}> oups il y a eu un problème </p>
        ))}
      {!error && !routeError && (
        <SurveyContainer>
          <QuestionTitle>Question {currentQuestion}</QuestionTitle>
          {isLoading && <Loader />}
          {!isLoading && surveyData && (
            <QuestionContent>{surveyData[currentQuestion]}</QuestionContent>
          )}
          <ReplyWrapper>
            <ReplyBox onClick={() => saveReply(true)} $isSelected={isTrue}>
              Oui
            </ReplyBox>
            <ReplyBox onClick={() => saveReply(false)} $isSelected={isFalse}>
              Non
            </ReplyBox>
          </ReplyWrapper>
          <LinkWrapper>
            <Link to={`/survey/${previousQuestion}`}>Précédent</Link>
            {surveyData && surveyData[currentQuestion + 1] ? (
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
