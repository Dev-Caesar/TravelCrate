import * as Styled from './SideBar.styles';

import ProfilePhoto from '../../assets/Profile-photo.png';
import BrandLogo from '../../assets/logoText.svg';

const SideBar = () => {
  return (
    <Styled.SideBar $mobile={false}>
      <img className='Logo' src={BrandLogo} alt='Travel Craft logo ' />
      <label className='SearchField' htmlFor='search'>
        <Styled.SearchIcon />
        <Styled.SearchInput type='search' name='search' placeholder='Search' />
      </label>
      <Styled.Divider></Styled.Divider>
      <nav className='LinksContainer'>
        <Styled.NavLink>
          <Styled.HomeIcon />
          <span>Homepage</span>
        </Styled.NavLink>
        <Styled.NavLink>
          <Styled.MapIcon />
          <span>Destinations</span>
        </Styled.NavLink>
        <Styled.NavLink>
          <Styled.ExploreIcon />
          <span> Trip Planning</span>
        </Styled.NavLink>
        <Styled.NewPostButton>Create new post</Styled.NewPostButton>
      </nav>
      <div className='user-profile-logout__container'>
        <Styled.UserContainer>
          <img src={ProfilePhoto} alt='user profile photo' />
          <p>Username</p>
        </Styled.UserContainer>
        <Styled.LogOutContainer>
          <Styled.LogoutIcon />
          <p>Logout</p>
        </Styled.LogOutContainer>
      </div>
    </Styled.SideBar>
  );
};

export default SideBar;
