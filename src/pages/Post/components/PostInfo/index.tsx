import {
	FaCalendarDay,
	FaChevronLeft,
	FaComment,
	FaExternalLinkAlt,
	FaGithub,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PostInfoCard, PostInfoContainer, PostInfoHeader } from './styles';

export const PostInfo = () => {
	return (
		<PostInfoContainer>
			<PostInfoHeader>
				<Link to={'/'}>
					<FaChevronLeft />
					VOLTAR
				</Link>

				<a href='https://github.com/OJailson17' target='_blank'>
					VER NO GITHUB
					<FaExternalLinkAlt size={12} />
				</a>
			</PostInfoHeader>

			<h2>JavaScript data types and data structures</h2>

			<PostInfoCard>
				<div>
					<FaGithub />
					<span>OJailson17</span>
				</div>
				<div>
					<FaCalendarDay />
					<span>Há 1 dia</span>
				</div>
				<div>
					<FaComment />
					<span>5 Comentários</span>
				</div>
			</PostInfoCard>
		</PostInfoContainer>
	);
};
