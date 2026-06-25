import { useContext, useState, useEffect } from "react";
import { BrokerContext } from "../context/BrokerContext";

export default function Navbar() {
  const { logo, navLinks } = useContext(BrokerContext);
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // Track mobile menu state

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Jika kita sedang auto-scroll (klik menu), abaikan logic ini
        if (window.isScrollingToSection) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === "contact") {
              setActiveLink("");
            } else {
              const formattedId = id.charAt(0).toUpperCase() + id.slice(1);
              setActiveLink(formattedId);
            }
          }
        });
      },
      { threshold: 0.6 },
    );
    navLinks.forEach((link) => {
      const element = document.getElementById(link.toLowerCase());
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <header className="nav-container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <button
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Conditional 'open' class for mobile drawer */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
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
    </header>
  );
}
