import './Header.css';
import { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <img src="/logo.png" alt="SOM Logo" className="logo" />
            <nav className={`nav ${window.innerWidth < 768 && isMenuOpen ? 'open' : ''}`}>
                <ul className="nav-list">
                    <li><a href="Home.html" onClick={toggleMenu}>Home</a></li>
                    <li><a href="about.html" onClick={toggleMenu}>About us</a></li>
                    <li><a href="pkn.html" onClick={toggleMenu}>Preachers Kids' Network</a></li>
                    <li><a href="explore.html" onClick={toggleMenu}>Explore</a></li>
                    <li><a href="Blog.html" onClick={toggleMenu}>Blog</a></li>
                    <li><a href="events.html" onClick={toggleMenu}>Live Events</a></li>
                    {window.innerWidth < 768 && isMenuOpen && (
                        <li><a href="#contact" className="cta-button" onClick={toggleMenu}>Contact</a></li>
                    )}
                </ul>
                {window.innerWidth < 768 && (
                    <button className="menu-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? '×' : '☰'} {/* Toggle between X and lines */}
                    </button>
                )}
            </nav>
            {window.innerWidth >= 768 && <a href="#contact" className="cta-button standalone-cta">Contact</a>}
        </header>
    );
};

export default Header;