import React, { Dispatch, SetStateAction } from 'react';

interface ContextProps {
  answers: boolean[];
  setAnswers: Dispatch<SetStateAction<never[]>>;
}

export const SurveyContext = React.createContext<ContextProps>({
  answers: [],
  setAnswers: () => [],
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
