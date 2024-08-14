import phone from '../../assets/img/phone.png';
import './styles.scss';

const phoneImages = ['left-phone', 'center-phone', 'right-phone'];

const SocialMediaShowcase = () => {
  return (
    <div className='blue-block'>
      <h1 className='title'>
        Social media shared today, tomorrow or by location
      </h1>
      <div className='phones-container'>
        {phoneImages?.map((position, index) => (
          <img
            key={index}
            src={phone}
            alt={`Phone ${index + 1}`}
            className={`phone ${position}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialMediaShowcase;
