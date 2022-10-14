import { Header } from './components/Header';
import { PostCard } from './components/PostCard';
import { SearchBar } from './components/SearchBar';
import { UserCard } from './components/UserCard';
import { PageContainer, PageContent, PostGridContainer } from './styles/app';

export function App() {
	return (
		<>
			<Header />

			<PageContainer>
				<PageContent>
					<UserCard />
					<SearchBar />

					<PostGridContainer>
						<PostCard />
						<PostCard />
						<PostCard />
						<PostCard />
						<PostCard />
						<PostCard />
					</PostGridContainer>
				</PageContent>
			</PageContainer>
		</>
	);
}
