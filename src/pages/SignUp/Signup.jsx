import LogoIcon from '../../assets/Logo-icon.svg';
import {
  StyledInput,
  Logo,
  StyledContainer,
  StyledInputContainer,
  SignupButton,
} from './Signup.styles';

function SignUp() {
  return (
    <StyledContainer>
      <Logo src={LogoIcon} alt='Travel Craft Logo Icon' />
      <h1>Create an Account</h1>
      <p>Sign up now and gain access to Premium content</p>
      <form>
        <StyledInputContainer>
          <label htmlFor='username'>Username </label>
          <StyledInput type='text' name='username' placeholder='Enter your username' />
          <span>This is an error message</span>
        </StyledInputContainer>
        <StyledInputContainer>
          <label htmlFor='email'>Email</label>
          <StyledInput type='email' name='email' placeholder='Enter your email ' />
          <span>This is an error message</span>
        </StyledInputContainer>
        <StyledInputContainer className='last'>
          <label htmlFor='password'>Password </label>
          <StyledInput type='password' name='pswd' placeholder='Enter your password' />
          <span>This is an error message</span>
        </StyledInputContainer>
        <SignupButton type='button'>Create an Account</SignupButton>
      </form>
      <p>
        Already have an account <a>Login</a>
      </p>
    </StyledContainer>
  );
}

export default SignUp;
