import { useEffect, useState } from 'react';
import {
	FaExternalLinkAlt,
	FaGithub,
	FaBuilding,
	FaUserFriends,
} from 'react-icons/fa';
import { api } from '../../../../lib/axios';
import {
	UserCardContainer,
	UserCardContent,
	UserCardProfileInfo,
	UserCardProfilePicture,
} from './styles';

interface IGithubUser {
	name: string;
	bio: string;
	avatar_url: string;
	login: string;
	followers: number;
	html_url: string;
}

export const UserCard = () => {
	const [githubUser, setGitHubUser] = useState({} as IGithubUser);

	useEffect(() => {
		api.get('/users/ojailson17').then(res => setGitHubUser(res.data));
	}, []);

	return (
		<UserCardContainer>
			{/* avatar */}
			<UserCardProfilePicture>
				<img src={githubUser.avatar_url} alt='' />
			</UserCardProfilePicture>

			<UserCardContent>
				<div className='profile-header'>
					<h2>{githubUser.name}</h2>
					<a href={githubUser.html_url} target='_blank'>
						<span>GITHUB</span>
						<FaExternalLinkAlt size={12} />
					</a>
				</div>

				<p>{githubUser.bio}</p>

				<UserCardProfileInfo>
					<div>
						<FaGithub />
						<span>{githubUser.login}</span>
					</div>
					<div>
						<FaBuilding />
						<span>Rocketseat</span>
					</div>
					<div>
						<FaUserFriends />
						<span>{githubUser.followers} seguidores</span>
					</div>
				</UserCardProfileInfo>
			</UserCardContent>
		</UserCardContainer>
	);
};
