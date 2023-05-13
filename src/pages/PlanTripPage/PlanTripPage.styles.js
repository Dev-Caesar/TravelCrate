// Packages
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
// Components
import {
  Container as DestinationsContainer,
  SearchDestinationField,
} from '../DestinationsPage/DestinationsPage.styles';
import { Input } from '../../components/InputElements/InputElements.styles';
import { CalendarMonthRounded, AccessTimeFilledRounded } from '@mui/icons-material';
import { Button, UploadCancelBtns } from '../UploadPostPage/UploadPostPage.styles';

export const Container = styled(DestinationsContainer)``;
export const HeaderImg = styled.img`
  margin-top: 3rem;
  align-self: center;
  max-width: 40rem;
`;

export const DestinationFieldContainer = styled(SearchDestinationField)`
  display: block;
  padding-bottom: 0%;
  padding-top: 2rem;
  margin: 0 auto;
  label {
    margin-bottom: 0.8rem;
  }

  span {
    display: block;
    font-size: 1.4rem;
    color: var(--danger);
    font-weight: 300;
  }
`;

export const DurationField = styled(DestinationFieldContainer)``;

export const DateFieldContainer = styled(DestinationFieldContainer)`
  .react-datepicker__input-container {
    display: flex;
    width: 100%;
    align-items: center;
  }
  .react-datepicker__month-container {
    background-color: var(--blue-hover);
    color: var(--gray-1);
  }
  .react-datepicker__current-month {
    font-size: inherit;
  }
  .react-datepicker {
    font-family: var(--body-font);
    font-size: 1.6rem;
    border: 1px solid #aeaeae;
    border-radius: 0.3rem;
    display: inline-block;
    position: relative;
  }
  .react-datepicker__day {
    width: 3rem;
    height: 3rem;
  }
  .react-datepicker__header {
    background-color: var(--blue-hover);
  }

  .react-datepicker__navigation-icon::before {
    border-color: var(--dark-blue-1);
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: var(--body-4);
    display: inline-block;
    width: 3rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
    margin-left: 6px;
  }
  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    border-radius: 0.3rem;
    background-color: var(--body-1);
  }
`;

export const InputElement = styled(Input)`
  margin-bottom: 0.8rem;
  &:hover {
    box-shadow: 0px 0px 0px 2px rgba(94, 157, 250, 0.5);
  }
  &:focus {
    box-shadow: 0px 0px 0px 2px rgba(94, 157, 250, 0.7);
  }
  &:active {
    box-shadow: none;
  }

  color: var(--gray-2);
`;

export const DateInputElement = styled(InputElement)`
  &:hover {
    box-shadow: 0px 0px 0px 6px rgba(94, 157, 250, 0.5);
  }
  &:focus {
    box-shadow: 0px 0px 0px 6px rgba(94, 157, 250, 0.7);
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  font-size: clamp(1.6rem, 2vw + 1rem, 1.8rem);
  outline: none;
  width: 100%;
  height: 5.5rem;
  border: 2px solid var(--blue-1);
  background-color: var(--dark-blue-2);
  border-radius: 0.5rem;
  color: var(--gray-2);
  padding: 0 1.4rem 0 5rem;
  margin-bottom: 0.8rem;
  transition: all 0.2s ease-in;
  ::placeholder {
    font-family: var(--body-font);
    font-weight: 400;
    font-size: clamp(1.4rem, 2vw + 1rem, 1.6rem);
    color: var(--body-2);
  }
  &:hover {
    box-shadow: 0px 0px 0px 6px rgba(94, 157, 250, 0.5);
  }
  &:focus {
    box-shadow: 0px 0px 0px 6px rgba(94, 157, 250, 0.7);
  }
  &:active {
    box-shadow: none;
  }
`;

export const BtnGroup = styled(UploadCancelBtns)`
  max-width: 45rem;
  margin: 0 auto;
`;
export const TripBtn = styled(Button)``;

export const CalenderIcon = styled(CalendarMonthRounded)`
  color: #f8f8f9;
  font-size: 32px !important;
  transform: translate(1rem, 1rem);
  position: absolute;
  z-index: 4;
`;

export const DurationIcon = styled(AccessTimeFilledRounded)`
  color: #f8f8f9;
  font-size: 32px !important;
  transform: translate(1rem, 1rem);
  position: absolute;
`;
