import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import Error from 'components/Error';

export default function Survey() {
  const params = useParams();
  const currentQuestion = Number(params.questionId);
  const firstQuestion = 1;
  const lastQuestion = 10;
  const previousQuestion = Number(params.questionId) - 1;
  const nextQuestion = Number(params.questionId) + 1;
  const error = params.questionId < 1 || params.questionId > 10;
  return (
    <div>
      {error && <Error />}
      {!error && (
        <>
          <h1>Questionnaire 🧮</h1>
          <h2>cest la question numéro {currentQuestion}</h2>
          {currentQuestion > firstQuestion && (
            <Link to={`/survey/${previousQuestion}`}>Question Précédente</Link>
          )}
          {currentQuestion < lastQuestion && (
            <Link to={`/survey/${nextQuestion}`}>Question Suivante</Link>
          )}
          {currentQuestion === lastQuestion && (
            <Link to="/results">Résultats</Link>
          )}
        </>
      )}
    </div>
  );
}