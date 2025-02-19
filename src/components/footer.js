import React from "react";
import "./footer.css"; // Import CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>🚀 Trip Planner</h2>
        <p>Plan your perfect trip with us!</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">🌍</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</a>
        </div>
      </div>
      <p className="footer-text">© 2025 Trip Planner | All rights reserved.</p>
    </footer>
  );
}

export default Footer;
