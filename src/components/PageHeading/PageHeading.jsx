import * as Styled from './PageHeading.styles';
import { ArrowBackIcon } from './PageHeading.styles';
const PageHeading = ({ pageName }) => {
  return (
    <div style={{ alignSelf: 'flex-start' }}>
      <Styled.Pageheading>
        <button className='BackBtn'>
          <ArrowBackIcon />
        </button>
        <h1 className='Greeting'>{pageName}</h1>
      </Styled.Pageheading>
    </div>
  );
};

export default PageHeading;
