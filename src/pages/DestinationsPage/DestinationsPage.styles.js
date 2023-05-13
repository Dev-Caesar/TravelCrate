import styled from 'styled-components';
import { SearchField } from '../SearchPage/SearchPage.styles';
import { Input } from '../../components/InputElements/InputElements.styles';
import { StyledButton } from '../../components/Buttons/Button.styles';

export const Container = styled.main`
  padding: 1rem;
  padding-top: 12rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.$mobile ? '100vh' : '100%')};
  overflow: ${(props) => (props.$mobile ? 'auto' : 'unset')};
  @media (min-width: 62.5em) {
    padding: 3rem;
    padding-top: clamp(2rem, 2vw + 1rem, 4rem);
  }
`;

export const SearchDestinationField = styled(SearchField)`
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  label {
    display: block;
    font-weight: 400;
    font-size: clamp(1.6rem, 2vw + 1rem, 1.8rem);
    color: var(--body-3);
  }
`;

export const DestinationsLayout = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(33rem, 45rem));
  gap: 3rem;
  @media (min-width: 50em) {
    grid-template-columns: repeat(2, minmax(28rem, 1fr));
  }
  @media (min-width: 87em) {
    grid-template-columns: repeat(3, minmax(28rem, 1fr));
  }
`;

export const DestinationItem = styled.article`
  display: flex;
  width: 100%;
  background-color: var(--dark-blue-2);
  padding: 2rem;
  border-radius: 2rem;
  gap: 1rem;
  .ImgContainer {
    display: flex;
    width: 16rem;
    height: 16rem;
  }
  img {
    object-fit: cover;
    border-radius: 2.5rem;
  }
  .DestinationInfoContainer {
    width: 53%;
    height: 22rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .DestinationName {
    font-size: clamp(1.6rem, 2vw + 1rem, 2rem);
    color: var(--body-4);
    margin-bottom: 0.5rem;
    align-self: flex-start;
  }
  .DestinationDetails {
    font-size: 1.6rem;
    color: var(--gray-2);
    height: 9.6rem;
    overflow: hidden;
    ::-webkit-scrollbar {
      width: 5px; /* width of the scrollbar */
    }

    ::-webkit-scrollbar-track {
      background: #2c313a; /* color of the track */
    }

    ::-webkit-scrollbar-thumb {
      background-color: #444850; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
    }
  }

  @media (max-width: 22.5em) {
    .ImgContainer {
      width: 14rem;
      height: 14rem;
    }
  }
`;

export const BookTripBtn = styled(StyledButton)`
  width: 90%;
  max-width: 25rem;
  padding: 1rem;
  border-radius: 2rem;
  &:hover {
    box-shadow: 0px 0px 0px 3px rgba(94, 157, 250, 0.5);
  }
  &:active {
    box-shadow: 0px 0px 0px 3px rgba(94, 157, 250, 0.6);
  }
`;
export const SearchElement = styled(Input)``;
