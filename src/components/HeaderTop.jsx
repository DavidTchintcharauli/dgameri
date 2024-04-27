import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const LanguageSwitcher = ({ onChangeLanguage, language }) => {
  const handleChangeLanguage = (selectedLanguage) => {
    onChangeLanguage(selectedLanguage);
  };

  const languageButtonStyle = {
    en: {
      backgroundColor: language === 'en' ? '#4A90E2' : '#FFFFFF',
      color: language === 'en' ? '#FFFFFF' : '#000000',
    },
    geo: {
      backgroundColor: language === 'geo' ? '#4CAF50' : '#FFFFFF',
      color: language === 'geo' ? '#FFFFFF' : '#000000',
    },
  };

  return (
    <div className="flex items-center">
      <button onClick={() => handleChangeLanguage('en')} className="mr-2 rounded-lg px-3 py-2" style={languageButtonStyle.en}>
        ENG
      </button>
      <button onClick={() => handleChangeLanguage('geo')} className="mr-2 rounded-lg px-3 py-2" style={languageButtonStyle.geo}>
        GEO
      </button>
    </div>
  );
};

LanguageSwitcher.propTypes = {
  onChangeLanguage: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

const ContactInfo = () => {
  return (
    <div className="flex items-center">
      <a href="tel:+591171885" className="mr-4">
        <FontAwesomeIcon icon={faPhoneAlt} />
        <span className="ml-1">593 400 296</span>
      </a>
      <a href="https://www.facebook.com/groups/145945176105479/user/61556533977221/" target="_blank" rel="noopener noreferrer" className="mr-4">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com/your-furniture-page" target="_blank" rel="noopener noreferrer" className="mr-4">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.linkedin.com/in/dgameri-furniture-house-9417612b4/?originalSubdomain=ge" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
};

const LoginButton = ({ onLogin, language }) => {
  const handleLogin = () => {
    onLogin();
  };

  const loginButtonText = {
    en: 'Login',
    geo: 'შესვლა',
  };

  return (
    <NavLink className="ml-auto" to="/signup">
      <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" aria-label="View Catalog">
        {loginButtonText[language]}
      </button>
    </NavLink >
  );
};

LoginButton.propTypes = {
  onLogin: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

const HomePage = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleLogin = () => {
    console.log('User logged in');
  };

  return (
    <div className="container mx-auto">
      <div className="py-4 flex items-center">
        <LanguageSwitcher onChangeLanguage={handleLanguageChange} language={language} />
        <ContactInfo />
        <LoginButton onLogin={handleLogin} language={language} />
      </div>
      {/* Your other content goes here */}
    </div>
  );
};

export default HomePage;
