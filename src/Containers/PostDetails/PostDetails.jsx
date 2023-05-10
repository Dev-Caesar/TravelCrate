import Comments from '../../components/Comments/Comments';
import PageHeading from '../../components/PageHeading/PageHeading';
import Photo from '../../components/Photo/Photo';
import * as Styled from './PostDetails.styles';
const PostDetails = () => {
  return (
    <main>
      <Styled.PostDetailsContainer $mobile={false}>
        <PageHeading pageName='Page Details' />
        <div className='Container'>
          <Photo />
          <Comments />
        </div>
      </Styled.PostDetailsContainer>
    </main>
  );
};

export default PostDetails;
