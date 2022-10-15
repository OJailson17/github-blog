import styled from 'styled-components';

export const PostInfoContainer = styled.div`
	width: 54rem;
	min-height: 10.5rem;
	padding: 2rem;
	margin-top: calc((10.5rem / 1.8) * -1); // (min height / 2) * -1

	background-color: ${props => props.theme.colors['base-profile']};
	border-radius: 10px;

	& > h2 {
		margin-top: 1.25rem;
		font-size: ${props => props.theme.fontSizes.xxl};
		color: ${props => props.theme.colors['base-title']};
	}
`;

export const PostInfoHeader = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	& > a {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		font-size: ${props => props.theme.fontSizes.xs};
		font-weight: bold;
		color: ${props => props.theme.colors.blue};
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const PostInfoCard = styled.div`
	width: 100%;
	margin-top: 0.5rem;

	display: flex;
	align-items: center;
	gap: 1.5rem;

	div {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		span {
			color: ${props => props.theme.colors['base-span']};
		}

		svg {
			color: ${props => props.theme.colors['base-label']};
			width: 18px;
			height: 18px;
		}
	}
`;
