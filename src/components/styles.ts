import styled from 'styled-components';

export const HeaderContainer = styled.header`
	width: 100%;
	height: 18.5rem;
	max-height: 18.5rem;

	background-image: url('/src/assets/header-cover.png');
	background-repeat: no-repeat;
	background-size: contain;

	display: flex;
	justify-content: center;

	img {
		width: 9.25rem;
		max-height: 6.125rem;
		margin-top: 4rem;
	}
`;
