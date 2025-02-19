import React from "react";
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="triangle-logo">
          <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="25,5 45,40 5,40" stroke="purple" strokeWidth="3" fill="none"/>
            <polygon points="25,15 38,35 12,35" fill="lightblue" opacity="0.5"/>
          </svg>
        </div>
        <div className="menu-section">
         
          <div className="menu-divider"></div>
          <span className="menu-text">MENU</span>
        </div>
      </div>
      <div className="header-right">
        <div className="hire-me">
        <svg width="30" height="30" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 22C12 14.82 18.82 8 26 8H38C45.18 8 52 14.82 52 22V36C52 43.18 45.18 50 38 50H24L14 56V46H12C4.82 46 2 43.18 2 36V22Z" 
        fill="none" stroke="purple" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


          <span className="hire-text">HIRE ME</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
