import PageHeading from '../../components/PageHeading/PageHeading';
import Trip from '../../components/Trip/Trip';
import * as Styled from './TripsPage.styles';
import { tripsData } from '../../utils/data';
const TripsPage = () => {
  return (
    <Styled.Container className='Container' $mobile={false}>
      <PageHeading pageName='Trips'>
        <p className='HeaderText'>Find all your planned trips</p>
      </PageHeading>
      <Styled.SortContainer>
        <h2>Sort by date</h2>
        <Styled.BtnsGroup>
          <Styled.FilterBtn $filter={true}>Newest</Styled.FilterBtn>
          <Styled.FilterBtn $filter={false}>Oldest</Styled.FilterBtn>
        </Styled.BtnsGroup>
      </Styled.SortContainer>

      <Styled.TripsLayout>
        {tripsData.map((trip) => (
          <Trip trip={trip} key={trip.dateOfTrip} />
        ))}
      </Styled.TripsLayout>
      <Styled.LoadMoreBtn>New Trip</Styled.LoadMoreBtn>
    </Styled.Container>
  );
};

export default TripsPage;
