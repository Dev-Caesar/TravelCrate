import LogoIcon from '../../../assets/Logo-icon.svg';
import * as Styled from './Signup.styles';
import { Input } from '../../../components/InputElements/InputElements.styles';
function SignUp() {
  return (
    <Styled.Container>
      <Styled.Logo src={LogoIcon} alt='Travel Craft Logo Icon' />
      <h1>Create an Account</h1>
      <p>Sign up now and gain access to Premium content</p>
      <form>
        <Styled.InputContainer>
          <label htmlFor='username'>Username </label>
          <Input type='text' name='username' placeholder='Enter your username' />
          <span>This is an error message</span>
        </Styled.InputContainer>
        <Styled.InputContainer>
          <label htmlFor='email'>Email</label>
          <Input type='email' name='email' placeholder='Enter your email ' />
          <span>This is an error message</span>
        </Styled.InputContainer>
        <Styled.InputContainer className='last'>
          <label htmlFor='password'>Password </label>
          <Styled.VisibilityOffRoundedIcon />
          <Styled.VisibilityRoundedIcon />
          <Input type='password' name='pswd' placeholder='Enter your password' />
          <span>This is an error message</span>
        </Styled.InputContainer>
        <Styled.SignupButton type='button'>Create an Account</Styled.SignupButton>
      </form>
      <p>
        Already have an account <a>Login</a>
      </p>
    </Styled.Container>
  );
}

export default SignUp;
