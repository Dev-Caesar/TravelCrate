import UserAvatar from '../UserAvatar/UserAvatar';
import { ArrowForwardIosIcon } from './UserResult.styles';

const UserResult = ({ userResult }) => {
  return (
    <li className='UserResult' key={userResult.username}>
      <UserAvatar src={userResult.profilePhoto} className='UserAvatar' />
      <div className='UserInfo'>
        <h4 className='Username'>{userResult.username}</h4>
        <p className='BioInfo'>{userResult.bio}</p>
      </div>
      <ArrowForwardIosIcon />
    </li>
  );
};

export default UserResult;
