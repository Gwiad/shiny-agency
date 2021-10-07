import * as React from 'react';
import { useParams } from 'react-router-dom';

export default function Survey() {
  const params = useParams();
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>cest le Questionnaire numéro {params.surveyId}</h2>
    </div>
  );
}
