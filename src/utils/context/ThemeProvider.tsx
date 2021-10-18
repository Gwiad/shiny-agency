import React, { Dispatch, SetStateAction } from 'react';
import GlobalStyle from 'utils/styles/GlobalStyle';

export interface ThemeContextProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: '',
  setTheme: () => null,
});

export const ThemeProvider = (props: any) => {
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
