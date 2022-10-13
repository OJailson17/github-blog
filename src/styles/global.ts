import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  background-color: ${props => props.theme.colors['base-background']};
}

body, input, button, textarea {
  font-family: 'Nunito', sans-serif;
}

button {
  cursor: pointer;
}
`;
