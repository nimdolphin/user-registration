import RegistrationForm from '../RegistrationForm';
import logo from '../../assets/img/logo.png';
import appStore from '../../assets/img/appStore.png';
import googlePlay from '../../assets/img/googlePlay.png';
import './styles.scss';

const AccountForm = () => {
  return (
    <div className='white-block'>
      <div className='logo'>
        <img src={logo} alt='form-img' className='logo-img' />
        <h3 className='logo-title'>Logo</h3>
      </div>

      <div className='header'>
        <h2 className='header-title'>Create account</h2>
        <p className='header-subtitle'>For business, band or celebrity.</p>
      </div>

      <RegistrationForm />

      <div className='login-account'>
        Don’t have an account?
        <a href='/login'> Log In</a>
      </div>

      <div className='app-links'>
        <a href='https://play.google.com/store'>
          <img src={googlePlay} alt='google-play' />
        </a>
        <a href='https://www.apple.com/app-store/'>
          <img src={appStore} alt='app-store' />
        </a>
      </div>
    </div>
  );
};

export default AccountForm;
