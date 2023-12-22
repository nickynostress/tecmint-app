// Footer.js

import React from 'react';
import PropTypes from 'prop-types';
import './styles/footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer({ isVisible, currentYear, socialIcons }) {
  const footerClass = isVisible ? 'footer' : 'footer-hidden';

  return (
    <>
      <footer className={footerClass}>
        <div className="container">
          <p className="footer-text">&copy; {currentYear} NICKYNOSTRESS. All Rights Reserved.</p>
          <ul className="social-icons">
            {socialIcons.map((social, index) => (
              <li key={index}><a href={social.link} target="_blank" rel="noopener noreferrer"><i className={`fab ${social.icon}`}></i></a></li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}

Footer.propTypes = {
  isVisible: PropTypes.bool,
  currentYear: PropTypes.number.isRequired,
  socialIcons: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Footer.defaultProps = {
  isVisible: false, // Footer is hidden by default
  currentYear: new Date().getFullYear(),
  socialIcons: [
    { link: 'https://www.facebook.com/your-facebook-page', icon: 'fa-facebook-f' },
    { link: 'https://twitter.com/your-twitter-account', icon: 'fa-twitter' },
    { link: 'https://www.instagram.com/your-instagram-account', icon: 'fa-instagram' },
    { link: 'https://www.linkedin.com/in/your-linkedin-profile', icon: 'fa-linkedin' },
  ],
};

export default Footer;