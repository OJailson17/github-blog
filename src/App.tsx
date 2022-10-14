import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { UserCard } from './components/UserCard';
import { PageContainer, PageContent } from './styles/app';

export function App() {
	return (
		<>
			<Header />

			<PageContainer>
				<PageContent>
					<UserCard />

					<SearchBar />
				</PageContent>
			</PageContainer>
		</>
	);
}
