import { AccessTimeFilledRounded, CalendarMonthRounded } from '@mui/icons-material';
import styled from 'styled-components';

export const Trip = styled.article`
  background-color: var(--dark-blue-2);
  padding: 2rem;
  border-radius: 1.5rem;
  .ImgContainer {
    display: flex;
    height: 18rem;
    margin-bottom: 1.2rem;
    img {
      object-fit: cover;
      border-radius: 2rem;
    }
  }
  .DestinationName {
    font-size: clamp(1.8rem, 2vw + 1rem, 2rem);
    color: var(--body-4);
    font-weight: 700;
    margin-bottom: 1rem;
    span {
      font-weight: 400;
      color: var(--gray-2);
      font-size: clamp(1.6rem, 2vw + 1rem, 1.7rem);
      text-align: center;
    }
  }
  .TripDetails {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
`;

export const DateOfTripGroup = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  .Border {
    border: 1px solid var(--body-4);
    padding: 0.6rem;
    border-radius: 1rem;
  }
  h4,
  p {
    font-family: var(--body-font);
    font-size: clamp(1.3rem, 2vw + 1rem, 1.5rem);
    color: var(--body-4);
  }

  p {
    font-weight: 300;
  }
  @media (min-width: 22.4em) {
    flex-direction: row;
    text-align: start;
  }
`;
export const DurationOfTripGroup = styled(DateOfTripGroup)``;

export const CalendarMonthRoundedIcon = styled(CalendarMonthRounded)`
  color: #f8f8f9;
  font-size: 3rem !important;
`;

export const AccessTimeFilledRoundedIcon = styled(AccessTimeFilledRounded)`
  color: #f8f8f9;
  font-size: 3rem !important;
`;
