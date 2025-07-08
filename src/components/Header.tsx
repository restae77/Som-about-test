import './Header.css';

const Header: React.FC = () => {
    return (
        <header>
            <img src="/logo.png" alt="SOM Logo" className="logo" />
            <nav>
                <ul>
                    <li><a href="Home.html">Home</a></li>
                    <li><a href="about.html">About us</a></li>
                    <li><a href="pkn.html">Preachers Kids' Network</a></li>
                    <li><a href="explore.html">Explore</a></li>
                    <li><a href="Blog.html">Blog</a></li>
                    <li><a href="events.html">Live Events</a></li>
                </ul>
            </nav>
            <a href="#contact" className="cta-button">Contact</a>
        </header>
    );
};

export default Header;