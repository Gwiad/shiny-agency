import * as React from 'react';
import { SurveyContext } from 'utils/SurveyProvider';

export default function Results() {
  const { answers } = React.useContext(SurveyContext);
  console.log(answers);
  return (
    <div>
      <h1>Résultats</h1>
    </div>
  );
}
