import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { PageContainer, PageContent } from '../../styles/global';
import { PostCard } from './components/PostCard';
import { SearchBar } from './components/SearchBar';
import { UserCard } from './components/UserCard';
import { PostGridContainer } from './styles';

interface IPost {
	id: number;
	title: string;
	body: string;
	updated_at: Date;
	number: number;
}

export const Home = () => {
	const [posts, setPosts] = useState<IPost[]>([]);

	const handleSearchIssue = async (search?: string) => {
		const response = await api.get(
			`/search/issues?q=${search || ''}repo:ojailson17/github-blog`,
		);

		const issuesData = response.data;

		setPosts(issuesData.items);
	};

	useEffect(() => {
		handleSearchIssue();
	}, []);

	return (
		<>
			<PageContainer>
				<PageContent>
					<UserCard />
					<SearchBar
						publicationsAmount={posts.length}
						searchIssue={handleSearchIssue}
					/>

					<PostGridContainer>
						{posts.map(post => (
							<PostCard key={post.id} post={post} />
						))}
					</PostGridContainer>
				</PageContent>
			</PageContainer>
		</>
	);
};
