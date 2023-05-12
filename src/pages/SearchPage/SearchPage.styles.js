import styled from 'styled-components';
import { Search } from '@mui/icons-material/';
import { Input } from '../../components/InputElements/InputElements.styles';
import { StyledButton } from '../../components/Buttons/Button.styles';

export const Container = styled.main`
  padding-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  margin: 0 auto;

  height: ${(props) => (props.$mobile ? '100vh' : '100%')};
  overflow: ${(props) => (props.$mobile ? 'auto' : 'unset')};
  @media (min-width: 62.5em) {
    padding-top: clamp(2rem, 2vw + 1rem, 4rem);
    width: 70vw;
  }
`;

export const UserResults = styled.ul`
  margin: 4.5rem 0;
  display: ${({ $users }) => ($users ? 'flex' : 'none')};
  list-style-type: none;
  background-color: var(--dark-blue-2);
  width: 100%;
  max-width: 72rem;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 5rem 1rem;
  border-radius: 2.5rem;
  .UserResult {
    display: flex;
    align-items: flex-start;
    width: 100%;
    justify-content: center;
    gap: 1rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
    }
  }
  .UserAvatar {
    /* width: 30%; */
  }
  .UserInfo {
    width: 70%;
    /* max-width: 28rem; */
  }
  .Username {
    color: var(--blue-1);
    font-size: clamp(1.6rem, 2vw + 1rem, 1.8rem);
    font-family: var(--body-font);
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  .BioInfo {
    font-size: clamp(1.4rem, 2vw + 1rem, 1.6rem);
    color: var(--gray-2);
    font-weight: 300;
  }
  @media (min-width: 31.5em) {
    /* .UserInfo {
      width: 80%;
      max-width: 40rem;
    } */
  }
`;

export const SearchField = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 33rem;
  padding: clamp(2rem, 4vh + 3rem, 4rem) 0;

  label {
    display: none;
  }
`;

export const SearchIcon = styled(Search)`
  font-size: 32px !important;
  color: #f8f8f9;
  transform: translateX(2rem);
  position: absolute;
`;
export const SearchElement = styled(Input)`
  padding-left: 6.5rem;
  max-width: 44rem;
`;

export const FilterBtnsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1.4rem;
`;

export const FilterBtn = styled(StyledButton)`
  background-color: ${({ $filter }) => ($filter === 'active' ? 'var(--blue-1)' : 'var(--blue-2)')};
  max-width: 9rem;
  padding: 1rem;
  @media (min-width: 62.5em) {
    max-width: 12rem;
  }
  &:hover {
    box-shadow: none;
  }
  &:active {
    box-shadow: none;
  }
`;
