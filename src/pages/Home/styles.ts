import styled from 'styled-components';

export const PageContainer = styled.main`
	width: 100%;

	display: flex;
	align-items: center;
`;

export const PageContent = styled.div`
	width: 60%;
	margin: 0 auto;
`;

export const PostGridContainer = styled.div`
	display: grid;
	margin: 3rem 0;

	grid-template-columns: 1fr 1fr;
	column-gap: 2rem;
	row-gap: 2rem;
	place-items: center;
`;
