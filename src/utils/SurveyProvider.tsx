import React from 'react';

interface ContextProps {
  answers: boolean[];
  setAnswers: () => null;
}

export const SurveyContext = React.createContext<ContextProps>({
  answers: [],
  setAnswers: () => null,
});

export const SurveyProvider = (props: any) => {
  const [answers, setAnswers] = React.useState([]);
  const { children } = props;

  return (
    <SurveyContext.Provider value={{ answers, setAnswers }}>
      {children}
    </SurveyContext.Provider>
  );
};
