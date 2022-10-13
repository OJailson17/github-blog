import {
	FaExternalLinkAlt,
	FaGithub,
	FaBuilding,
	FaUserFriends,
} from 'react-icons/fa';
import {
	UserCardContainer,
	UserCardContent,
	UserCardProfileInfo,
	UserCardProfilePicture,
} from './styles';

export const UserCard = () => {
	return (
		<UserCardContainer>
			{/* avatar */}
			<UserCardProfilePicture>
				<img src='https:github.com/ojailson17.png' alt='' />
			</UserCardProfilePicture>

			<UserCardContent>
				<div className='profile-header'>
					<h2>Jailson de Oliveira</h2>
					<a href='#'>
						<span>GITHUB</span>
						<FaExternalLinkAlt size={12} />
					</a>
				</div>

				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, earum
					totam fuga distinctio alias ullam id dolores, perspiciatis, odit sint
					repellendus. Reprehenderit aspernatur sunt dolores eius excepturi
					molestias incidunt illum!
				</p>

				<UserCardProfileInfo>
					<div>
						<FaGithub />
						<span>OJailson17</span>
					</div>
					<div>
						<FaBuilding />
						<span>Rocketseat</span>
					</div>
					<div>
						<FaUserFriends />
						<span>6 seguidores</span>
					</div>
				</UserCardProfileInfo>
			</UserCardContent>
		</UserCardContainer>
	);
};
