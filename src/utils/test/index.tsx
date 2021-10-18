import { render as rtlRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { SurveyProvider } from 'utils/context/SurveyProvider';
import { ThemeProvider } from 'utils/context/ThemeProvider';

function Wrapper({ children }: any) {
  return (
    <MemoryRouter>
      <ThemeProvider>
        <SurveyProvider>{children}</SurveyProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
}

function render(ui: any) {
  rtlRender(ui, { wrapper: Wrapper });
}

export default render;
