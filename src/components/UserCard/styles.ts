import styled from 'styled-components';

export const UserCardContainer = styled.div`
	width: 100%;
	margin-top: calc((13.25rem / 2.2) * -1); // (altura do container / 2.2) * -1

	display: flex;
	justify-content: space-between;
	gap: 2rem;

	background-color: ${props => props.theme.colors['base-profile']};
	border-radius: 10px;
	padding: 2.5rem 2rem;
`;

export const UserCardProfilePicture = styled.div`
	width: 9.25rem;
	height: 9.25rem;

	border-radius: 8px;

	img {
		width: 100%;
		height: 100%;
		border-radius: inherit;
	}
`;

export const UserCardContent = styled.div`
	flex: 1;

	& > .profile-header {
		display: flex;
		justify-content: space-between;

		h2 {
			color: ${props => props.theme.colors['base-title']};
			font-size: ${props => props.theme.fontSizes.xxl};
		}

		a {
			color: ${props => props.theme.colors.blue};
			text-decoration: none;
			font-size: ${props => props.theme.fontSizes.xs};
			font-weight: bold;

			span {
				margin-right: 0.5rem;
			}
		}
	}

	p {
		line-height: 25.6px;
		margin-top: 0.5rem;
	}
`;

export const UserCardProfileInfo = styled.div`
	width: 100%;
	margin-top: 1.5rem;

	display: flex;
	align-items: center;
	gap: 1.5rem;

	div {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		span {
			color: ${props => props.theme.colors['base-subtitle']};
		}

		svg {
			color: ${props => props.theme.colors['base-label']};
			width: 18px;
			height: 18px;
		}
	}
`;
