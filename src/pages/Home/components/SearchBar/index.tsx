import { SearchBarContainer, SearchBarForm } from './styles';

export const SearchBar = () => {
	return (
		<SearchBarContainer>
			<div>
				<p>Publicações</p>
				<span>6 publicações</span>
			</div>

			<SearchBarForm>
				<input type='text' placeholder='Buscar conteúdo' />
			</SearchBarForm>
		</SearchBarContainer>
	);
};
