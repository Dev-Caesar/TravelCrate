import Comments from '../../components/Comments/Comments';
import Photo from '../../components/Photo/Photo';
import * as Styled from './PostDetails.styles';
const PostDetails = () => {
  return (
    <main>
      <Styled.PostDetailsContainer $mobile={false}>
        <header className='PageHeading'>
          <button className='BackBtn'>
            <Styled.ArrowBackIcon />
          </button>
          <h1 className='Greeting'>Post Details</h1>
        </header>
        <div className='Container'>
          <Photo />
          <Comments />
        </div>
      </Styled.PostDetailsContainer>
    </main>
  );
};

export default PostDetails;
