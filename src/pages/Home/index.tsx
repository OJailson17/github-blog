import { PageContainer, PageContent } from '../../styles/global';
import { PostCard } from './components/PostCard';
import { SearchBar } from './components/SearchBar';
import { UserCard } from './components/UserCard';
import { PostGridContainer } from './styles';

export const Home = () => {
	return (
		<>
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
};
