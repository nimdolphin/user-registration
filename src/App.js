import AccountForm from './components/AccountForm';
import SocialMediaShowcase from './components/SocialMediaShowcase';
import './App.scss';

const App = () => {
  return (
    <div className='container'>
      <SocialMediaShowcase />
      <AccountForm />
    </div>
  );
};

export default App;
