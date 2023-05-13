import TopNavBar from '../../layout/TopNav/TopNavBar';
import SideBar from '../../layout/SideBar/SideBar';
import * as Styled from './Root.styles';

import { PlanTrip } from '../../Containers';

const Root = () => {
  return (
    <Styled.Layout>
      <div>
        <TopNavBar />
        <SideBar />
      </div>
      {/* <PostDetails /> */}
      {/* <UploadPost /> */}
      {/* <Search /> */}
      {/* <Destinations /> */}
      <PlanTrip />
    </Styled.Layout>
  );
};

export default Root;
