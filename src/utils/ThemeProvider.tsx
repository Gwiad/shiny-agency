import React from 'react';
import GlobalStyle from 'utils/styles/GlobalStyle';

interface ContextProps {
  theme: string;
  setTheme: Function;
}

export const ThemeContext = React.createContext<ContextProps>({
  theme: '',
  setTheme: () => null,
});

const ThemeProvider = (props: any) => {
  const [theme, setTheme] = React.useState('dark');
  const { children } = props;
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GlobalStyle theme={theme} />
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
