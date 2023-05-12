import * as Styled from './UserAvatar.styles';

const UserAvatar = ({ src }) => {
  return (
    <>
      <Styled.UserAvatarContainer>
        <img src={src} alt='' />
      </Styled.UserAvatarContainer>
    </>
  );
};

export default UserAvatar;
