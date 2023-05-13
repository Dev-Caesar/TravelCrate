import styled from 'styled-components';
import { Search, Home, Map, Explore, Logout } from '@mui/icons-material/';
import { Input } from '../../components/InputElements/InputElements.styles';

import { StyledButton } from '../../components/Buttons/Button.styles';

export const SideBar = styled.nav`
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 4;
  text-align: center;
  width: 100%;
  background-color: var(--dark-blue-1);
  display: ${(props) => (props.$mobile ? 'block' : ' none')};
  padding: 4rem 4rem;

  p,
  span {
    font-size: clamp(1.6rem, 2vw + 1rem, 1.8rem);
    color: var(--body-4);
  }
  > * {
    margin: 0 auto;
  }
  .Logo {
    display: none;
    margin-bottom: clamp(4rem, 4vh + 3rem, 9rem);
    @media (min-width: 62.5em) {
      display: block;
      width: 70%;
    }
  }

  .SearchField {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 33rem;
    padding: clamp(2rem, 4vh + 3rem, 4rem) 0;

    @media (min-width: 62.5em) {
      max-width: 26rem;
    }
  }

  .LinksContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;
    max-width: 40rem;
    padding: clamp(2rem, 4vh + 3rem, 4rem) 0;
    @media (min-width: 62.5em) {
      max-width: 26rem;
    }
  }

  .user-profile-logout__container {
    align-self: center;
    display: flex;
    width: 90%;
    flex-direction: column;
    align-items: flex-start;
    max-width: 30rem;
    gap: 3rem;
  }

  @media (min-width: 62.5em) {
    position: sticky;
    top: 0;
    background-color: var(--dark-blue-2);
    width: 30vw;
    max-width: 29rem;
    border-right: 2px solid var(--blue-1);
    visibility: visible;
    padding: 3rem 1rem;
    height: 100vh;
    display: block;
    ::-webkit-scrollbar {
      width: 10px; /* width of the scrollbar */
    }

    ::-webkit-scrollbar-track {
      background: #2c313a; /* color of the track */
    }

    ::-webkit-scrollbar-thumb {
      background-color: #444850; /* color of the scroll thumb */
      border-radius: 5px; /* roundness of the scroll thumb */
    }

    /* Firefox */
    * {
      scrollbar-width: thin;
      scrollbar-color: #444850 #f1f1f1;
    }
    overflow: auto;

    .user-profile-logout__container {
      max-width: 26rem;
    }
  }
  @media (min-height: 38.5em) {
    height: 100vh;
  }
  @media (min-width: 100.5em) {
    max-width: 35rem;
  }
`;

export const SearchInput = styled(Input)`
  padding-left: 6.5rem;
`;

export const Divider = styled.div`
  height: 0.1rem;
  width: 100%;
  background-color: var(--body-4);
`;

export const NavLink = styled.p`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.6rem 3rem;
  width: 100%;
  max-width: 40rem;
  border-radius: 1rem;
  transition: all 0.1s ease-in;
  cursor: pointer;
  &:hover {
    background-color: var(--blue-hover);
  }
  &:active {
    background-color: var(--blue-1);
  }
`;

export const NewPostButton = styled(StyledButton)`
  max-width: 23rem;
  border-radius: 5rem;
  margin-top: 1.8rem;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  width: 100%;
  max-width: 29rem;
  cursor: pointer;
  img {
    max-width: 6rem;
    border-radius: 50%;
    border: 3px solid var(--blue-1);
  }

  &:hover {
    p {
      color: var(--blue-1);
    }
  }

  @media (min-width: 59.5em) {
    width: 70%;
  }
`;

export const LogOutContainer = styled(UserContainer)`
  padding-bottom: 2rem;

  &:hover {
    p {
      color: var(--danger);
    }
  }
`;

// MUI Icons
export const SearchIcon = styled(Search)`
  font-size: 32px !important;
  color: #f8f8f9;
  transform: translateX(2rem);
  position: absolute;
`;
export const HomeIcon = styled(Home)`
  color: #f8f8f9;
  font-size: 32px !important;
`;
export const MapIcon = styled(Map)`
  color: #f8f8f9;
  font-size: 32px !important;
`;
export const ExploreIcon = styled(Explore)`
  color: #f8f8f9;
  font-size: 32px !important;
`;
export const LogoutIcon = styled(Logout)`
  color: #ef233c;
  font-size: 32px !important;
`;
