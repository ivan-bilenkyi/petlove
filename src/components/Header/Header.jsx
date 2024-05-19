import { HeaderContainer, } from './Header.styled';
import Logo from '../Logo/Logo.jsx';
import NavMenu from '../NavMenu/NavMenu.jsx';

const Header = () => {

  return (
    <HeaderContainer>
      <Logo/>
      <NavMenu/>
    </HeaderContainer>
  );
};

export default Header;
