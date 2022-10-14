import styled from 'styled-components';

export const PostCardContainer = styled.a`
	width: 24rem;
	min-height: 16.25rem;

	background-color: ${props => props.theme.colors['base-post']};
	text-decoration: none;
	color: ${props => props.theme.colors['base-text']};
	padding: 2rem;
	border-radius: 10px;

	& > div {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;

		h2 {
			color: ${props => props.theme.colors['base-title']};
			font-size: ${props => props.theme.fontSizes.xl};
			line-height: 160%;
			width: 68%;
			word-wrap: break-word;
		}

		span {
			color: ${props => props.theme.colors['base-span']};
			font-size: ${props => props.theme.fontSizes.sm};
			line-height: 160%;
		}
	}

	p {
		margin-top: 1.25rem;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		line-height: 25.6px;
	}
`;
