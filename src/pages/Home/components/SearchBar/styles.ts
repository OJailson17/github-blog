import styled from 'styled-components';

export const SearchBarContainer = styled.div`
	margin-top: 4.5rem;

	div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		p {
			color: ${props => props.theme.colors['base-subtitle']};
			font-size: ${props => props.theme.fontSizes.xl};
			font-weight: bold;
		}

		span {
			color: ${props => props.theme.colors['base-span']};
			font-size: ${props => props.theme.fontSizes.sm};
		}
	}
`;

export const SearchBarForm = styled.form`
	width: 100%;
	margin-top: 0.75rem;

	input {
		width: 100%;
		padding: 0.75rem 1rem;
		background-color: ${props => props.theme.colors['base-input']};
		border-radius: 6px;
		border: 1px solid ${props => props.theme.colors['base-border']};
		outline: none;

		&::placeholder {
			color: ${props => props.theme.colors['base-label']};
		}
	}
`;
