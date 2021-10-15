import { createGlobalStyle, css } from 'styled-components';
import colors from 'utils/styles/colors';

interface Props {
  theme: string;
}
const GlobalStyle = createGlobalStyle(
  (props: Props) => css`
    div {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    html,
    body {
      background: ${props.theme === 'dark' ? colors.backgroundDark : 'white'};
      color: ${props.theme === 'dark' ? colors.contrastText : 'black'};
    }
  `,
);

export default GlobalStyle;
