import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import vkontakte from '../../../public/images/vkontakte.png';
import facebook from '../../../public/images/facebook.png';
import twitter from '../../../public/images/twitter.png';
import telegram from '../../../public/images/telegram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo Section */}
          <div className="footer-logo-section">
            <div className="logo-container">
              <div className="logo-background"></div>
              <img 
                src="/images/img_q9wmgrhfem0photoroom_3.png" 
                alt="LootCore Logo" 
                className="logo-image"
              />
            </div>
            <div className="logo-decoration">
              <div className="decoration-left"></div>
              <div className="decoration-center"></div>
              <div className="decoration-right"></div>
            </div>
          </div>
          
          {/* Navigation Section */}
          <div className="footer-section">
            <h3 className="section-title">NAVIGATION</h3>
            <div className="section-divider"></div>
            <ul className="nav-links">
              <li>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/forum" className="nav-link">Forum</Link>
              </li>
              <li>
                <Link to="/rules" className="nav-link">Rules</Link>
              </li>
              <li>
                <Link to="/support" className="nav-link">Support</Link>
              </li>
            </ul>
          </div>
          
          {/* Store/Jobs Section */}
          <div className="footer-section">
            <h3 className="section-title invisible">.</h3>
            <div className="section-divider"></div>
            <ul className="nav-links">
              <li>
                <Link to="/store" className="nav-link">Store</Link>
              </li>
              <li>
                <Link to="/jobs" className="nav-link">Jobs</Link>
              </li>
            </ul>
          </div>
          
          {/* About Us Section */}
          <div className="footer-section">
            <h3 className="section-title">ABOUT US</h3>
            <div className="section-divider"></div>
            <p className="about-text">
              Lootcore is now one of the largest and highest quality Minecraft Server, featuring original games such as OneBlock, Chainsaw Simulator, Annihilation, and many more!
            </p>
            
            {/* Social Media Icons */}
            <div className="social-icons">
              <a href="https://facebook.com/lootcore" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" className="social-icon facebook" />
              </a>
              <a href="https://t.me/lootcore" target="_blank" rel="noopener noreferrer">
                <img src={telegram} alt="Telegram" className="social-icon telegram" />
              </a>
              <a href="https://tumblr.com/lootcore" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Tumblr" className="social-icon tumblr" />
              </a>
              <a href="https://vk.com/lootcore" target="_blank" rel="noopener noreferrer">
                <img src={vkontakte} alt="VK" className="social-icon vk" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;