import logoImg from '../../assets/logo.svg';
import { HeaderContainer } from './styles';

export const Header = () => {
	return (
		<HeaderContainer>
			<img src={logoImg} alt='' />
		</HeaderContainer>
	);
};
