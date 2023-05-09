import { Close, Menu } from '@mui/icons-material/';
import Logotext from '../../assets/logoText.svg';
import ProfilePhoto from '../../assets/Profile-photo.png';

import * as Styled from './TopNavBar.styles';

const TopNavBar = () => {
  let toggleNavBar = true;
  return (
    <header>
      <Styled.NavBar className='navbar' mobile={true}>
        <Styled.MenuButton>
          {toggleNavBar ? (
            <Menu style={{ fontSize: '32px', color: '#5f9dfa' }} />
          ) : (
            <Close style={{ fontSize: '32px', color: '#5f9dfa' }} />
          )}
        </Styled.MenuButton>
        <Styled.LogoText src={Logotext} alt='travel craft text logo' />
        <Styled.ProfilePhoto src={ProfilePhoto} alt="a user's profile photo" />
      </Styled.NavBar>
    </header>
  );
};

export default TopNavBar;
