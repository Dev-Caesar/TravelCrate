import * as Styled from './PageHeading.styles';
import { ArrowBackIcon } from './PageHeading.styles';
const PageHeading = (props) => {
  return (
    <div style={{ alignSelf: 'flex-start' }}>
      <Styled.Pageheading>
        <button className='BackBtn'>
          <ArrowBackIcon />
        </button>
        <h1 className='Greeting'>{props.pageName}</h1>
      </Styled.Pageheading>
    </div>
  );
};

export default PageHeading;