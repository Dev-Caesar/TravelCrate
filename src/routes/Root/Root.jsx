import TopNavBar from '../../layout/TopNav/TopNavBar';
import SideBar from '../../layout/SideBar/SideBar';
import * as Styled from './Root.styles';

// import { PostDetails, UploadPost, Search} from '../../Containers';

const Root = () => {
  return (
    <Styled.HomeFeedLayout>
      <div>
        <TopNavBar />
        <SideBar />
      </div>
      {/* <PostDetails /> */}
      {/* <UploadPost /> */}
      {/* <Search /> */}
    </Styled.HomeFeedLayout>
  );
};

export default Root;
