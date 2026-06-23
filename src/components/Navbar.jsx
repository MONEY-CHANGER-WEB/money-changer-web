import { useContext, useState, useEffect } from "react";
import { BrokerContext } from "../context/BrokerContext";

export default function Navbar() {
  const { logo, navLinks } = useContext(BrokerContext);
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // Track mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      if (window.isScrollingToSection) return;
      const isAtContact =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      if (isAtContact) {
        setActiveLink("");
        return;
      }
      for (const link of navLinks) {
        if (link === "Contact") continue;

        const element = document.getElementById(link.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 200) {
            setActiveLink(link);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger Toggle Button */}
      <button 
        className={`menu-toggle ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Conditional 'open' class for mobile drawer */}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link} className={link === "Contact" ? "contact-btn" : ""}>
            <a
              href={`#${link.toLowerCase()}`}
              onClick={() => {
                setIsOpen(false); // Close menu when a link is clicked
                if (link !== "Contact") {
                  window.isScrollingToSection = true;
                  setActiveLink(link);
                  setTimeout(() => {
                    window.isScrollingToSection = false;
                  }, 800);
                }
              }}
              className={
                link !== "Contact" && activeLink === link ? "active" : ""
              }
            >
              {link === "Contact" ? "Contact Us" : link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}