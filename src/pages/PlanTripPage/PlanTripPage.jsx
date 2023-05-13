import PageHeading from '../../components/PageHeading/PageHeading';
import * as Styled from './PlanTripPage.styles';
import DestinationImg from '../../assets/Destinations-image.svg';

const PlanTripPage = (props) => {
  return (
    <Styled.Container>
      <PageHeading pageName={'Plan a Trip'} />
      <Styled.HeaderImg src={DestinationImg} width='400px' height='270px' />
      <form>
        <Styled.DestinationFieldContainer className='destinationFieldContainer'>
          <label htmlFor='destination'>Destination</label>
          <Styled.InputElement
            type='text'
            readOnly
            value={'location-1'}
            style={{ color: '#8fbafb' }}
          />
          <span className='ErrorMessage'>Error Message</span>
        </Styled.DestinationFieldContainer>
        <Styled.DateFieldContainer className='DateOfTripField'>
          <label htmlFor='date'>Date of Trip</label>
          <Styled.CalenderIcon />
          <Styled.StyledDatePicker
            selected={props.startDate}
            onChange={(date) => props.setStartDate(date)}
          />
          <span className='ErrorMessage'>Error Message</span>
        </Styled.DateFieldContainer>
        <Styled.DurationField>
          <label htmlFor='duration'>Duration of Trip</label>
          <Styled.DurationIcon />
          <Styled.DateInputElement
            type='text'
            name='duration'
            placeholder='2days'
            style={{ padding: '0 1.4rem 0 5rem' }}
          />
        </Styled.DurationField>
        <Styled.BtnGroup>
          <Styled.TripBtn $btnType='cancel' type='button'>
            Cancel
          </Styled.TripBtn>
          <Styled.TripBtn $btnType='finish' type='button'>
            Finish
          </Styled.TripBtn>
        </Styled.BtnGroup>
      </form>
    </Styled.Container>
  );
};

export default PlanTripPage;
