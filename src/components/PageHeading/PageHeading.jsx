import * as Styled from './PageHeading.styles';
import { ArrowBackIcon } from './PageHeading.styles';
const PageHeading = ({ pageName, children }) => {
  return (
    <div style={{ alignSelf: 'flex-start', marginBottom: '2rem' }}>
      <Styled.Pageheading>
        <button className='BackBtn'>
          <ArrowBackIcon />
        </button>
        <h1 className='Greetingh1'>{pageName}</h1>
      </Styled.Pageheading>
      {children}
    </div>
  );
};

export default PageHeading;
