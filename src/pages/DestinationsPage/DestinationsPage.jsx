import PageHeading from '../../components/PageHeading/PageHeading';
import { DestinationsData } from '../../utils/data';
import * as Styled from './DestinationsPage.styles';
const DestinationsPage = () => {
  let data = true;
  return (
    <Styled.Container $mobile={false}>
      <PageHeading pageName='Destination' />
      <Styled.SearchDestinationField>
        <label htmlFor='destination'>Destination</label>
        <Styled.SearchElement
          type='search'
          name='destination'
          placeholder='Search for a Destination'
        />
      </Styled.SearchDestinationField>

      {data && (
        <Styled.DestinationsLayout>
          {DestinationsData.map((destination) => {
            return (
              <Styled.DestinationItem key={destination.name}>
                <div className='ImgContainer'>
                  <img src={destination.image_url} alt='' />
                </div>
                <div className='DestinationInfoContainer'>
                  <h3 className='DestinationName'>{destination.name}</h3>
                  <p className='DestinationDetails'>{destination.description}</p>
                  <Styled.BookTripBtn>Book Trip</Styled.BookTripBtn>
                </div>
              </Styled.DestinationItem>
            );
          })}
        </Styled.DestinationsLayout>
      )}
    </Styled.Container>
  );
};

export default DestinationsPage;
