import { post } from '../../utils/data';
import PostInteractionIcons from '../PostInteractionIcons/PostInteractionIcons';
import * as Styled from './Photo.styles';
const Photo = () => {
  return (
    <Styled.PhotoLayout>
      <figure>
        <img src={post.url} alt='an image' />
        <div className='InteractionIcons'>
          <div className='PostInteractionContainer'>
            <PostInteractionIcons />
          </div>
        </div>
      </figure>
    </Styled.PhotoLayout>
  );
};

export default Photo;
