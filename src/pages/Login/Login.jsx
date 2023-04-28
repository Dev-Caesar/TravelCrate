import LogoIcon from '../../assets/Logo-icon.svg';
import {
  StyledInput,
  Logo,
  StyledContainer,
  StyledInputContainer,
  SignupButton,
} from '../SignUp/Signup.styles';

function Login() {
  return (
    <StyledContainer>
      <Logo src={LogoIcon} alt='Travel Craft Logo Icon' />
      <h1>Welcome Back</h1>
      <p>Enter your details</p>
      <form>
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
        <SignupButton type='button'>Login</SignupButton>
      </form>
      <p>
        {"Don't"} have an account ?<a>Sign up</a>
      </p>
    </StyledContainer>
  );
}

export default Login;
