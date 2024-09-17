import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../../../Styles/LandingPage/Navbar.module.css";
import logo from "../../../assets/logo/Logo.png"; // Adjust the path if necessary

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    const handleScroll = () => {
      // if (window.scrollY > 50) {
      //   setShowNavbar(true);
      // } else {
      //   setShowNavbar(false);
      // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    console.log(showNavbar);
    if (showNavbar === true) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`${styles.navbar} ${styles.scrolled}`}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src={logo} alt="Zaeda Oracle" />
      </div>
      {showNavbar && (
        <nav
          className={`${styles.navbarMenu} ${
            mobileMenuOpen ? styles.open : styles.open
          }`}
        >
          <ul>
            <li
              //onClick={() => navigate("/home")}
              className={
                isActive("/home") ? styles.activeRoute : styles.navbarli
              }
            >
              Claim
            </li>
            <li
              //onClick={() => navigate("/our-services")}
              className={
                isActive("/our-services") ? styles.activeRoute : styles.navbarli
              }
            >
              Protect your Gadget
            </li>
            <li
              //onClick={() => navigate("/faqs")}
              className={
                isActive("/faqs") ? styles.activeRoute : styles.navbarli
              }
            >
              Repair your Gadget
            </li>

            {/* <li
              //onClick={() => navigate("/blog")}
              className={
                isActive("/blog") ? styles.activeRoute : styles.navbarli
              }
            >
              News and Insights
            </li> */}
            <li
              //onClick={() => navigate("/legal-insights")}
              className={
                isActive("/legal-insights")
                  ? styles.activeRoute
                  : styles.navbarlibtn
              }
            >
              Sign In
            </li>
          </ul>
        </nav>
      )}
      <nav
        className={`${styles.navbarMenu} ${
          mobileMenuOpen ? " " : styles.navbarMenu
        }`}
      >
        <ul>
          <li
            //onClick={() => navigate("/home")}
            className={isActive("/home") ? styles.activeRoute : styles.navbarli}
          >
            Claim
          </li>
          <li
            //onClick={() => navigate("/our-services")}
            className={
              isActive("/our-services") ? styles.activeRoute : styles.navbarli
            }
          >
            Protect your Gadget
          </li>
          <li
            //onClick={() => navigate("/faqs")}
            className={isActive("/faqs") ? styles.activeRoute : styles.navbarli}
          >
            Repair your Gadget
          </li>

          <li
            //onClick={() => navigate("/blog")}
            className={isActive("/blog") ? styles.activeRoute : styles.navbarli}
          >
            Buy Gadget
          </li>
          <li
            //onClick={() => navigate("/legal-insights")}
            className={
              isActive("/legal-insights")
                ? styles.activeRoute
                : styles.navbarlibtn
            }
            style={{ fontWeight: 500 }}
          >
            Sign In
          </li>
        </ul>
      </nav>

      <div className={styles.burgerMenu} onClick={toggleMobileMenu}>
        {showNavbar ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </header>
  );
};

export default Navbar;
