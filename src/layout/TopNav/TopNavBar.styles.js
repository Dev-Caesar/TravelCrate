import styled from 'styled-components';

export const NavBar = styled.div`
  position: ${(props) => (props.mobile ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--dark-blue-2);
  border-bottom: 2px solid var(--blue-1);
  min-height: 80px;
  max-height: 80px;
  @media (min-width: 62.5em) {
    display: none;
    position: relative;
    width: 100%;
  }
`;

export const MenuButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  width: 25%;
  max-width: 3.4rem;
  display: flex;
  cursor: pointer;
  img {
    width: 100%;
  }
`;
export const LogoText = styled.img`
  width: 50%;
  max-width: 15rem;
`;
export const ProfilePhoto = styled.img`
  width: 25%;
  max-width: 7rem;
  border-radius: 50%;
`;
