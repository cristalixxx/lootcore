import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      {/* Background image */}
      <div className="header-background">
        <img
          src="/images/img_header_1.png"
          alt="LootCore Halloween Header"
          className="header-image"
        />
      </div>

      {/* Login/Register */}
      <div className="auth-links">
        <Link to="/login" className="auth-link">
          Log in
        </Link>
        <div className="auth-divider"></div>
        <Link to="/register" className="auth-link">
          Register
        </Link>
      </div>

      {/* Navigation */}
      <nav className="main-navigation">
        <NavButton path="/" text="Home" />
        <NavButton path="/forum" text="Forum" />
        <NavButton path="/rules" text="Rules" />
        <NavButton path="/leaderboards" text="Leaderboards" />
        <NavButton path="/store" text="Store" />
      </nav>

      {/* Play Button */}
      <div className="play-section">
        <NavButton path="/play" text="Play" isGold={true}/>
        <p className="server-ip">
          <span className="ip-label">SERVER IP:</span>{" "}
          <span className="ip-address">LOOTCORE.PRO</span>
        </p>
      </div>
    </header>
  );
};

const NavButton = ({ path, text, width, isGold = false }) => {
  return (
    <Link to={path} className="nav-button-link">
      <div className={`nav-button-outer ${isGold ? "gold" : ""}`} >
        <div className="nav-button-inner">
          <p className={`nav-button-text ${isGold ? "gold" : ""}`}>{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default Header;