import React from 'react';
import './styles/footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">&copy; 2023 NICKYNOSTRESS. All Rights Reserved.</p>
        <ul className="social-icons">
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
