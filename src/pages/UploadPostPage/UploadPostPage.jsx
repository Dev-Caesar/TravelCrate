import PageHeading from '../../components/PageHeading/PageHeading';
import * as Styled from './UploadPostPage.styles';
import { TextArea } from '../../components/Textarea/Textarea.styles';

const UploadPostPage = () => {
  return (
    <Styled.Container $mobile={true}>
      <PageHeading pageName='Upload Post' />
      <Styled.SelectPostContainer htmlFor='selectPost' className='SelectPostLabel'>
        <Styled.UploadFileRoundedIcon />
        <span className='LabelText'>upload media</span>
        <span className='InfoText'>Photo should be in a certain format</span>
        <div className='ProgressBar'>
          <div className='Progress'></div>
        </div>
        <input type='file' name='selectPost' id='selectPost' style={{ display: 'none' }} />
        <Styled.ChooseFileBtn>Choose File</Styled.ChooseFileBtn>
      </Styled.SelectPostContainer>
      <Styled.AddPostDetails>
        <div className='CaptionField'>
          <label htmlFor='captions' className='CaptionLabelText'>
            Post Caption
          </label>
          <TextArea name='Caption' placeholder='write a caption...' />
          <span className='ErrorMessage'>This is an error element</span>
        </div>
        <div className='LocationField'>
          <label htmlFor='location' className='LocationText'>
            Location
          </label>
          <Styled.InputElement type='text' name='location' placeholder='Place of Visit, Country' />
          <span className='ErrorMessage'>This is an error element</span>
        </div>
        <Styled.UploadCancelBtns>
          <Styled.CancelBtn>Cancel</Styled.CancelBtn>
          <Styled.UploadBtn>Upload</Styled.UploadBtn>
        </Styled.UploadCancelBtns>
      </Styled.AddPostDetails>
    </Styled.Container>
  );
};

export default UploadPostPage;
