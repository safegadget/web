import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import "./Footer.css"; // Ensure to import the CSS for styling
import logo from "../../../assets/logo/safe.png"; // Replace with the actual path to your logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="SafeGad Logo" className="footer-logo-image" />
        <div className="footer-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="footer-icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="footer-icon" />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="footer-icon" />
          </a>
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} SafeGad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
