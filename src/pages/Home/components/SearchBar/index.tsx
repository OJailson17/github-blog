import { FormEvent, useState } from 'react';
import { api } from '../../../../lib/axios';
import { SearchBarContainer, SearchBarForm } from './styles';

interface SearchBarProps {
	publicationsAmount: number;
	searchIssue: (search?: string) => void;
}

export const SearchBar = ({
	publicationsAmount,
	searchIssue,
}: SearchBarProps) => {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearchPost = async (e: FormEvent) => {
		e.preventDefault();

		searchIssue(searchQuery);
	};

	return (
		<SearchBarContainer>
			<div>
				<p>Publicações</p>
				<span>{publicationsAmount} publicações</span>
			</div>

			<SearchBarForm onSubmit={handleSearchPost}>
				<input
					type='text'
					placeholder='Buscar conteúdo'
					onChange={e => setSearchQuery(e.target.value)}
					value={searchQuery}
				/>
			</SearchBarForm>
		</SearchBarContainer>
	);
};
