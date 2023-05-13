import * as Styled from './Trip.styles';

const Trip = () => {
  return (
    <Styled.Trip>
      <div className='ImgContainer'>
        <img
          src='https://images.unsplash.com/photo-1534695215921-52f8a19e7909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JlZWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
        />
      </div>
      <p className='DestinationName'>
        Destination: <span>New york, USA</span>
      </p>
      <div className='TripDetails'>
        <Styled.DateOfTripGroup className='DateOfTripGroup'>
          <div className='Border'>
            <Styled.CalendarMonthRoundedIcon />
          </div>
          <div className='DateOfTripTexts'>
            <h4>Date of Trip</h4>
            <p>26th, may 2023</p>
          </div>
        </Styled.DateOfTripGroup>
        <Styled.DurationOfTripGroup className='DurationOfTripGroup'>
          <div className='Border'>
            <Styled.AccessTimeFilledRoundedIcon />
          </div>
          <div className='DurationOfTripTexts'>
            <h4>Duration</h4>
            <p>26th, may 2023</p>
          </div>
        </Styled.DurationOfTripGroup>
      </div>
    </Styled.Trip>
  );
};

export default Trip;
