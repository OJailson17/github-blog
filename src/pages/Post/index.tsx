import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/axios';
import { PageContainer, PageContent } from '../../styles/global';
import { Code } from './components/Code';
import { PostInfo } from './components/PostInfo';
import { PostContent } from './styles';

const codeString = `
let foo = 42;   // foo is now a number
foo = 'bar';    // foo is now a string
foo = true;     // foo is now a boolean
`;

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

					{/* code */}
					{/* <Code code={codeString} language='javascript' /> */}
				</PostContent>
			</PageContent>
		</PageContainer>
	);
};
