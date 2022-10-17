import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/axios';
import { PageContainer, PageContent } from '../../styles/global';
import { PostInfo } from './components/PostInfo';
import { PostContent } from './styles';

interface IPost {
	id: number;
	title: string;
	body: string;
	created_at: Date;
	number: number;
	user: {
		login: string;
	};
	comments: number;
	html_url: string;
}

export const Post = () => {
	const [post, setPost] = useState({} as IPost);

	const { issue } = useParams();

	const getPost = async () => {
		const response = await api.get(
			`/repos/ojailson17/github-blog/issues/${issue || '1'}`,
		);
		const postData = await response.data;
		setPost(postData);
	};

	useEffect(() => {
		getPost();
	}, []);

	return (
		<PageContainer>
			<PageContent>
				<PostInfo postInfo={post} />

				<PostContent>
					<ReactMarkdown>{post.body}</ReactMarkdown>
				</PostContent>
			</PageContent>
		</PageContainer>
	);
};
