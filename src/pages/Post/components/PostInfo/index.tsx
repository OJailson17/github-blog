import { formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import {
	FaCalendarDay,
	FaChevronLeft,
	FaComment,
	FaExternalLinkAlt,
	FaGithub,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PostInfoCard, PostInfoContainer, PostInfoHeader } from './styles';

interface PostInfo {
	title: string;
	created_at: Date;
	user: {
		login: string;
	};
	comments: number;
	html_url: string;
}

interface PostInfoProps {
	postInfo: PostInfo;
}

export const PostInfo = ({ postInfo }: PostInfoProps) => {
	let postDate: Date | string = 'Há 1 dia';

	if (postInfo.created_at) {
		postDate = formatDistanceToNow(new Date(postInfo.created_at), {
			addSuffix: true,
			locale: ptBr,
		});
	}

	return (
		<PostInfoContainer>
			<PostInfoHeader>
				<Link to={'/'}>
					<FaChevronLeft />
					VOLTAR
				</Link>

				<a href={postInfo.html_url} target='_blank'>
					VER NO GITHUB
					<FaExternalLinkAlt size={12} />
				</a>
			</PostInfoHeader>

			<h2>{postInfo.title}</h2>

			<PostInfoCard>
				<div>
					<FaGithub />
					<span>{postInfo.user?.login}</span>
				</div>
				<div>
					<FaCalendarDay />
					<span>{String(postDate)}</span>
				</div>
				<div>
					<FaComment />
					<span>{postInfo.comments} Comentários</span>
				</div>
			</PostInfoCard>
		</PostInfoContainer>
	);
};
