import styled from 'styled-components';

export const PostContent = styled.main`
	width: 100%;
	margin: 2.5rem 0;
	line-height: 26.5px;

	p {
		margin-top: 0.5rem;

		& + p {
			margin-top: 1.5rem;
		}
	}

	a {
		color: ${props => props.theme.colors.blue};
		text-decoration: none;

		&.title {
			margin-top: 2rem;
			display: block;
			color: ${props => props.theme.colors.blue};
			text-decoration: underline;
		}

		:hover {
			text-decoration: underline;
		}
	}

	img {
		width: 100%;
	}

	h2,
	h3 {
		margin-top: 2rem;
	}
`;
