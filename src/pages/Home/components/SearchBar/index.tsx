import { SearchBarContainer, SearchBarForm } from './styles';

interface SearchBarProps {
	publicationsAmount: number;
}

export const SearchBar = ({ publicationsAmount }: SearchBarProps) => {
	return (
		<SearchBarContainer>
			<div>
				<p>Publicações</p>
				<span>{publicationsAmount} publicações</span>
			</div>

			<SearchBarForm>
				<input type='text' placeholder='Buscar conteúdo' />
			</SearchBarForm>
		</SearchBarContainer>
	);
};
