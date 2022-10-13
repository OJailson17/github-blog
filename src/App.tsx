import { Header } from './components/Header';
import { UserCard } from './components/UserCard';
import { PageContainer, PageContent } from './styles/app';

export function App() {
	return (
		<>
			<Header />

			<PageContainer>
				<PageContent>
					<UserCard />
				</PageContent>
			</PageContainer>
		</>
	);
}
