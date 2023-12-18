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
              <li key={index}><a href={social.link}><i className={`fab ${social.icon}`}></i></a></li>
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
    { link: '#', icon: 'fa-facebook-f' },
    { link: '#', icon: 'fa-twitter' },
    { link: '#', icon: 'fa-instagram' },
    { link: '#', icon: 'fa-linkedin' },
  ],
};

export default Footer;