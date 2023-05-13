import styled from 'styled-components';
import { Container as DestinationsContainer } from '../DestinationsPage/DestinationsPage.styles';
import { StyledButton } from '../../components/Buttons/Button.styles';

export const Container = styled(DestinationsContainer)`
  p {
    font-size: clamp(1.6rem, 2vw + 1rem, 1.8rem);
    color: var(--body-4);
    padding-bottom: 1rem;
  }
`;

export const SortContainer = styled.div`
  margin-bottom: 2.7rem;
  h2 {
    font-size: clamp(1.8rem, 2vw + 1rem, 2rem);
    color: var(--body-4);
    font-weight: 700;
    padding-bottom: 0.9rem;
  }
`;

export const BtnsGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FilterBtn = styled(StyledButton)`
  width: 45%;
  padding: 1rem;
  max-width: 10rem;
  background-color: ${(props) => (props.$filter ? 'var(--blue-1)' : 'var(--blue-2)')};
`;

export const TripsLayout = styled.section`
  width: 100%;
  align-self: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
  gap: 3rem;
  @media (min-width: 50em) {
    grid-template-columns: repeat(2, minmax(27rem, 1fr));
  }
  @media (min-width: 87em) {
    grid-template-columns: repeat(3, minmax(35rem, 1fr));
  }
`;

export const LoadMoreBtn = styled(FilterBtn)`
  align-self: center;
  width: 100%;
  max-width: 20rem;
  background-color: var(--blue-1);
  margin-top: 2rem;
`;
