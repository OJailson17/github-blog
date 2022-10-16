import ReactMarkdown from 'react-markdown';
import { PostCardContainer } from './styles';

interface Post {
	title: string;
	body: string;
	updated_at: Date;
	number: number;
}

interface PostCardProps {
	post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
	return (
		<PostCardContainer to={`/post/${post.number}`}>
			<div>
				<h2>{post.title}</h2>
				<span>Há 1 dia</span>
			</div>

			<div className='post-body'>
				<ReactMarkdown>{post.body}</ReactMarkdown>
			</div>
		</PostCardContainer>
	);
};
