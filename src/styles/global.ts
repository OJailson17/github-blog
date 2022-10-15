import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${props => props.theme.colors['base-background']};
}

body, input, button, textarea {
  font-family: 'Nunito', sans-serif;
  color: ${props => props.theme.colors['base-text']};
  font-size: 1rem;
}

button {
  cursor: pointer;
}
`;

export const PageContainer = styled.main`
	width: 100%;

	display: flex;
	align-items: center;
`;

export const PageContent = styled.div`
	width: 60%;
	margin: 0 auto;
`;
